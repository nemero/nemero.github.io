Vue.component('viewMapTileActions', {
  	props: ['position', 'config'],
  	template: ['<div class="view-map-tile-actions">',
              	//'<view-map-tile-action v-for="tile in getTileLayers" :tile="tile"></view-map-tile-action>',
              	'<view-map-tile-action-event v-for="tile in getEventLayers" :tile="tile" :tiles="getEventLayers"></view-map-tile-action-event>',
            '</div>'
    ].join(""),
    computed: {
    	getEventLayers: function () {
		    let event_layer = config.db.map[config.db.map.activeMap].layerEvents[this.position[1]][this.position[0]]
		    return event_layer
    	},
    	getTileLayers: function () {
		    let cell_tiles = config.db.map[config.db.map.activeMap].map[this.position[1]][this.position[0]]
		    return cell_tiles
    	},
    }
})