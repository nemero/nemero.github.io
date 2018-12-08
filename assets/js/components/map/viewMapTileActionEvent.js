Vue.component('viewMapTileActionEvent', {
	props: ['tile', 'config'],
	template: ['<div class="view-map-tile-action" @click="actionLayer" v-if="isVisible()">',
              '<span :style="getActionStyle">',
              '</span>',
              '<div>{{ getTileDetails }}</div>',
          '</div>'
  ].join(""),
  methods: {
  	actionLayer: function () {
		  let tile = this.tile
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


      if (tile.type == "cave") {
        // change map 
        config.db.map.activeMap = tile.map

        // set character position
        // remove old player position on map
        if (config.db.map[config.db.map.activeMap].layerEvents[config.character.position[1]] && config.db.map[config.db.map.activeMap].layerEvents[config.character.position[1]][config.character.position[0]]) {
          Vue.delete(config.db.map[config.db.map.activeMap].layerEvents[config.character.position[1]][config.character.position[0]], config.character.id)  
        }

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
 	 },
   isVisible: function () {
    let tile = this.tile
    if (tile.type == "player" && config.character.id == tile["player_id"]) {
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
    }
  },
})