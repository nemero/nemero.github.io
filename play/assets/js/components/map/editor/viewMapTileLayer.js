Vue.component('viewMapTileLayer', {
  props: ['tile'],
  template: ['<span class="layer" :style="getTileStyle" :class="getTileMapClass"></span>',
    ].join(""),
  computed: {
  	getTileStyle: function () {
  		let data = {}
  		let tile = this.tile

			data['width'] = config.db.tileSize[0] + 'px'
			data['height'] = config.db.tileSize[1] + 'px'

  		if (tile['texture']) {
  			data['background'] = 'url(' + tile['texture'] + ')'
  		}
  		if (tile['offset']) {
  			data['background-position'] = '-' + tile['offset'][0]*config.db.tileSize[0] + 'px -' + tile['offset'][1]*config.db.tileSize[1] + 'px'
  		}

  		return data
  	},
  	getTileMapClass: function () {
  		let data = {}
  		let tile = this.tile

  		if (tile['map']) {
  			data[tile['map']] = true
  		}

  		return data
  	},
  }
})