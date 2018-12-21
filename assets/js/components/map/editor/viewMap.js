Vue.component('viewMap', {
  props: ['config'],
  template: ['<div :class="getClass">',
              '<view-map-row v-for="(row, row_id) in parseInt(config.height)" :row="row" :row_id="row_id" :config="config"></view-map-row>',
            '</div>'
    ].join(""),
  computed: {
  	getClass: function () {
  		let data = {}
  		data[config.activeModeMap] = true
      data[config.activeKeyModeMap] = true
      if (config.eraseMode) {
        data['eraseMode'] = true
      }
      if (config.activeLayer) {
        data['layerBrushMode'] = true
      }

  		return data
  	}
  }
})

					