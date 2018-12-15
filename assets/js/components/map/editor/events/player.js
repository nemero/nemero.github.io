Vue.component('eventPlayer', {
  props: ['config'],
  template: [
      '<div>',
		'<div>Player Id: {{ config.activeLayerEvent.player_id }}</div>',
		'<input type="text" v-model="config.activeLayerEvent.player_id" />',
		'<event-show-conditions :event="config.activeLayerEvent" :config="config"></event-show-conditions>',
      '</div>'
      ].join(''),
  methods: {
  }
})