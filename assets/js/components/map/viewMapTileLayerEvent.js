Vue.component('viewMapTileLayerEvent', {
  props: ['layer', 'tiles'],
  template: ['<span class="layer-event" :class="getTileEventClass" @click="selectLayerEvent" v-if="isVisible">',
          //'<span class="layer-event-details" v-show="getLayerEventDetails.length > 0">{{ getLayerEventDetails }}</span>',
      '</span>'].join(""),
  methods: {
    selectLayerEvent: function () {
      let tile = this.layer
      let layer_tale = config.db.map.tiles[tile.id]

      if (tile.type == "enemies" || (tile.type == "enemies" && tile.cooldown && tile["cooldown_left"] <= config.step)) {
        // we can select enemies only in same tile
        if (!this.tiles[config.character.id]) {
          return
        }

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
  },
  computed: {
    isVisible: function () {
      let tile = this.layer

      if (tile.hidden || tile["cooldown_left"] > config.step) {
        return false
      }
      
      return true
    },
    getTileEventClass: function () {
      let data = {}
      let tile = this.layer
      let layer_tale = config.db.map.tiles[tile.id]

      data[layer_tale.icon] = true

      //data[tile.icon] = true
      return data
    },
    getLayerEventDetails: function () {
      let layer_details = []

      let tile = this.layer
      let layer_tale = config.db.map.tiles[tile.id]

      if (tile.type == "enemies") {
        layer_details.push(tile)
      }

      return layer_details
    },
  }
})
