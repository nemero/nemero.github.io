Vue.component('executeEvent', {
  props: ['event'],
  data: function () {
    return {
      new_position: false
    }
  },
  template: [
      '<div>',
        '<div style="display: none">{{ event }}</div>',
      '</div>'
	  	].join(''),
  updated: function () {
    if (this.event) {
      if (config.activeUI == "game-over") {
        return
      }
      let _event = this.event

      if (_event.id == "move") {
        let test = this.move()
        // just rotate if cant move
        if (!test) {
          if (config.db.map[config.db.map.activeMap].layerEvents[this.event.position[1]][this.event.position[0]][this.event.player_id].direction !== this.event.directions[0]) {
            this.setPlayerDirection(this.event.position, this.event.player_id, this.event.directions[0])
            return
          }

          // if we cant move on next cell will trigger event on next cell
          // NOTE: it used for trigger action when clicking tile by mouse
          let direction_position = [...this.event.position]
          if (this.event.directions[0] == "up") {
            direction_position[1]--
          }
          if (this.event.directions[0] == "down") {
            direction_position[1]++
          }
          if (this.event.directions[0] == "left") {
            direction_position[0]--
          }
          if (this.event.directions[0] == "right") {
            direction_position[0]++
          }

          let objects = config.db.map[config.db.map.activeMap].layerEvents
          let events = null
          if (objects[direction_position[1]] && objects[direction_position[1]][direction_position[0]]) {
            events = objects[direction_position[1]][direction_position[0]]
          }

          for (idx in events) {
            let new_event = events[idx]
            if (this.isAvailable(new_event) && !new_event.hidden) {
              _event = {
                id: "enter",
                event: new_event
              }

              break
            }
          }
        }

      }

      let event = _event.event
      if (_event.id == "enter") {
        // trigger only enemies event if exist
        if (event.id !== "enemies") {
          for (layer_idx in config.activeEvents) {
            let layer = config.activeEvents[layer_idx]
            if (layer.id == "enemies" /*&& !_event.interactions*/ && 
                (
                  layer.cooldown == undefined || 
                  layer.cooldown_left == undefined || 
                  layer.cooldown_left <= config.step
                ) && 
                !layer.hidden
            ) {
              event = layer
            }
          }
        }

        this.enter(event)
      }
    }
    //Vue.set(this.event, null) // changed variable can't be root element of component, so instead use next code
    Vue.set(config, "executeEvent", null)
  },
  methods: {
    move: function () {
      let position = this.event.position
      let previous_pos = [...position]
      let new_position = [...position]
      
      if (this.event.directions.indexOf("left") >= 0) {
        new_position[0] = parseInt(new_position[0] - 1)
      }
      if (this.event.directions.indexOf("right") >= 0) {
        new_position[0] = parseInt(new_position[0] + 1)
      }
      if (this.event.directions.indexOf("up") >= 0) {
        new_position[1] = parseInt(new_position[1] - 1)
      }
      if (this.event.directions.indexOf("down") >= 0) {
        new_position[1] = parseInt(new_position[1] + 1)
      }

      // set new_position for trigger event if cant move on cell
      this.new_position = []
      this.new_position[0] = new_position[0]
      this.new_position[1] = new_position[1]

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
          for (idx in this.event.directions) {
            let direction = this.event.directions[idx]
            if (config.db.map.directions_tiles[tile.map][tile.id].indexOf(direction) < 0) {
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
          for (idx in this.event.directions) {
            let direction = this.event.directions[idx]
            let new_direction = ""
            if (direction == "left") {
              new_direction = "right"
              if (config.db.map.directions_tiles[tile.map][tile.id].indexOf(new_direction) < 0) {
                return // we cant move 
              }
            }

            if (direction == "right") {
              new_direction = "left"
              if (config.db.map.directions_tiles[tile.map][tile.id].indexOf(new_direction) < 0) {
                return // we cant move 
              }
            }

            if (direction == "up") {
              new_direction = "down"
              if (config.db.map.directions_tiles[tile.map][tile.id].indexOf(new_direction) < 0) {
                return // we cant move 
              }
            }

            if (direction == "down") {
              new_direction = "up"
              if (config.db.map.directions_tiles[tile.map][tile.id].indexOf(new_direction) < 0) {
                return // we cant move 
              }
            }
          }
        }
      }

      // set player position
      Vue.set(position, 0, parseInt(new_position[0]))
      Vue.set(position, 1, parseInt(new_position[1]))


      console.time('change_map_pos')
      // set map position
      if (!config.db.map[config.db.map.activeMap].layerEvents[position[1]]) {
        Vue.set(config.db.map[config.db.map.activeMap].layerEvents, position[1], {})
      }
      if (!config.db.map[config.db.map.activeMap].layerEvents[position[1]][position[0]]) {
        Vue.set(config.db.map[config.db.map.activeMap].layerEvents[position[1]], position[0], {})
      }
      this.$nextTick(function () {
        console.timeEnd('change_map_pos')
      })

      // remove old indication position
      if (config.db.map[config.db.map.activeMap].layerEvents[previous_pos[1]] && config.db.map[config.db.map.activeMap].layerEvents[previous_pos[1]][previous_pos[0]]) {
        Vue.delete(config.db.map[config.db.map.activeMap].layerEvents[previous_pos[1]][previous_pos[0]], this.event.player_id)
      }

      // add new indication position
      this.setPlayerDirection(position, this.event.player_id, this.event.directions[0])

      // track steps
      config.step++
      return true
    },
    enter: function (event) {
      //let event = this.event.event
      // console.log(event.id, event.cooldown, event.cooldown_left, config.step)
      // variable can be undefined or null or 0......
      if (event.id == "enemies" && 
            (
              event.cooldown == undefined || 
              event.cooldown_left == undefined ||
              event.cooldown_left <= config.step
            )
        ) {
        if (event.interactions && config.activeUI !== "dialog") {
          config.activeInteractions = event // copy link on object
          config.activeUI = "dialog"
          return
        }

        let counter = 0
        config.activeEnemies = []
        for (enemy_idx in event.enemies) {
          let enemy = config.db.enemies[event.enemies[enemy_idx]]

          // indexing creating enemies 
          enemy['object_idx'] = counter
          config.activeEnemies.push(JSON.parse(JSON.stringify(enemy)))
          counter += 1
        }

        // show ui battle
        config.activeUI = "battle"
      }

      // open lock
      if (event.id == "unlock") {
        
        // search item in character bag
        if (event.type_unlock == "item" && config.character.bag.indexOf(event.item) < 0 ) {
          return
        }

        // tile.type_unlock == "use"
        for (trigger_idx in event.triggers) {
          let trigger = event.triggers[trigger_idx]
          if (trigger.type_trigger == "show_event_tile") {
            if (config.db.map[trigger.map] && config.db.map[trigger.map].layerEvents[trigger.position[1]][trigger.position[0]][trigger.event_id]) {
              Vue.set(config.db.map[trigger.map].layerEvents[trigger.position[1]][trigger.position[0]][trigger.event_id], "hidden", false)
            }
          }

          if (trigger.type_trigger == "hide_event_tile") {
            if (config.db.map[trigger.map] && config.db.map[trigger.map].layerEvents[trigger.position[1]][trigger.position[0]][trigger.event_id]) {
              Vue.set(config.db.map[trigger.map].layerEvents[trigger.position[1]][trigger.position[0]][trigger.event_id], "hidden", true)
            }   
          }

          if (trigger.type_trigger == "replace_tile") {
            if (config.db.map[trigger.map] && config.db.map[trigger.map].map[trigger.position[1]][trigger.position[0]]) {
              Vue.set(config.db.map[trigger.map].map[trigger.position[1]][trigger.position[0]], trigger.layer_id, trigger.tile) 
            } 
          }
        }
      }

      if (event.id == "teleport") {
        // set character position
        // remove old player position on old map
        if (config.db.map[config.db.map.activeMap].layerEvents[config.character.position[1]] && config.db.map[config.db.map.activeMap].layerEvents[config.character.position[1]][config.character.position[0]]) {
          Vue.delete(config.db.map[config.db.map.activeMap].layerEvents[config.character.position[1]][config.character.position[0]], config.character.id)  
        }

        // change map 
        config.db.map.activeMap = event.map

        console.time('change_map_pos_event')
        if (!config.db.map[config.db.map.activeMap].layerEvents[event.position[1]]) {
          Vue.set(config.db.map[config.db.map.activeMap].layerEvents, event.position[1], {})  
        }
        if (!config.db.map[config.db.map.activeMap].layerEvents[event.position[1]][event.position[0]]) {
          Vue.set(config.db.map[config.db.map.activeMap].layerEvents[event.position[1]], event.position[0], {})  
        }
        this.$nextTick(function () {
          console.timeEnd('change_map_pos_event')
        })

        this.setPlayerDirection(event.position, config.character.id, "down")

        config.character.position = [...event.position]
      }

      if (event.id == "loot_box") {
        for (item_idx in event.items) {
          let item = event.items[item_idx]
          config.character.bag.push(item)
        }

        // hide chest
        Vue.set(event, "hidden", true)  
      }
    },
    isAvailable: function (event) {
      if (event.id == "player" && config.character.id == event["player_id"]) {
        return false
      }


      // check conditions if exist
      if (event.conditions) {
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
    },
    setPlayerDirection: function (position, player_id, direction) {
      Vue.set(config.db.map[config.db.map.activeMap].layerEvents[position[1]][position[0]], player_id, {
        id: "player",
        name: "Player Kokoko",
        player_id: player_id,
        direction: direction ? direction : "",
        icon: "icon-player",
        tile_icon: "icon-player",
      })
    }
  }
})