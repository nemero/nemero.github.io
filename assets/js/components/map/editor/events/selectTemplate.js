Vue.component('eventSelectTemplate', {
  props: ['event_templates', 'config'],
  template: [
      '<div class="field-row">',
        '<label>Select Layer type: </label> ',
      	'<select v-model="config.activeLayerEvent">',
          '<option value="" selected="selected">---</option>',
          '<option v-for="layer in event_templates" :value="layer">{{ layer.id }}</option>',
        '</select>',
    '</div>'
    ].join(''),
  methods: {
  }
})