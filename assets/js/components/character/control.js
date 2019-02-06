Vue.component('characterControl', {
  props: ['character'],
  template: [
      '<div>',
      '</div>'
	  	].join(''),
  created: function () {
    window.addEventListener('keydown', this.moveAction)

    // load character position
    let npc_list = config.db.map[config.db.map.activeMap].layerEvents
    for (row_idx in npc_list) {
      for (col_idx in npc_list[row_idx]) {
        let npc = npc_list[row_idx][col_idx]

        if (npc[this.character.id]) {
          Vue.set(this.character.position, 0, parseInt(col_idx))
          Vue.set(this.character.position, 1, parseInt(row_idx))
        }
      }
    }
  },
  methods: {
    moveAction: function (e) {
      if (config.activeUI !== "world") {
        return
      }

      // move actions
      if ([37, 38, 39, 40, 65, 68, 87, 83].indexOf(e.keyCode) >= 0) {
        let directions = []
        if (37 == e.keyCode || 65 == e.keyCode) {
          directions.push("left")
        }
        if (39 == e.keyCode || 68 == e.keyCode) {
          directions.push("right")
        }
        if (38 == e.keyCode || 87 == e.keyCode) {
          directions.push("up")
        }
        if (40 == e.keyCode || 83 == e.keyCode) {
          directions.push("down")
        }

        Vue.set(config, "executeEvent", {
          id: "move",
          position: this.character.position,
          player_id: this.character.id,
          directions: directions
        })

        return
      }

      // enter actions
      if (13 == e.keyCode) {
        // check current tile events
        let events = config.activeEvents
        for (idx in events) {
          let event = events[idx]
          if ((event.autoTrigger == "13" || event.autoTrigger == "hover") && this.isAvailable(event) && !event.hidden) {
            Vue.set(config, "executeEvent", {
              id: "enter",
              event: event
            })

            return
          }
        }

        // check direction events
        let direction_events = config.activeDirectionEvents
        for (idx in direction_events) {
          let event = direction_events[idx]
          if (event.autoTrigger == "13" && this.isAvailable(event) && !event.hidden) {
            Vue.set(config, "executeEvent", {
              id: "enter",
              event: event
            })

            return
          }
        }
      }
    },
    isAvailable: function (event) {
      if (!isVisibleTileEvent(event)) {
        return false
      }

      return true
   }
  }
})