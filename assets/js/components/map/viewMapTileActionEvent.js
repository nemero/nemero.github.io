Vue.component('viewMapTileActionEvent', {
	props: ['tile', 'config', 'tiles'],
	template: ['<div class="view-map-tile-action" @click="actionLayer" v-if="isVisible()" @animationend="cant_use_action = false" :class="actionLayerClasses">',
              '<span :class="getActionClass">',
              '</span>',
              '<div>{{ getTileDetails }}</div>',
          '</div>'
  ].join(""),
  data: function() {
    return {
      cant_use_action: false,
    }
  },
  methods: {
  	actionLayer: function () {
		  let tile = this.tile
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
        // save current map
        config.prevMap = config.db.map.activeMap
        config.prevPosition = []
        config.prevPosition[0] = config.character.position[0]
        config.prevPosition[1] = config.character.position[1]
        // set battle map
        if (tile.battleMap) {
          config.db.map.activeMap = tile.battleMap
        } else {
          config.db.map.activeMap = config.db.map[config.db.map.activeMap].defaultBattleMap
        }
        // centering map
        Vue.set(config.character.position, 0, 4)
        Vue.set(config.character.position, 1, 6)

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
   isVisible: function () {
    let tile = this.tile
    if (tile.id == "player" && config.character.id == tile["player_id"]) {
      return false
    }


    // check conditions if exist
    if (tile.conditions) {
      let is_showing = true
      for (condition_idx in tile.conditions) {
        let condition = tile.conditions[condition_idx]
        if (condition.type_condition == "exist_tile") {
          //console.log(condition.tile.id, config.db.map[condition.map].map[condition.position[1]][condition.position[0]][condition.layer_id].id)
          if (config.db.map[condition.map].map[condition.position[1]][condition.position[0]][condition.layer_id].id != condition.tile.id) {
            Vue.set(tile, "hidden", false)  
            return
          }
          //let checking_tile = config.db.map[condition.map].map[condition.position[1]][condition.position[0]][condition.layer_id]
        }
      }
    }

    if (tile.hidden || tile["cooldown_left"] > config.step) {
      return false
    }
    
    return true
   }
 	},
  computed: {
    getActionClass: function () {
      let data = {}

      if (this.tile.icon) {
        data[this.tile.icon] = true
      }

      return data
    },
    getTileDetails: function () {
      return this.tile.id
    },
    actionLayerClasses: function () {
      let data = {}

      data['cant_use_action'] = this.cant_use_action
      return data
    },
  },
})