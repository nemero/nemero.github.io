Vue.component('viewMapTileEventsInfo', {
  props: ['event', 'idx', 'row_id', 'col_id'],
  template: ['<span :class="getTileMapClass">',
        '<span class="layer" @click="selectEvent">',
          '{{ idx }}',
          '<div>{{ event }}</div>',
        '</span>',
        '<span @click="removeEvent">Remove Event -</span>',
      '</span>',
    ].join(""),
  methods: {
  	selectEvent: function () {
      config.activeLayerEvent = this.event
  	},
    removeEvent: function () {
      //console.log(this.idx, config.map[this.row_id][this.col_id])
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
  	getTileMapClass: function () {
  		let data = {}
  		let event = this.event

  		let layer_tale = config.layerEventsTypes[event.id]

      if (config.activeLayerEvent == event) {
        data['active'] = true
      }

      if (layer_tale) {
        data[layer_tale.icon] = true
      }

  		return data
  	},
  }
})