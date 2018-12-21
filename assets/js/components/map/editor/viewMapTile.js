Vue.component('viewMapTile', {
  props: ['row_id', 'col_id', 'config'],
  template: ['<span class="tile" @click="brushCell">',
  		'<span class="service">{{ getRowId }}/{{ getColId }} {{ getTileName }}</span>',
        '<view-map-tile-layer v-for="tile in getTiles" :tile="tile"></view-map-tile-layer>',
        '<view-map-tile-event v-for="event in getEvents" :event="event"></view-map-tile-event>',

        '<span class="tile-layers-info">',
          '<div class="tile-map">',
          	'<view-map-tile-layers-info v-for="(tile, idx) in getTiles" :tile="tile" :tiles="getTiles" :idx="idx"></view-map-tile-layers-info>',
          	'<div>',
              '<input type="button" @click="addLayer" value="+"/>',
          		'<input type="button" @click="removeLayer" value="-"/>',
          		'<input type="button" @click="removeAllLayers" value="clear"/>',
          	'</div>',
          '</div>',
          '<div class="tile-events">',
            '<div><label style="color: #fff;">Events</label></div>',
            '<view-map-tile-events-info v-for="(event, idx) in getEvents" :event="event" :idx="idx" :row_id="getRowId" :col_id="getColId"></view-map-tile-events-info>',
            '<input type="button" class="control" @click="addEvent" value="+" />',
          '</div>',
        '</span>',
      '</span>',
    '</span>'].join(""),
  methods: {
  	brushCell: function () {
      if (config.activeModeMap == "selectCell") {

        Vue.set(config.activeConditionTrigger, "map", config.activeMapId)
        Vue.set(config.activeConditionTrigger.position, 0, parseInt(this.getColId))
        Vue.set(config.activeConditionTrigger.position, 1, parseInt(this.getRowId))

        config.activeModeMap = "edit"
        return
      }

      if (config.activeModeMap == "selectTile") {
        Vue.set(config.activeConditionTrigger.position, 0, parseInt(this.getColId))
        Vue.set(config.activeConditionTrigger.position, 1, parseInt(this.getRowId))
        Vue.set(config.activeConditionTrigger, "map", config.activeMapId)

        config.activeModeMap = "edit"
        return
      }

      if (config.activeModeMap == "selectEvent") {
        Vue.set(config.activeConditionTrigger.position, 0, parseInt(this.getColId))
        Vue.set(config.activeConditionTrigger.position, 1, parseInt(this.getRowId))
        Vue.set(config.activeConditionTrigger, "map", config.activeMapId)

        config.activeModeMap = "edit"
        return
      }

  		if (!config.activeLayer/* || config.activeTab !== "tiles"*/) {
  			return
  		}

  		if (!config.map[this.getRowId]) {
  			Vue.set(config.map, this.getRowId, {})
  		}

  		if (!config.map[this.getRowId][this.getColId]) {
  			Vue.set(config.map[this.getRowId], this.getColId, {})	
  		}

  		if (!config.map[this.getRowId][this.getColId][config.activeLayer]) {
  			Vue.set(config.map[this.getRowId][this.getColId], config.activeLayer, {})	
  		}

  		if (config.activeTile.id == null) {
  			Vue.delete(config.map[this.getRowId][this.getColId], config.activeLayer)
  		} else {
  			config.map[this.getRowId][this.getColId][config.activeLayer] = config.activeTile
  		}
  	},
  	addLayer: function () {
  		if (!config.map[this.getRowId]) {
  			Vue.set(config.map, this.getRowId, {})
  		}

  		if (!config.map[this.getRowId][this.getColId]) {
  			Vue.set(config.map[this.getRowId], this.getColId, {})	
  		}

  		let layers_count = Object.keys(config.map[this.getRowId][this.getColId]).length
  		// add new layer
  		console.log(layers_count, config.layers)
  		if (layers_count < config.layers) {
  			Vue.set(config.map[this.getRowId][this.getColId], layers_count + 1, {})	
  		}
  	},
  	removeLayer: function () {
  		let layers_count = Object.keys(config.map[this.getRowId][this.getColId]).length
  		// remove layer
  		if (layers_count > 1) {
  			Vue.delete(config.map[this.getRowId][this.getColId], layers_count)
  		}
  	},
  	removeAllLayers: function () {
  		Vue.delete(config.map[this.getRowId], this.getColId)
  	},
    addEvent: function () {
      if (!config.activeLayerEvent) {
        console.log(config.activeLayerEvent)
        return
      }
      
      if (!config.layerEvents[this.getRowId]) {
        Vue.set(config.layerEvents, this.getRowId, {})
      }
      if (!config.layerEvents[this.getRowId][this.getColId]) {
        Vue.set(config.layerEvents[this.getRowId], this.getColId, {})
      }
      
      let generated_id = config.activeLayerEvent.type + '_' + this.getRowId + '_' + this.getColId
      let counter = 0
      while (config.layerEvents[this.getRowId][this.getColId][generated_id + '_' + counter]) {
        counter++ 
      }
      generated_id += '_' + counter

      Vue.set(config.layerEvents[this.getRowId][this.getColId], generated_id, JSON.parse(JSON.stringify(config.activeLayerEvent)))
    },
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
  	getTiles: function () {
  		let tiles = {}
  		if (config.map[this.getRowId] && config.map[this.getRowId][this.getColId]) {
  			tiles = config.map[this.getRowId][this.getColId]
  		}

  		return tiles
  	},
    getEvents: function () {
      let events = {}
      if (config.layerEvents[this.getRowId] && config.layerEvents[this.getRowId][this.getColId]) {
        events = config.layerEvents[this.getRowId][this.getColId]
      }

      return events
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
