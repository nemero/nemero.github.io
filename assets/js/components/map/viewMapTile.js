Vue.component('viewMapTile', {
  props: ['row_id', 'col_id', 'zone'],
  template: ['<span class="tile" @click="movePlayer">',
      '<view-map-tile-layer-default :zone="zone"></view-map-tile-layer-default>',
      '<view-map-tile-layer v-for="tile in getTiles" :tile="tile"></view-map-tile-layer>',
      '<view-map-tile-layer-event v-for="layer in getLayerEvents" :layer="layer" :tiles="getLayerEvents"></view-map-tile-layer-event>',
      '<span class="service">{{ getRowId }}/{{ getColId }} {{ getTileName }}</span>',
    '</span>'].join(""),
  methods: {
    selectEnemy: function () {
      let objects = this.zone.layerEvents

      if (objects[this.getRowId] && objects[this.getRowId][this.getColId]) {
        for (idx_layer_item in objects[this.getRowId][this.getColId]) {
          let tile = objects[this.getRowId][this.getColId][idx_layer_item]
          let layer_tale = config.db.map.tiles[tile.id]

          if (tile.type == "enemies") {
            let counter = 0
            config.activeEnemies = []
            for (enemy_idx in tile.enemies) {
              let enemy = config.db.enemies[tile.enemies[enemy_idx]]

              // indexing creating enemies 
              enemy['object_idx'] = counter
              config.activeEnemies.push(JSON.parse(JSON.stringify(enemy)))
              counter += 1
            }
          }
        }
      }
    },
    movePlayer: function () {
        // Todo: refactor with moveAction character component
        let position = config.character.position
        let previous_pos = [...position]
        let new_position = [...position]

        let directions = []
        //console.log(this.getRowId, this.getColId)
        if (this.getRowId > position[1]) {
          new_position[1] = parseInt(position[1]) + 1
          directions.push("down")
        }
        if (this.getRowId < position[1]) {
          new_position[1] = parseInt(position[1]) - 1
          directions.push("up")
        }
        if (this.getColId > position[0]) {
          new_position[0] = parseInt(position[0]) + 1
          directions.push("right")
        }
        if (this.getColId < position[0]) {
          new_position[0] = parseInt(position[0]) - 1
          directions.push("left")
        }
        
        // check if can character move on new position
        let cell_tiles = config.db.map[config.db.map.activeMap].map
        // user cant move on not exist tiles
        if (!cell_tiles[new_position[1]] || !cell_tiles[new_position[1]][new_position[0]]) {
          return
        }

        
        //let cant_move = true
        for (tile_idx in cell_tiles[new_position[1]][new_position[0]]) {
          let tile = cell_tiles[new_position[1]][new_position[0]][tile_idx]

          //let exclude_list = ['tile-map3']
          if (tile.map == "tile-map3" || (config.db.map.stop_tiles[tile.map] && config.db.map.stop_tiles[tile.map].indexOf(tile.id) >= 0)) {
            return
          }
        }

        // check direction from current postition
        for (tile_idx in cell_tiles[position[1]][position[0]]) {
          let tile = cell_tiles[position[1]][position[0]][tile_idx]

          // checking available direction 
          if (config.db.map.directions_tiles[tile.map] && config.db.map.directions_tiles[tile.map][tile.id]) {
            let can_move = true
            for (idx in directions) {
              let direction = directions[idx]
              if (!config.db.map.directions_tiles[tile.map][tile.id][direction]) {
                return // we cant move 
              }

            }
          }
        }        

        // check direction to new postition
        for (tile_idx in cell_tiles[new_position[1]][new_position[0]]) {
          let tile = cell_tiles[new_position[1]][new_position[0]][tile_idx]

          // checking available direction 
          if (config.db.map.directions_tiles[tile.map] && config.db.map.directions_tiles[tile.map][tile.id]) {
            let can_move = true
            for (idx in directions) {
              let direction = directions[idx]
              let new_direction = ""
              if (direction == "left") {
                new_direction = "right"
                if (!config.db.map.directions_tiles[tile.map][tile.id][new_direction]) {
                  return // we cant move 
                }
              }

              if (direction == "right") {
                new_direction = "left"
                if (!config.db.map.directions_tiles[tile.map][tile.id][new_direction]) {
                  return // we cant move 
                }
              }

              if (direction == "up") {
                new_direction = "down"
                if (!config.db.map.directions_tiles[tile.map][tile.id][new_direction]) {
                  return // we cant move 
                }
              }

              if (direction == "down") {
                new_direction = "up"
                if (!config.db.map.directions_tiles[tile.map][tile.id][new_direction]) {
                  return // we cant move 
                }
              }
            }
          }
        }      
        
        Vue.set(position, 0, parseInt(new_position[0]))
        Vue.set(position, 1, parseInt(new_position[1]))

        this.changedCharacterPostiton(previous_pos)
    },
    changedCharacterPostiton: function (previous_pos) {
      let position = config.character.position

      if (!config.db.map[config.db.map.activeMap].layerEvents[position[1]]) {
        Vue.set(config.db.map[config.db.map.activeMap].layerEvents, position[1], {})  
      }
      if (!config.db.map[config.db.map.activeMap].layerEvents[position[1]][position[0]]) {
        Vue.set(config.db.map[config.db.map.activeMap].layerEvents[position[1]], position[0], {})  
      }

      //console.log(previous_pos, position)
      if (config.db.map[config.db.map.activeMap].layerEvents[previous_pos[1]] && config.db.map[config.db.map.activeMap].layerEvents[previous_pos[1]][previous_pos[0]]) {
        Vue.delete(config.db.map[config.db.map.activeMap].layerEvents[previous_pos[1]][previous_pos[0]], config.character.id)  
      }

      Vue.set(config.db.map[config.db.map.activeMap].layerEvents[position[1]][position[0]], config.character.id, {
              id: "player",
              name: "Player Kokoko",
              player_id: config.character.id,
              icon: "icon-player0",
              tile_icon: "icon-player0",
      })

      // track steps
      config.step++
    }
  },
  computed: {
    getRowId: function () {
      let offset_y = config.character.position[1]
      let height = Math.trunc(config.db.map.viewport[1]/2)
      let row_idx = this.row_id + parseInt(offset_y) - height 

      return row_idx
    },
    getColId: function () {
      let offset_x = config.character.position[0]
      let width = Math.trunc(config.db.map.viewport[0]/2)
      let col_idx = this.col_id + parseInt(offset_x) - width

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
  }
})
