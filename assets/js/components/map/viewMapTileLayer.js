Vue.component('viewMapTileLayer', {
  props: ['tile'],
  template: ['<span class="layer" :style="getTileStyle" :class="getTileMapClass"></span>',
    ].join(""),
  computed: {
  	getTileStyle: function () {
  		let data = {}
  		let tile = this.tile

			data['width'] = config.db.map.tileSize[0] + 'px'
			data['height'] = config.db.map.tileSize[1] + 'px'

      if (config.db.map.z_tiles[tile.map] && config.db.map.z_tiles[tile.map].indexOf(tile.id) >= 0) {
        data['z-index'] = 2
      }

  		if (tile['texture']) {
  			data['background'] = 'url(' + tile['texture'] + ')'
  		}
  		if (tile['offset']) {
  			data['background-position'] = '-' + tile['offset'][0]*config.db.map.tileSize[0] + 'px -' + tile['offset'][1]*config.db.map.tileSize[1] + 'px'
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