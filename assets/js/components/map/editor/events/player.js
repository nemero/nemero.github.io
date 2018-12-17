Vue.component('eventPlayer', {
  props: ['config'],
  template: [
      '<div v-if="isActive">',
    		'<div class="field-row">',
          '<label>Player Id: </label> ',
    		  '<input type="text" v-model="config.activeLayerEvent.player_id" />',
        '</div>',
    		'<event-conditions :event="config.activeLayerEvent" :config="config"></event-conditions>',
      '</div>'
      ].join(''),
  computed: {
    isActive: function () {
      return config.activeLayerEvent && config.activeLayerEvent.id == 'player'
    }
  }
})