Vue.component('viewMapTileLayersInfo', {
  props: ['tile', 'idx', 'tiles'],
  template: ['<span class="layer" :style="getTileStyle" @click="brushCell" :class="getTileMapClass">{{ idx }}</span>',
    ].join(""),
  methods: {
  	brushCell: function () {
  		// if selected layer don't brush on selected layer
  		if (config.activeLayer) {
  			return
  		}

  		if (config.activeTile) {
  			this.tiles[this.idx] = config.activeTile
  		}
  	},
  },
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
  			data['background-position'] = tile['offset'][0] + 'px ' + tile['offset'][1] + 'px'
  		}

  		return data
  	},
  	getTileMapClass: function () {
  		let data = {}
  		let tile = this.tile

  		if (tile['map']) {
  			data[tile['map']] = true
  		}

  		if (config.activeLayer == this.idx) {
  			data['active'] = true
  		}

  		return data
  	},
  }
})