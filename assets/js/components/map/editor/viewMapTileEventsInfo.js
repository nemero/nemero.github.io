Vue.component('viewMapTileEventsInfo', {
  props: ['event', 'idx', 'row_id', 'col_id'],
  template: ['<div :class="isActive" class="layer-event-box">',
        '<div class="layer" @click="selectEvent">',
          //'{{ idx }}',
          '<div class="name">{{ event.type }}</div>',
          '<span class="layer-event-info-icon" :class="getTileMapClass" style="zoom: 3;"></span>',
        '</div>',
        '<div class="control">',
          '<input type="button" @click="removeEvent" value="x" />',
        '</div>',
      '</div>',
    ].join(""),
  methods: {
  	selectEvent: function () {
      if (config.activeModeMap == "selectEvent") {
        Vue.set(config.activeConditionTrigger, "event_id", this.idx)
        
        //config.activeModeMap = "edit"
        return
      }

      config.activeLayerEvent = this.event
  	},
    removeEvent: function () {
      Vue.delete(config.layerEvents[this.row_id][this.col_id], this.idx)

      // remove empty cols
      let cols = Object.keys(config.layerEvents[this.row_id][this.col_id]).length
      if (cols == 0) {
        Vue.delete(config.layerEvents[this.row_id], this.col_id)
      }

      // remove empty rows
      let rows = Object.keys(config.layerEvents[this.row_id]).length
      if (rows == 0) {
        Vue.delete(config.layerEvents, this.row_id)
      }
    },
  },
  computed: {
    isActive: function () {
      let data = {}
      let event = this.event

      if (config.activeLayerEvent == event) {
        data['active'] = true
      }

      return data
    },
    getTileMapClass: function () {
      let data = {}
      let event = this.event
      
      if (event.icon) {
        data[event.icon] = true
      } else {
        data['question0'] = true
      }

      return data
    },
  }
})