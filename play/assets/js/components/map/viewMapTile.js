Vue.component('viewMapTile', {
  props: ['row_id', 'col_id', 'zone'],
  template: ['<span style="display: none;" class="tile">', //' @click="movePlayer">',
    '{{ isChangedCheck() }}',
    '</span>'].join(""),
  created: function () {
    this.$nextTick(function () {
      this.render()
    })
  },
  updated: function () {
      // draw canvas
      this.$nextTick(function () {
        this.render()
      })
  },
  methods: {
    isChangedCheck: function () {
      // default tile
      if (this.zone.default_tile) {
        let tile = this.zone.default_tile
      }

      // draw tiles
      for (idx in this.getTiles) {
        let tile = this.getTiles[idx]
      }

      // draw tile events
      for (idx in this.getLayerEvents) {
        let tile = this.getLayerEvents[idx]

        // checking is visible event for reactive rendering
        if (tile.hidden || tile["cooldown_left"] > config.step) {
          continue
        }
      }
    },
    render: function () {
      let canvas = document.getElementById("map");
      let ctx = canvas.getContext('2d');
      let width = config.db.map.tileSize[0]
      let height = config.db.map.tileSize[1]
      let z_tiles = []
      let scale = config.map_scale

      // default tile
      if (this.zone.default_tile) {
        let tile = this.zone.default_tile
        let offset_x = 0
        let offset_y = 0

        if (tile['position']) {
          offset_x = tile['position'][0]*config.db.map.tileSize[0]
          offset_y = tile['position'][1]*config.db.map.tileSize[1]  
        }

        if (!document.getElementById(tile.map_class)) {
          console.log('missed texture', width, height, tile.map_class)
        } else {
          //console.log(offset_x, offset_y, width, height, document.getElementById(tile.map), canvas, ctx)
          ctx.drawImage(document.getElementById(tile.map_class),
              offset_x, offset_y, width, height,
              this.col_id*width*scale, this.row_id*height*scale, width*scale, height*scale
          );
        }
      }

      // draw tiles
      for (idx in this.getTiles) {
        let tile = this.getTiles[idx]
        let offset_x = 0
        let offset_y = 0

        if (config.db.map.z_tiles[tile.map] && config.db.map.z_tiles[tile.map].indexOf(tile.id) >= 0) {
          z_tiles.push(tile)
          continue
        }

        if (tile['offset']) {
          offset_x = tile['offset'][0]*config.db.map.tileSize[0]
          offset_y = tile['offset'][1]*config.db.map.tileSize[1]  
        }
        
        if (!document.getElementById(tile.map)) {
          console.log('missed texture', width, height, tile.map)
          continue
        }
        //console.log(offset_x, offset_y, width, height, document.getElementById(tile.map), canvas, ctx)
        ctx.drawImage(document.getElementById(tile.map),
            offset_x, offset_y, width, height,
            this.col_id*width*scale, this.row_id*height*scale, width*scale, height*scale
        );
        //canvas.style.width = width*6 + 'px';
        //canvas.style.height = height*3 + 'px';
        //scaleCanvas(canvas, ctx, width*2, height*2)
        //ctx.drawImage(document.getElementById(tile.map), 0, 0);
      }

      // draw tile events
      for (idx in this.getLayerEvents) {
        let tile = this.getLayerEvents[idx]
        let offset_x = 0
        let offset_y = 0
        let source_id = ""

        if (tile.tile_icon) {
          if (tile.direction) {
            source_id = tile.tile_icon + "-" + tile.direction
          } else {
            source_id = tile.tile_icon
          }

          if (!document.getElementById(source_id)) {
            console.log('missed texture', width, height, source_id)
            continue
          }

          // checking is visible event
          if (!this.isAvailable(tile)) {
            continue
          }

          let source = document.getElementById(source_id);
          // resize
          let or_width = Math.round((width/100)*80)
          let or_height = Math.round((height/100)*80)
          offset_x = Math.round((width - (width/100)*80)/2)
          offset_y = Math.round((height - (height/100)*80)/2)
          // get source image size

          // if (tile.tile_position) {
          //   console.log(this.col_id, this.row_id, tile.tile_position[0], tile.tile_position[1], this.getColId, this.getRowId)
          //   // tile_position
          //   let col_id = 0
          //   let row_id = 0
          //   if (tile.tile_position[0] % 1 >= 0.5) {
          //     col_id = this.col_id - 1 + tile.tile_position[0] % 1
          //   } else {
          //     col_id = this.col_id + tile.tile_position[0] % 1
          //   }

          //   if (tile.tile_position[1] % 1 >= 0.5) {
          //     row_id = this.row_id - 1 + tile.tile_position[1] % 1
          //   } else {
          //     row_id = this.row_id + tile.tile_position[1] % 1
          //   }

          //   ctx.drawImage(source,
          //     0, 0, source.naturalWidth, source.naturalHeight,
          //     col_id*width + offset_x, 
          //     row_id*height + offset_y, 
          //     or_width, or_height
          //   )
          // } else {
            ctx.drawImage(source,
              0, 0, source.naturalWidth, source.naturalHeight,
              (this.col_id*width + offset_x)*scale, 
              (this.row_id*height + offset_y)*scale, 
              or_width*scale, or_height*scale
            )
          //}
        }
      }

      // draw z_tiles
      for (idx in z_tiles) {
        let tile = z_tiles[idx]
        let offset_x = 0
        let offset_y = 0

        if (tile['offset']) {
          offset_x = tile['offset'][0]*config.db.map.tileSize[0]
          offset_y = tile['offset'][1]*config.db.map.tileSize[1]  
        }
        
        if (!document.getElementById(tile.map)) {
          console.log('missed texture', width, height, tile.map)
          continue
        }
        ctx.drawImage(document.getElementById(tile.map),
            offset_x, offset_y, width, height,
            this.col_id*width*scale, this.row_id*height*scale, width*scale, height*scale
        );
      }
    },
    movePlayer: function () {
        //this.renderer()
        if (config.activeUI !== "world") {
          return
        }
        
        let position = this.character.position
        if (position[0] == this.getColId && position[1] == this.getRowId) {
          // if click on same cell trigger event
          let events = this.getLayerEvents
          for (idx in events) {
            let event = events[idx]
            if (this.isAvailable(event) && !event.hidden) {
              Vue.set(config, "executeEvent", {
                id: "enter",
                event: event
              })

              return
            }
          }
        } else {
          let position_prev = [...position]
          let directions = []
          if (this.getRowId > position[1]) {
            directions.push("down")
          }
          if (this.getRowId < position[1]) {
            directions.push("up")
          }
          if (this.getColId > position[0]) {
            directions.push("right")
          }
          if (this.getColId < position[0]) {
            directions.push("left")
          }

          Vue.set(config, "executeEvent", {
            id: "move",
            position: position,
            player_id: this.character.id,
            directions: directions
          })
        }

        return
    },
    isAvailable: function (event) {
      if (event.id == "player") {
        return true
      }

      if (!isVisibleTileEvent(event)) {
        return false
      }

      return true
    },
    getTileUID: function () {
      let uid = this.character.position.join("-")

      //for
      uid += this.getRowId + "_" + this.getColId
      if (this.character.position[0] == this.getColId && this.character.position[1] == this.getRowId) {
        console.log(this.tile_uid)
      }

      // draw tile events
      for (idx in this.getLayerEvents) {
        let tile = this.getLayerEvents[idx]
        let offset_x = 0
        let offset_y = 0
        let source_id = ""

        if (tile.tile_icon) {
          if (tile.direction) {
            source_id = tile.tile_icon + "-" + tile.direction
          } else {
            source_id = tile.tile_icon
          }

          // if (!document.getElementById(source_id)) {
          //   console.log('missed texture', width, height, source_id)
          //   continue
          // }
          // ctx.drawImage(document.getElementById(source_id),
          //     offset_x, offset_y, width, height,
          //     this.col_id*width, this.row_id*height, width, height
          // );

          uid += source_id
        }
      }
      return uid + this.tile_uid
    }
  },
  computed: {
    getRowId: function () {
      let offset_y = this.character.position[1]
      let height = Math.trunc(config.db.map.viewport[1]/2)
      let row_idx = this.row_id + parseInt(offset_y) - height 

      //return this.row_id
      return row_idx
    },
    getColId: function () {
      let offset_x = this.character.position[0]
      let width = Math.trunc(config.db.map.viewport[0]/2)
      let col_idx = this.col_id + parseInt(offset_x) - width

      //return this.col_id
      return col_idx
    },
  	getTiles: function () {
  		let tiles = {}
  		if (this.zone.map[this.getRowId] && this.zone.map[this.getRowId][this.getColId]) {
  			tiles = this.zone.map[this.getRowId][this.getColId]
  		}

  		return tiles
  	},
  	getTileName: function () {
  		if (this.zone.map[this.getRowId] && this.zone.map[this.getRowId][this.getColId]) {
  			let tile = this.zone.map[this.getRowId][this.getColId]
  			return tile.id
  		}

  		return null
  	},
    getLayerEvents: function () {
      let objects = this.zone.layerEvents
      if (objects[this.getRowId] && objects[this.getRowId][this.getColId]) {
        return objects[this.getRowId][this.getColId]
      }

      return null
    },
    getCellId: function () {
      return 'cell_' + this.getRowId + '_' + this.getColId
    },
    character: function () {
      return config.characters[config.character[0]]
    }
  },
})
