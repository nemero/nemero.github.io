Vue.component('eventTeleport', {
  props: ['config'],
  template: [
      '<div v-if="isActive">',
      		'<div class="field-row">',
				'<label>Port Map: </label> ',
				'<select v-model="config.activeLayerEvent.map">',
					'<option value="" selected="selected">---</option>',
					'<option v-for="map in config.db.mapList" :value="map.name">{{ map.name }}</option>',
				'</select>',
			'</div>',

			'<div class="field-row">',
				'<label>Port Position:</label> ',
				'Row: <input type="number" v-model="config.activeLayerEvent.position[1]" />',
				'Col: <input type="number" v-model="config.activeLayerEvent.position[0]" />',
				//'<input type="button" @click="selectOnMap" value="select on map"/>',
			'</div>',

			'<event-conditions :event="config.activeLayerEvent" :config="config"></event-conditions>',
      '</div>'
      ].join(''),
  methods: {
  	selectOnMap: function () {
  		// TODO: simple click on map put cell in global variable
  		// trigger active cell to current
  	}
  },
  computed: {
  	isActive: function () {
      return config.activeLayerEvent && config.activeLayerEvent.id == 'teleport'
    }
  }
})