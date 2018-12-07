Vue.component('viewMapTile', {
  props: ['row_id', 'col_id', 'zone'],
  template: ['<span class="tile">',
      '<view-map-tile-layer-default></view-map-tile-layer-default>',
      '<view-map-tile-layer v-for="tile in getTiles" :tile="tile"></view-map-tile-layer>',
      '<view-map-tile-layer-npc v-for="npc in getLayerNpc" :npc="npc" :tiles="getLayerNpc"></view-map-tile-layer-npc>',
      '<span class="service">{{ getRowId }}/{{ getColId }} {{ getTileName }}</span>',
    '</span>'].join(""),
  methods: {
    selectEnemy: function () {
      let objects = this.zone.layerNpc

      if (objects[this.getRowId] && objects[this.getRowId][this.getColId]) {
        for (idx_layer_item in objects[this.getRowId][this.getColId]) {
          let tile = objects[this.getRowId][this.getColId][idx_layer_item]
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
    getRowId: function () {
      let offset_y = config.character.position[1]
      let height = Math.trunc(config.db.map.viewport[1]/2)
      let row_idx = this.row_id + parseInt(offset_y) - height 

      return row_idx
    },
    getColId: function () {
      let offset_x = config.character.position[0]
      let width = Math.trunc(config.db.map.viewport[0]/2)
      let col_idx = this.col_id + parseInt(offset_x) - width

      return col_idx
    },
  	getTiles: function () {
  		let tiles = {}
  		if (this.zone.map[this.getRowId] && this.zone.map[this.getRowId][this.getColId]) {
  			tiles = this.zone.map[this.getRowId][this.getColId]
  		}

  		return tiles
  	},
  	getTileName: function () {
  		if (this.zone.map[this.getRowId] && this.zone.map[this.getRowId][this.getColId]) {
  			let tile = this.zone.map[this.getRowId][this.getColId]
  			return tile.id
  		}

  		return null
  	},
    getLayerNpc: function () {
      let objects = this.zone.layerNpc
      if (objects[this.getRowId] && objects[this.getRowId][this.getColId]) {
        return objects[this.getRowId][this.getColId]
      }

      return null
    },
  }
})
