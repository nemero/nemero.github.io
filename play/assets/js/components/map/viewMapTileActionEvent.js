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
      if (config.activeUI != "battle" && this.tile.autoTrigger == "hover" && this.isVisible()) {
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
      if (!isVisibleTileEvent(tile)) {
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