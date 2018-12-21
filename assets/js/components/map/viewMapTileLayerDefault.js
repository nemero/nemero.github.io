Vue.component('viewMapTileLayerDefault', {
  props: ['zone'],
  template: ['<span class="layer" :style="getTileStyle" :class="getTileMapClass"></span>',
    ].join(""),
  computed: {
  	getTileStyle: function () {
  		let data = {}
  		//let tile = this.tile

  		data['width'] = this.zone.default_tile['size'][0] + 'px'
  		data['height'] = this.zone.default_tile['size'][1] + 'px'
  		data['background-position'] = '-' + this.zone.default_tile.position[0]*this.zone.default_tile['size'][0] + 'px -' + this.zone.default_tile.position[1]*this.zone.default_tile['size'][1] + 'px'

  		return data
  	},
  	getTileMapClass: function () {
  		let data = {}
  		//let tile = this.tile

  		//if (tile['map']) {
  			data[this.zone.default_tile.map_class] = true
  		//}

  		return data
  	},
  }
})