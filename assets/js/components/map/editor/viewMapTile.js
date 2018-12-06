Vue.component('viewMapTile', {
  props: ['row_id', 'col_id', 'config'],
  template: ['<span class="tile" @click="brushCell">',
  		'<span class="service">{{ row_id }}/{{ col_id }} {{ getTileName }}</span>',
        '<view-map-tile-layer v-for="tile in getTiles" :tile="tile"></view-map-tile-layer>',
        '<span class="tile-layers-info">',
        	'<view-map-tile-layers-info v-for="(tile, idx) in getTiles" :tile="tile" :tiles="getTiles" :idx="idx"></view-map-tile-layers-info>',
        	'<div style="zoom: 0.3;"><span @click="addLayer">Add Layer +</span>',
        		'<span @click="removeLayer">Remove Layer -</span>',
        		'<span @click="removeAllLayers">Remove All Layers -</span>',
        	'</div>',
        '</span>',
      '</span>',
    '</span>'].join(""),
  methods: {
  	brushCell: function () {
  		if (!config.activeLayer) {
  			return
  		}

  		if (!config.map[this.row_id]) {
  			Vue.set(config.map, this.row_id, {})
  		}

  		if (!config.map[this.row_id][this.col_id]) {
  			Vue.set(config.map[this.row_id], this.col_id, {})	
  		}

  		if (!config.map[this.row_id][this.col_id][config.activeLayer]) {
  			Vue.set(config.map[this.row_id][this.col_id], config.activeLayer, {})	
  		}

  		if (config.activeTile.id == null) {
  			Vue.delete(config.map[this.row_id][this.col_id], config.activeLayer)
  		} else {
  			config.map[this.row_id][this.col_id][config.activeLayer] = config.activeTile
  		}
  	},
  	addLayer: function () {
  		if (!config.map[this.row_id]) {
  			Vue.set(config.map, this.row_id, {})
  		}

  		if (!config.map[this.row_id][this.col_id]) {
  			Vue.set(config.map[this.row_id], this.col_id, {})	
  		}

  		let layers_count = Object.keys(config.map[this.row_id][this.col_id]).length
  		// add new layer
  		console.log(layers_count, config.layers)
  		if (layers_count < config.layers) {
  			Vue.set(config.map[this.row_id][this.col_id], layers_count + 1, {})	
  		}
  	},
  	removeLayer: function () {
  		let layers_count = Object.keys(config.map[this.row_id][this.col_id]).length
  		// remove layer
  		if (layers_count > 1) {
  			Vue.delete(config.map[this.row_id][this.col_id], layers_count)
  		}
  	},
  	removeAllLayers: function () {
  		Vue.delete(config.map[this.row_id], this.col_id)
  	}
  },
  computed: {
		getInfoCell: function () {
  		let tiles = {}
  		if (config.map[this.row_id] && config.map[this.row_id][this.col_id]) {
  			tiles = config.map[this.row_id][this.col_id]
  		}

  		config.hoveredTiles = tiles
  	},
  	getTiles: function () {
  		let tiles = {}
  		if (config.map[this.row_id] && config.map[this.row_id][this.col_id]) {
  			tiles = config.map[this.row_id][this.col_id]
  		}

  		return tiles
  	},
  	getTileName: function () {
  		if (config.map[this.row_id] && config.map[this.row_id][this.col_id]) {
  			let tile = config.map[this.row_id][this.col_id]
  			return tile.id
  		}

  		return null
  	}
  }
})
