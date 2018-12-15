Vue.component('viewMapTileActionEvent', {
	props: ['tile', 'config', 'tiles'],
	template: ['<div class="view-map-tile-action" @click="actionLayer" v-if="isVisible()" @animationend="cant_use_action = false" :class="actionLayerClasses">',
              '<span :style="getActionStyle">',
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
      let layer_tale = config.db.map.tiles[tile.id]

      if (tile.type == "enemies" || (tile.type == "enemies" && tile.cooldown && tile["cooldown_left"] <= config.step)) {
        let counter = 0
        config.activeEnemies = []
        for (enemy_idx in tile.enemies) {
          let enemy = config.db.enemies[tile.enemies[enemy_idx]]

          // indexing creating enemies 
          enemy['object_idx'] = counter
          config.activeEnemies.push(JSON.parse(JSON.stringify(enemy)))
          counter += 1
        }
        return
  		}

      // we can use any item until enemies is exist/showing
      for (layer_idx in this.tiles) {
        let layer = this.tiles[layer_idx]
        //console.log(layer["cooldown_left"])
        if (layer.type == "enemies" && layer.cooldown && (!layer["cooldown_left"] || (layer["cooldown_left"] && layer["cooldown_left"] <= config.step))) {
          this.cant_use_action = true
          return
        }
      }

      // open lock
      if (tile.type == "cave_lock") {
        
        // search item in character bag
        if (tile.type_unlock == "item" && config.character.bag.indexOf(tile.item) < 0 ) {
          return
        }

        // tile.type_unlock == "use"
        // hide closed door event
        Vue.set(tile, "hidden", true)  

        for (trigger_idx in tile.triggers) {
          let trigger = tile.triggers[trigger_idx]
          //console.log(config.db.map[trigger.map].layerEvents, trigger.position)

          if (trigger.type == "show_event_tile") {
            if (config.db.map[trigger.map] && config.db.map[trigger.map].layerEvents[trigger.position[1]][trigger.position[0]][trigger.event_id]) {
              Vue.set(config.db.map[trigger.map].layerEvents[trigger.position[1]][trigger.position[0]][trigger.event_id], "hidden", false)
            }
          }

          if (trigger.type == "hide_event_tile") {
            if (config.db.map[trigger.map] && config.db.map[trigger.map].layerEvents[trigger.position[1]][trigger.position[0]][trigger.event_id]) {
              Vue.set(config.db.map[trigger.map].layerEvents[trigger.position[1]][trigger.position[0]][trigger.event_id], "hidden", true)
            }   
          }

          if (trigger.type == "replace_tile") {
            if (config.db.map[trigger.map] && config.db.map[trigger.map].map[trigger.position[1]][trigger.position[0]]) {
              Vue.set(config.db.map[trigger.map].map[trigger.position[1]][trigger.position[0]], trigger.layer_id, trigger.tile) 
            } 
          }
        }
      }


      if (tile.type == "cave") {
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
              id: "7",
              player_id: config.character.id,
              name: "Player Kokoko",
              type: "player",
        })

        config.character.position = [...tile.position]
      }

      if (tile.type == "chest_open") {
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
    if (tile.type == "player" && config.character.id == tile["player_id"]) {
      return false
    }

    if (tile.hidden || tile["cooldown_left"] > config.step) {
      return false
    }
    
    return true
   }
 	},
  computed: {
    getActionStyle: function () {
      let data = {}

      if (this.tile.icon) {
        data['background'] = 'url(' + this.tile.icon + ') center center/cover'
      }

      return data
    },
    getTileDetails: function () {
      return this.tile.type
    },
    actionLayerClasses: function () {
      let data = {}

      data['cant_use_action'] = this.cant_use_action
      return data
    },
  },
})