Vue.component('viewMapTileEventsInfo', {
  props: ['event', 'idx', 'row_id', 'col_id'],
  template: ['<span :class="isActive">',
        '<div class="layer" @click="selectEvent">',
          //'{{ idx }}',
          '<div>{{ event.type }}</div>',
          '<span class="layer-event" :style="getTileMapStyle" style="zoom: 3;"></span>',
        '</div>',
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
    isActive: function () {
      let data = {}
      let event = this.event

      if (config.activeLayerEvent == event) {
        data['active'] = true
      }

      return data
    },
  	getTileMapStyle: function () {
  		let data = {}
  		let event = this.event

      if (event.icon) {
        data['background'] = 'url(' + event.icon + ')'
      } else {
        data['background'] = 'url(assets/question.png)'
        data['width'] = '7px'
        data['height'] = '7px'
      }

  		return data
  	},
  }
})