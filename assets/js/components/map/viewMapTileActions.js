Vue.component('viewMapTileActions', {
  	props: ['position', 'character'],
  	template: ['<div class="view-map-tile-actions">',
          '<view-map-tile-action-event v-for="tile in getEventLayers" :tile="tile" :tiles="getEventLayers"></view-map-tile-action-event>',
        	'<view-map-tile-action-direction-event v-for="tile in getDirectionEventLayers" :tile="tile" :tiles="getEventLayers"></view-map-tile-action-direction-event>',
      '</div>'
    ].join(""),
    computed: {
    	getEventLayers: function () {
        if (config.db.map[config.db.map.activeMap].layerEvents[Math.round(this.position[1])] && config.db.map[config.db.map.activeMap].layerEvents[Math.round(this.position[1])][Math.round(this.position[0])]) {
          let events = config.db.map[config.db.map.activeMap].layerEvents[Math.round(this.position[1])][Math.round(this.position[0])]
          config.activeEvents = events
          return events
        }

        return 
    	},
      getDirectionEventLayers: function () {
        let player = config.db.map[config.db.map.activeMap].layerEvents[Math.round(this.position[1])][Math.round(this.position[0])][this.character.id]
        let direction_position = [...this.position]

        if (player.direction == "up") {
          direction_position[1]--
        }
        if (player.direction == "down") {
          direction_position[1]++
        }
        if (player.direction == "left") {
          direction_position[0]--
        }
        if (player.direction == "right") {
          direction_position[0]++
        }

        if (config.db.map[config.db.map.activeMap].layerEvents[direction_position[1]] && config.db.map[config.db.map.activeMap].layerEvents[direction_position[1]][direction_position[0]]) {
          let events = config.db.map[config.db.map.activeMap].layerEvents[direction_position[1]][direction_position[0]]
          config.activeDirectionEvents = events
          return events
        }

        return 
      },
    	getTileLayers: function () {
		    let cell_tiles = config.db.map[config.db.map.activeMap].map[Math.round(this.position[1])][Math.round(this.position[0])]
		    return cell_tiles
    	},
    }
})