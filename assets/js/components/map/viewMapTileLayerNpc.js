Vue.component('viewMapTileLayerNpc', {
  props: ['npc', 'tiles'],
  template: ['<span class="layer-npc" :class="getTileNpcClass" @click="selectEnemy">',
          '<span class="layer-npc-details" v-show="getLayerNpcDetails.length > 0">{{ getLayerNpcDetails }}</span>',
      '</span>'].join(""),
  methods: {
    selectEnemy: function () {
      let tile = this.npc
      let layer_tale = config.db.map.tiles[tile.id]

      if (tile.type == "enemies") {
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
    getTileNpcClass: function () {
      let data = {}
      let tile = this.npc
      let layer_tale = config.db.map.tiles[tile.id]

      data[layer_tale.icon] = true

      //data[tile.icon] = true
      return data
    },
    getLayerNpcDetails: function () {
      let layer_details = []

      let tile = this.npc
      let layer_tale = config.db.map.tiles[tile.id]

      if (tile.type == "enemies") {
        layer_details.push(tile)
      }

      return layer_details
    },
  }
})
