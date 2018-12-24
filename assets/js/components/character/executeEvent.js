Vue.component('executeEvent', {
  props: ['config'],
  template: [
      '<div>',
        '<div style="display: none">{{ config.executeEvent }}</div>',
      '</div>'
	  	].join(''),
  updated: function () {
    //console.log(config.executeEvent)
    if (config.executeEvent) {
      let events = config.activeEvents
      // if exist enemis won't trigger action
      for (idx in events) {
        let event = events[idx]
        if (config.executeEvent != event && event.id == "enemies" && event.cooldown && (!event["cooldown_left"] || (event["cooldown_left"] && event["cooldown_left"] <= config.step))) {
          //Vue.set(config, "executeEvent", null)
          Vue.set(config, "executeEvent", event)
          return
        }
      }
      this.actionLayer()
    }

    Vue.set(config, "executeEvent", null)
  },
  methods: {
    actionLayer: function () {
      let tile = config.executeEvent
      if (tile.id == "enemies" || (tile.id == "enemies" && tile.cooldown && tile["cooldown_left"] <= config.step)) {
        let counter = 0
        config.activeEnemies = []
        for (enemy_idx in tile.enemies) {
          let enemy = config.db.enemies[tile.enemies[enemy_idx]]

          // indexing creating enemies 
          enemy['object_idx'] = counter
          config.activeEnemies.push(JSON.parse(JSON.stringify(enemy)))
          counter += 1
        }

        // show ui battle
        config.activeUI = "battle"
        return
      }

      // we can use any item until enemies is exist/showing
      for (layer_idx in this.tiles) {
        let layer = this.tiles[layer_idx]
        //console.log(layer["cooldown_left"])
        if (layer.id == "enemies" && layer.cooldown && (!layer["cooldown_left"] || (layer["cooldown_left"] && layer["cooldown_left"] <= config.step))) {
          this.cant_use_action = true
          return
        }
      }

      // open lock
      if (tile.id == "unlock") {
        
        // search item in character bag
        if (tile.type_unlock == "item" && config.character.bag.indexOf(tile.item) < 0 ) {
          this.cant_use_action = true
          return
        }

        // tile.type_unlock == "use"
        // hide closed door event
        Vue.set(tile, "hidden", true)  

        for (trigger_idx in tile.triggers) {
          let trigger = tile.triggers[trigger_idx]
          //console.log(config.db.map[trigger.map].layerEvents, trigger.position)

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
            //console.log(config.db.map[trigger.map].map[trigger.position[1]][trigger.position[0]][trigger.layer_id], trigger)
            if (config.db.map[trigger.map] && config.db.map[trigger.map].map[trigger.position[1]][trigger.position[0]]) {
              Vue.set(config.db.map[trigger.map].map[trigger.position[1]][trigger.position[0]], trigger.layer_id, trigger.tile) 
            } 
          }
        }
      }


      if (tile.id == "teleport") {
        // set character position
        // remove old player position on old map
        if (config.db.map[config.db.map.activeMap].layerEvents[config.character.position[1]] && config.db.map[config.db.map.activeMap].layerEvents[config.character.position[1]][config.character.position[0]]) {
          Vue.delete(config.db.map[config.db.map.activeMap].layerEvents[config.character.position[1]][config.character.position[0]], config.character.id)  
        }

        // change map 
        config.db.map.activeMap = tile.map

        if (!config.db.map[config.db.map.activeMap].layerEvents[tile.position[1]]) {
          Vue.set(config.db.map[config.db.map.activeMap].layerEvents, tile.position[1], {})  
        }
        if (!config.db.map[config.db.map.activeMap].layerEvents[tile.position[1]][tile.position[0]]) {
          Vue.set(config.db.map[config.db.map.activeMap].layerEvents[tile.position[1]], tile.position[0], {})  
        }
        Vue.set(config.db.map[config.db.map.activeMap].layerEvents[tile.position[1]][tile.position[0]], config.character.id, {
              id: "player",
              name: "Player Kokoko",
              player_id: config.character.id,
              icon: "icon-player0",
              tile_icon: "icon-player0",
        })

        config.character.position = [...tile.position]
      }

      if (tile.id == "loot_box") {
        for (item_idx in tile.items) {
          let item = tile.items[item_idx]
          config.character.bag.push(item)
        }

        // hide chest
        Vue.set(tile, "hidden", true)  
      }
    },
  }
})