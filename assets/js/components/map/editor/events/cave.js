Vue.component('eventCave', {
  props: ['config'],
  template: [
      '<div>',
			'<div>Port Map: {{ config.activeLayerEvent.map }}</div>',
			
			'<select v-model="config.activeLayerEvent.map">',
				'<option value="" selected="selected">---</option>',
				'<option v-for="map in config.map_list" :value="map.name">{{ map.name }}</option>',
			'</select>',

			'<div>',
				'Port Position: ',
				'X: <input type="number" v-model="config.activeLayerEvent.position[0]" />',
				'Y: <input type="number" v-model="config.activeLayerEvent.position[1]" />',
			'</div>',

			'<event-show-conditions :event="config.activeLayerEvent" :config="config"></event-show-conditions>',
      '</div>'
      ].join(''),
  methods: {
  }
})