Vue.component('tile', {
  props: ['tile', 'config'],
  template: ['<span class="tile" :class="isSelected" @click="selectTile">',
  				'<span class="tile-picture" :style="getTileStyle" :class="getTileMapClass" :title="getTileDetails"></span>',
  				//'<span class="tile-details">',
  					//'{{ getTileDetails }}',	
  				'</span>',
    '</span>'].join(""),
  methods: {
  	selectTile: function () {
  		config.activeTile = this.tile
  	},
  },
	computed: {
		getTileStyle: function () {
  		let data = {}
  		data['width'] = config.db.tileSize[0] + 'px'
  		data['height'] = config.db.tileSize[1] + 'px'

  		if (this.tile['offset']) {
  			data['background-position'] = '-' + this.tile['offset'][0]*config.db.tileSize[0] + 'px -' + this.tile['offset'][1]*config.db.tileSize[1] + 'px'
  		}

  		return data
  	},
  	getTileMapClass: function () {
  		let data = {}
  		if (this.tile['map']) {
  			data[this.tile['map']] = true
  		}

  		return data
  	},
  	isSelected: function () {
  		let data = {}
  		if (config.activeTile == this.tile) {
  			data['active'] = true
  		}

  		return data
  	},
		getTileDetails: function () {
				return this.tile.id
		}
	}
})