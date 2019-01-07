Vue.component('viewMapTile', {
  props: ['row_id', 'col_id', 'zone'],
  template: ['<span class="tile" @click="movePlayer">',
      //'<view-map-tile-layer-default :zone="zone"></view-map-tile-layer-default>',
      //'<canvas :id="getCellId" style="width: 48px; height: 48px;"></canvas>',
      //'<view-map-tile-layer v-for="tile in getTiles" :tile="tile"></view-map-tile-layer>',
      '<view-map-tile-layer-event v-for="layer in getLayerEvents" :layer="layer" :tiles="getLayerEvents"></view-map-tile-layer-event>',
      //'<span class="service">{{ getRowId }}/{{ getColId }} {{ getTileName }}</span>',
    '</span>'].join(""),
  updated: function () {
      // draw canvas
      //this.$nextTick(function () {
        let canvas = document.getElementById("map");
        let ctx = canvas.getContext('2d');
        let width = config.db.map.tileSize[0]
        let height = config.db.map.tileSize[1]

        // default tile
        if (this.zone.default_tile) {
          let tile = this.zone.default_tile
          let offset_x = 0
          let offset_y = 0

          if (tile['position']) {
            offset_x = tile['position'][0]*config.db.map.tileSize[0]
            offset_y = tile['position'][1]*config.db.map.tileSize[1]  
          }
          
          //console.log(offset_x, offset_y, width, height, document.getElementById(tile.map), canvas, ctx)
          ctx.drawImage(document.getElementById(tile.map_class),
              offset_x, offset_y, width, height,
              this.col_id*width, this.row_id*height, width, height
          );
        }

        // draw tiles
        for (idx in this.getTiles) {
          let tile = this.getTiles[idx]
          let offset_x = 0
          let offset_y = 0

          if (tile['offset']) {
            offset_x = tile['offset'][0]*config.db.map.tileSize[0]
            offset_y = tile['offset'][1]*config.db.map.tileSize[1]  
          }
          
          //console.log(offset_x, offset_y, width, height, document.getElementById(tile.map), canvas, ctx)
          ctx.drawImage(document.getElementById(tile.map),
              offset_x, offset_y, width, height,
              this.col_id*width, this.row_id*height, width, height
          );
          //canvas.style.width = width*6 + 'px';
          //canvas.style.height = height*3 + 'px';
          //scaleCanvas(canvas, ctx, width*2, height*2)
          //ctx.drawImage(document.getElementById(tile.map), 0, 0);
        }
      //})
  },
  methods: {
    movePlayer: function () {
        //this.renderer()
        if (config.activeUI !== "world") {
          return
        }
        
        let position = config.character.position
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
            player_id: config.character.id,
            directions: directions
          })
        }

        return
    },
    isAvailable: function (event) {
      if (event.id == "player" && config.character.id == event["player_id"]) {
        return false
      }

      // check conditions if exist
      if (event.conditions && event.conditions.length > 0) {
        let is_showing = true
        for (condition_idx in event.conditions) {
          let condition = event.conditions[condition_idx]
          if (condition.type_condition == "exist_tile") {
            if (config.db.map[condition.map].map[condition.position[1]][condition.position[0]][condition.layer_id].id != condition.tile.id) {
              is_showing = false
            }
          }
        }

        return is_showing
      }

      if (event.hidden || event.cooldown_left > config.step) {
        return false
      }

      return true
    }
  },
  computed: {
    getRowId: function () {
      let offset_y = config.character.position[1]
      let height = Math.trunc(config.db.map.viewport[1]/2)
      let row_idx = this.row_id + parseInt(offset_y) - height 

      //return this.row_id
      return row_idx
    },
    getColId: function () {
      let offset_x = config.character.position[0]
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
    }
  }
})
