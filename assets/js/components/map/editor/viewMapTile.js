Vue.component('viewMapTile', {
  props: ['row_id', 'col_id', 'config'],
  template: ['<span class="tile" @click="brushCell">',
  		'<span class="service">{{ getRowId }}/{{ getColId }} {{ getTileName }}</span>',
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

  		if (!config.map[getRowId]) {
  			Vue.set(config.map, getRowId, {})
  		}

  		if (!config.map[getRowId][getColId]) {
  			Vue.set(config.map[getRowId], getColId, {})	
  		}

  		if (!config.map[getRowId][getColId][config.activeLayer]) {
  			Vue.set(config.map[getRowId][getColId], config.activeLayer, {})	
  		}

  		if (config.activeTile.id == null) {
  			Vue.delete(config.map[getRowId][getColId], config.activeLayer)
  		} else {
  			config.map[getRowId][getColId][config.activeLayer] = config.activeTile
  		}
  	},
  	addLayer: function () {
  		if (!config.map[getRowId]) {
  			Vue.set(config.map, getRowId, {})
  		}

  		if (!config.map[getRowId][getColId]) {
  			Vue.set(config.map[getRowId], getColId, {})	
  		}

  		let layers_count = Object.keys(config.map[getRowId][getColId]).length
  		// add new layer
  		console.log(layers_count, config.layers)
  		if (layers_count < config.layers) {
  			Vue.set(config.map[getRowId][getColId], layers_count + 1, {})	
  		}
  	},
  	removeLayer: function () {
  		let layers_count = Object.keys(config.map[getRowId][getColId]).length
  		// remove layer
  		if (layers_count > 1) {
  			Vue.delete(config.map[getRowId][getColId], layers_count)
  		}
  	},
  	removeAllLayers: function () {
  		Vue.delete(config.map[getRowId], getColId)
  	}
  },
  computed: {
    getRowId: function () {
      let offset_y = config.mapOffset[1]
      let row_idx = this.row_id + parseInt(offset_y)

      return row_idx
    },
    getColId: function () {
      let offset_x = config.mapOffset[0]
      let col_idx = this.col_id + parseInt(offset_x)

      return col_idx
    },
		getInfoCell: function () {
  		let tiles = {}
  		if (config.map[this.getRowId] && config.map[this.getRowId][this.getColId]) {
  			tiles = config.map[this.getRowId][this.getColId]
  		}

  		config.hoveredTiles = tiles
  	},
  	getTiles: function () {
  		let tiles = {}
  		if (config.map[this.getRowId] && config.map[this.getRowId][this.getColId]) {
  			tiles = config.map[this.getRowId][this.getColId]
  		}

  		return tiles
  	},
  	getTileName: function () {
  		if (config.map[this.getRowId] && config.map[this.getRowId][this.getColId]) {
  			let tile = config.map[this.getRowId][this.getColId]
  			return tile.id
  		}

  		return null
  	}
  }
})
