Vue.component('viewMapTileLayersInfo', {
  props: ['tile', 'idx', 'tiles'],
  template: ['<span class="layer" :style="getTileStyle" @click="brushCell" :class="getTileMapClass" v-show="isShowing">',
        '{{ idx }}',
      '</span>',
    ].join(""),
  methods: {
  	brushCell: function () {
      if (config.activeModeMap == "selectTile") {
        Vue.set(config.activeConditionTrigger, "layer_id", this.idx)

        //config.activeModeMap = "edit"
        return
      }

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
    isShowing: function () {
      if (config.activeLayer && config.activeLayer != this.idx ) {
        return false
      } 

      return true
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