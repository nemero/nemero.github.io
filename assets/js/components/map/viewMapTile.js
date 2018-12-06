Vue.component('viewMapTile', {
  props: ['row_id', 'col_id', 'zone'],
  template: ['<span class="tile">',
      '<view-map-tile-layer v-for="tile in getTiles" :tile="tile"></view-map-tile-layer>',
      '<span class="layer-npc" :class="getTileNpcClass" @click="selectEnemy">',
        '<span class="layer-npc-details">{{ getLayerNpcDetails }}</span>',
      '</span>',
      '<span class="service">{{ row_id }}/{{ col_id }} {{ getTileName }}</span>',
    '</span>'].join(""),
  methods: {
    selectEnemy: function () {
      let objects = this.zone.layerNpc

      if (objects[this.row_id] && objects[this.row_id][this.col_id]) {
        for (idx_layer_item in objects[this.row_id][this.col_id]) {
          let tile = objects[this.row_id][this.col_id][idx_layer_item]
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
    }
  },
  computed: {
  	getTiles: function () {
  		let tiles = {}
  		if (this.zone.map[this.row_id] && this.zone.map[this.row_id][this.col_id]) {
  			tiles = this.zone.map[this.row_id][this.col_id]
  		}

  		return tiles
  	},
  	getTileName: function () {
  		if (this.zone.map[this.row_id] && this.zone.map[this.row_id][this.col_id]) {
  			let tile = this.zone.map[this.row_id][this.col_id]
  			return tile.id
  		}

  		return null
  	},
    getTileNpcClass: function () {
      let data = {}
      //let tile = zonetiles[this.item]
      let objects = this.zone.layerNpc
      //console.log(this.zone_id)

      if (objects[this.row_id] && objects[this.row_id][this.col_id]) {
        for (idx_layer_item in objects[this.row_id][this.col_id]) {
          let tile = objects[this.row_id][this.col_id][idx_layer_item]
          let layer_tale = config.db.map.tiles[tile.id]

          data[layer_tale.icon] = true
        }
      }

      //data[tile.icon] = true
      return data
    },
    getLayerNpcDetails: function () {
      let objects = this.zone.layerNpc
      let layer_details = []

      if (objects[this.row_id] && objects[this.row_id][this.col_id]) {
        for (idx_layer_item in objects[this.row_id][this.col_id]) {
          let tile = objects[this.row_id][this.col_id][idx_layer_item]
          let layer_tale = config.db.map.tiles[tile.id]

          if (tile.type == "enemies") {
            layer_details.push(tile)
          }
        }
      }

      return layer_details
    },
  }
})
