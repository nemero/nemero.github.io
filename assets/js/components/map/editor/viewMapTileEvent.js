Vue.component('viewMapTileEvent', {
  props: ['event'],
  template: ['<span class="layer-event" :style="getTileMapStyle"></span>',
    ].join(""),
  computed: {
  	getTileMapStyle: function () {
      let data = {}
      let event = this.event
      
      if (this.event.tile_icon) {
        data['background'] = 'url(' + this.event.tile_icon + ')'
      } else {
        data['background'] = 'url(assets/question.png)'
        data['width'] = '7px'
        data['height'] = '7px'
        data['left'] = '8px'
        data['top'] = '1px'
      }

      return data
    },
  }
})