Vue.component('viewMapTileLayerDefault', {
  props: ['zone'],
  template: ['<span class="layer" :style="getTileStyle" :class="getTileMapClass"></span>',
    ].join(""),
  computed: {
  	getTileStyle: function () {
  		let data = {}
  		//let tile = this.tile

  		// style="width: 16px; height: 16px; background: url(assets/tileset_1.png); background-position: 0 0;"
  		//if (tile['size']) {
  			data['width'] = 16 + 'px'
  		//}
  		//if (tile['size']) {
  			data['height'] = 16 + 'px'
  		//}
  		// if (tile['texture']) {
  		// 	data['background'] = 'url(' + tile['texture'] + ')'
  		// }
  		//if (tile['offset']) {
  			data['background-position'] = this.zone.default_tile.position[0] + 'px ' + this.zone.default_tile.position[1] + 'px'
  		//}

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