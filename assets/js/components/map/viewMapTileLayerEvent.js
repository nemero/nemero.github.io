Vue.component('viewMapTileLayerEvent', {
  props: ['layer', 'tiles'],
  template: ['<span class="layer-event" :class="getTileMapClass" v-if="isVisible">',
          //'<span class="layer-event-details" v-show="getLayerEventDetails.length > 0">{{ getLayerEventDetails }}</span>',
      '</span>'].join(""),
  computed: {
    isVisible: function () {
      let tile = this.layer

      if (tile.hidden || tile["cooldown_left"] > config.step) {
        return false
      }
      
      return true
    },
    getTileMapClass: function () {
      let data = {}
      let tile = this.layer

      if (tile.tile_icon) {
        if (tile.direction) {
          data[tile.tile_icon + "-" + tile.direction] = true
        } else {
          data[tile.tile_icon] = true
        }
      }

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
