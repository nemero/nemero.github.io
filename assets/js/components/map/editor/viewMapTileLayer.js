Vue.component('viewMapTileLayer', {
  props: ['tile'],
  template: ['<span class="layer" :style="getTileStyle" :class="getTileMapClass"></span>',
    ].join(""),
  computed: {
  	getTileStyle: function () {
  		let data = {}
  		let tile = this.tile

  		// style="width: 16px; height: 16px; background: url(assets/tileset_1.png); background-position: 0 0;"
  		if (tile['size']) {
  			data['width'] = tile['size'][0] + 'px'
  		}
  		if (tile['size']) {
  			data['height'] = tile['size'][1] + 'px'
  		}
  		if (tile['texture']) {
  			data['background'] = 'url(' + tile['texture'] + ')'
  		}
  		if (tile['offset']) {
  			data['background-position'] = '-' + tile['offset'][0]*this.tile['size'][0] + 'px -' + tile['offset'][1]*this.tile['size'][1] + 'px'
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