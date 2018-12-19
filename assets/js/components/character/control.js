Vue.component('characterControl', {
  props: ['character'],
  template: [
      '<div>',
      '</div>'
	  	].join(''),
  created: function () {
    window.addEventListener('keydown', this.moveAction)

    // load character position
    let npc_list = config.db.map[config.db.map.activeMap].layerEvents
    for (row_idx in npc_list) {
      for (col_idx in npc_list[row_idx]) {
        let npc = npc_list[row_idx][col_idx]

        if (npc[config.character.id]) {
          Vue.set(config.character.position, 0, parseInt(col_idx))
          Vue.set(config.character.position, 1, parseInt(row_idx))
        }
      }
    }
  },
  methods: {
    moveAction: function (e) {
        // Todo: refactor with movePlayer virwMapTile component
        let position = this.character.position
        let previous_pos = [...position]
        let new_position = [...position]

        if ([37, 38, 39, 40].indexOf(e.keyCode) >= 0) {
          pauseEvent(e);
        }

        let directions = []
        if (37 == e.keyCode) {
          new_position[0] = parseInt(new_position[0] - 1)
          directions.push("left")
        }
        if (39 == e.keyCode) {
          new_position[0] = parseInt(new_position[0] + 1)
          directions.push("right")
        }
        if (38 == e.keyCode) {
          new_position[1] = parseInt(new_position[1] - 1)
          directions.push("up")
        }
        if (40 == e.keyCode) {
          new_position[1] = parseInt(new_position[1] + 1)
          directions.push("down")
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

        if (37 == e.keyCode) {
          Vue.set(position, 0, parseInt(position[0] - 1))
        }
        if (39 == e.keyCode) {
          Vue.set(position, 0, parseInt(position[0] + 1))
        }
        if (38 == e.keyCode) {
          Vue.set(position, 1, parseInt(position[1] - 1))
        }
        if (40 == e.keyCode) {
          Vue.set(position, 1, parseInt(position[1] + 1))
        }

        this.changedCharacterPostiton(previous_pos)
    },

    changedCharacterPostiton: function (previous_pos) {
      let position = this.character.position

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
              player_id: this.character.id,
              icon: "assets/player.png",
              tile_icon: "assets/player.png",
      })

      // track steps
      config.step++
    }
  }
})