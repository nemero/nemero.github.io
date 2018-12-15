Vue.component('viewMapTileEvent', {
  props: ['event'],
  template: ['<span class="layer-event" :style="getTileMapStyle"></span>',
    ].join(""),
  computed: {
  	getTileMapStyle: function () {
      let data = {}
      let event = this.event
      //console.log(event)
      let layer_tale = config.layerEventsTypes[event.id]

      if (layer_tale && layer_tale['icon']) {
        data['background'] = 'url(' + layer_tale.icon + ')'
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