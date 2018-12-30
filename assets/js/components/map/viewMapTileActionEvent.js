Vue.component('viewMapTileActionEvent', {
	props: ['tile', 'config', 'tiles'],
	template: ['<div class="view-map-tile-action" @click="actionLayer" v-if="isVisible()" @animationend="cant_use_action = false" :class="actionLayerClasses">',
              '<span :class="getActionClass">',
              '</span>',
              '<div>{{ getTileDetails }}</div>',
          '</div>'
  ].join(""),
  data: function() {
    return {
      cant_use_action: false,
    }
  },
  updated: function () {
    // NOTE: work only for teleport actions because triggering each iteration
    // nextick need for correct set executeEvent because current event will flush to null
    this.$nextTick(function () {
      if (config.activeUI != "battle" && this.tile.autoTrigger == "hover" && !this.tile.hidden) {
        this.actionLayer()
      }
    })
  },
  methods: {
  	actionLayer: function () {
      Vue.set(config, "executeEvent", {
        id: "enter",
        event: this.tile
      })
 	  },
    isVisible: function () {
      let tile = this.tile
      if (tile.id == "player" && config.character.id == tile["player_id"]) {
        return false
      }

      // check conditions if exist
      if (tile.conditions && tile.conditions.length > 0) {
        let is_showing = true
        for (condition_idx in tile.conditions) {
          let condition = tile.conditions[condition_idx]
          if (condition.type_condition == "exist_tile") {
            if (config.db.map[condition.map].map[condition.position[1]][condition.position[0]][condition.layer_id].id != condition.tile.id) {
              return false
            }
          }
        }
      }

      if (tile.hidden || tile["cooldown_left"] > config.step) {
        return false
      }
      
      return true
    }
 	},
  computed: {
    getActionClass: function () {
      let data = {}

      if (this.tile.icon) {
        data[this.tile.icon] = true
      }

      return data
    },
    getTileDetails: function () {
      return this.tile.id
    },
    actionLayerClasses: function () {
      let data = {}

      data['cant_use_action'] = this.cant_use_action
      return data
    },
  },
})