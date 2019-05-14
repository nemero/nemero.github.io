Vue.component('eventTeleport', {
  props: ['event'],
  template: [
      '<div v-if="isActive">',
      	'<div class="field-row">',
  				'<label>Port Map: </label> ',
  				'<select v-model="event.map">',
  					'<option value="" selected="selected">---</option>',
  					'<option v-for="map in getMapList" :value="map.name">{{ map.name }}</option>',
  				'</select>',
  			'</div>',

  			'<div class="field-row">',
  				'<label>Port Position:</label> ',
  				'Row: <input type="number" v-model="event.position[1]" />',
  				'Col: <input type="number" v-model="event.position[0]" />',
  				'<input type="button" @click="selectOnMap" value="select on map"/>',
  			'</div>',

        '<event-conditions :conditions="event.conditions" :parent="event"></event-conditions>',
      '</div>'
      ].join(''),
  methods: {
  	selectOnMap: function () {
      Vue.set(config, "activeConditionTrigger", this.event)
  		config.activeModeMap = "selectCell"
  	}
  },
  computed: {
  	isActive: function () {
      if (!this.event.position) {
        Vue.set(this.event, 'position', [])
      }

      // TODO: refactor id to type
      return this.event && (this.event.id == 'teleport' || (!this.event.id && this.event.type == "teleport"))
    },
    getMapList: function () {
      return config.db.mapList
    }
  }
})