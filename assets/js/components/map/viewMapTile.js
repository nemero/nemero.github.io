Vue.component('viewMapTile', {
  props: ['row_id', 'col_id', 'zone'],
  template: ['<span class="tile" @click="movePlayer">',
      '<view-map-tile-layer-default :zone="zone"></view-map-tile-layer-default>',
      '<view-map-tile-layer v-for="tile in getTiles" :tile="tile"></view-map-tile-layer>',
      '<view-map-tile-layer-event v-for="layer in getLayerEvents" :layer="layer" :tiles="getLayerEvents"></view-map-tile-layer-event>',
      '<span class="service">{{ getRowId }}/{{ getColId }} {{ getTileName }}</span>',
    '</span>'].join(""),
  methods: {
    movePlayer: function () {
        if (config.activeUI !== "world") {
          return
        }
        
        let position = config.character.position
        if (position[0] == this.getColId && position[1] == this.getRowId) {
          // if click on same cell trigger event
          let events = this.getLayerEvents
          for (idx in events) {
            let event = events[idx]
            if (this.isAvailable(event) && !event.hidden) {
              Vue.set(config, "executeEvent", {
                id: "enter",
                event: event
              })

              return
            }
          }
        } else {
          let position_prev = [...position]
          let directions = []
          if (this.getRowId > position[1]) {
            directions.push("down")
          }
          if (this.getRowId < position[1]) {
            directions.push("up")
          }
          if (this.getColId > position[0]) {
            directions.push("right")
          }
          if (this.getColId < position[0]) {
            directions.push("left")
          }

          Vue.set(config, "executeEvent", {
            id: "move",
            position: position,
            player_id: config.character.id,
            directions: directions
          })
        }

        return
    },
    isAvailable: function (event) {
      if (event.id == "player" && config.character.id == event["player_id"]) {
        return false
      }


      // check conditions if exist
      if (event.conditions) {
        let is_showing = true
        for (condition_idx in event.conditions) {
          let condition = event.conditions[condition_idx]
          if (condition.type_condition == "exist_tile") {
            if (config.db.map[condition.map].map[condition.position[1]][condition.position[0]][condition.layer_id].id != condition.tile.id) {
              is_showing = false
            }
          }
        }

        return is_showing
      }

      if (event.hidden || event.cooldown_left > config.step) {
        return false
      }

      return true
    }
  },
  computed: {
    getRowId: function () {
      let offset_y = config.character.position[1]
      let height = Math.trunc(config.db.map.viewport[1]/2)
      let row_idx = this.row_id + parseInt(offset_y) - height 

      return row_idx
    },
    getColId: function () {
      let offset_x = config.character.position[0]
      let width = Math.trunc(config.db.map.viewport[0]/2)
      let col_idx = this.col_id + parseInt(offset_x) - width

      return col_idx
    },
  	getTiles: function () {
  		let tiles = {}
  		if (this.zone.map[this.getRowId] && this.zone.map[this.getRowId][this.getColId]) {
  			tiles = this.zone.map[this.getRowId][this.getColId]
  		}

  		return tiles
  	},
  	getTileName: function () {
  		if (this.zone.map[this.getRowId] && this.zone.map[this.getRowId][this.getColId]) {
  			let tile = this.zone.map[this.getRowId][this.getColId]
  			return tile.id
  		}

  		return null
  	},
    getLayerEvents: function () {
      let objects = this.zone.layerEvents
      if (objects[this.getRowId] && objects[this.getRowId][this.getColId]) {
        return objects[this.getRowId][this.getColId]
      }

      return null
    },
  }
})
