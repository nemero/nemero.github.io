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
      let test = false
      let action = this.event

      if (action.id == "move") {
        test = this.move()
        // just rotate if cant move
        if (!test) {
          if (config.db.map[config.db.map.activeMap].layerEvents[Math.round(this.event.position[1])][Math.round(this.event.position[0])][this.event.player_id].direction !== this.event.directions[0]) {
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
              action = {
                id: "enter",
                event: new_event
              }

              break
            }
          }
        }

      }

      let event = action.event
      if (action.id == "enter") {
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
      let position = this.event.position // float coordinate
      let previous_pos = []
      let new_position = [] // event position
      let float_position = [...position]
      let speed = 1

      previous_pos[0] = Math.round(position[0])
      previous_pos[1] = Math.round(position[1])
      
      if (this.event.directions.indexOf("left") >= 0) {
        float_position[0] = parseFloat(float_position[0] - speed)
      }
      if (this.event.directions.indexOf("right") >= 0) {
        float_position[0] = parseFloat(float_position[0] + speed)
      }
      if (this.event.directions.indexOf("up") >= 0) {
        float_position[1] = parseFloat(float_position[1] - speed)
      }
      if (this.event.directions.indexOf("down") >= 0) {
        float_position[1] = parseFloat(float_position[1] + speed)
      }

      // set new_position for trigger event if cant move on cell
      new_position[0] = Math.round(float_position[0])
      new_position[1] = Math.round(float_position[1])

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
      for (tile_idx in cell_tiles[Math.round(position[1])][Math.round(position[0])]) {
        let tile = cell_tiles[Math.round(position[1])][Math.round(position[0])][tile_idx]

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
      Vue.set(position, 0, float_position[0])
      Vue.set(position, 1, float_position[1])

      // TODO: need check is exist events on new cell?
      if (config.db.map[config.db.map.activeMap].layerEvents[Math.round(position[1])] 
          && config.db.map[config.db.map.activeMap].layerEvents[Math.round(position[1])][Math.round(position[0])]
          && Object.keys(config.db.map[config.db.map.activeMap].layerEvents[Math.round(position[1])][Math.round(position[0])]).length > 0
      ) {
        let all_hidden = true
        for (idx in config.db.map[config.db.map.activeMap].layerEvents[Math.round(position[1])][Math.round(position[0])]) {
          let event = config.db.map[config.db.map.activeMap].layerEvents[Math.round(position[1])][Math.round(position[0])][idx]
          if (isVisibleTileEvent(event)) {
            all_hidden = false
            break
          }
        }

        console.log(all_hidden)
        if (all_hidden) {
          this.randomBattle()  
        }
      } else {
        this.randomBattle()
      }

      console.time('change_map_pos')
      // set map position
      if (!config.db.map[config.db.map.activeMap].layerEvents[Math.round(position[1])]) {
        Vue.set(config.db.map[config.db.map.activeMap].layerEvents, Math.round(position[1]), {})
      }
      if (!config.db.map[config.db.map.activeMap].layerEvents[Math.round(position[1])][Math.round(position[0])]) {
        Vue.set(config.db.map[config.db.map.activeMap].layerEvents[Math.round(position[1])], Math.round(position[0]), {})
      }
      this.$nextTick(function () {
        console.timeEnd('change_map_pos')
      })

      // remove old indication position
      if (config.db.map[config.db.map.activeMap].layerEvents[Math.round(previous_pos[1])] && config.db.map[config.db.map.activeMap].layerEvents[Math.round(previous_pos[1])][Math.round(previous_pos[0])]) {
        Vue.delete(config.db.map[config.db.map.activeMap].layerEvents[Math.round(previous_pos[1])][Math.round(previous_pos[0])], this.event.player_id)
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
        if (config.db.map[config.db.map.activeMap].layerEvents[Math.round(config.character.position[1])] && config.db.map[config.db.map.activeMap].layerEvents[Math.round(config.character.position[1])][Math.round(config.character.position[0])]) {
          Vue.delete(config.db.map[config.db.map.activeMap].layerEvents[Math.round(config.character.position[1])][Math.round(config.character.position[0])], config.character.id)  
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
      if (!isVisibleTileEvent(event)) {
        return false
      }

      return true
    },
    setPlayerDirection: function (position, player_id, direction) {
      Vue.set(config.db.map[config.db.map.activeMap].layerEvents[Math.round(position[1])][Math.round(position[0])], player_id, {
        id: "player",
        name: "Player Kokoko",
        player_id: player_id,
        direction: direction ? direction : "",
        icon: "icon-player",
        tile_icon: "icon-player",
        //tile_position: position
      })
    },
    randomBattle: function () {
      let position = this.event.position // float coordinate
      let battle = config.db.map[config.db.map.activeMap].battle
      let enemies = []
      
      if (battle && battle.zone && battle.zone[position[1]] && battle.zone[position[1]][position[0]]) {
        let item = battle.zone[position[1]][position[0]]
        enemies = this.generateEnemies(item)
      } else if (battle && battle.zoneDefault) {
        let item = battle.zoneDefault
        enemies = this.generateEnemies(item)
      }

      if (enemies.length > 0) {
        let counter = 0
        config.activeEnemies = []
        for (enemy_idx in enemies) {
          let enemy = config.db.enemies[enemies[enemy_idx]]

          // indexing creating enemies 
          enemy['object_idx'] = counter
          config.activeEnemies.push(JSON.parse(JSON.stringify(enemy)))
          counter += 1
        }

        // show ui battle
        config.activeUI = "battle"
      }
    },
    generateEnemies: function (item) {
      let enemies = []
      // if proc battle generate enemies list
      if (item.percent && getRandomArbitrary(1, 100) <= item.percent) {
        let count = 0
        
        for (idx in item.enemies) {
          let enemy = item.enemies[idx]
          let count_enemy = 0
          let item_max = item.max ? item.max : 6

          for (var i = count; i <= item_max; i++) { // 1, max 6
            if (enemy.percent && getRandomArbitrary(1, 100) <= enemy.percent) {
              enemies.push(enemy.id)
              count_enemy++
              count++
            }

            // adding at least one enemy if not set enemy.max
            if (!enemy.max && i == item_max && count == 0) {
              enemies.push(enemy.id)
              count_enemy++
              count++
            }

            if ((enemy.max && count_enemy == enemy.max) || (count >= item_max)) {
              break
            }
          }

          if (count >= item_max) {
            break
          }
        }
      }

      return enemies
    }
  },
})