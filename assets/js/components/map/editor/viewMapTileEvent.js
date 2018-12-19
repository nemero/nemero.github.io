Vue.component('viewMapTileEvent', {
  props: ['event'],
  template: ['<span class="layer-event" :class="getTileMapClass"></span>',
    ].join(""),
  computed: {
  	getTileMapClass: function () {
      let data = {}
      let event = this.event
      
      if (event.tile_icon) {
        data[event.tile_icon] = true
      } else {
        data['question0'] = true
      }

      return data
    },
  }
})