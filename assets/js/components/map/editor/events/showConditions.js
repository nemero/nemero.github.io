Vue.component('eventShowConditions', {
  props: ['event', 'config'],
  template: [
      '<div class="box">',
        'Contiditons for showing',
        '<event-show-condition v-for="condition in event.conditions" :condition="condition" :config="config"></event-show-condition>',

        'Type Condition: ',
		'<select v-model="config.activeLayerEvent.type_unlock">',
			'<option value="" selected="selected">---</option>',
			'<option value="exist_tile_id">tile id exist</option>',
			'<option value="not_exist_tile_id">tile id not exist</option>',
			
			'<option value="exist_event_id">event id exist</option>',
			'<option value="not_exist_event_id">event id not exist</option>',
		'</select>',
        '<span>Add condition</span>',
      '</div>'
      ].join(''),
  methods: {
  },
})