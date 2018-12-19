Vue.component('eventConditions', {
  props: ['conditions', 'config'],
  data: function () {
    return {
      "activeCondition": null,
    }
  },
  template: [
      '<div>',
        '<h4>Contiditons for showing</h4> ',
        '<div class="field-row">',
          '<label>Type Condition:</label> ',
          '<select v-model="activeCondition">',
            '<option value="" selected="selected">---</option>',
            '<option value="exist_tile">tile id is exist</option>',
            //'<option value="exist_tile_id">tile id exist</option>',
            //'<option value="not_exist_tile_id">tile id not exist</option>',

            //'<option value="exist_event_id">event id exist</option>',
            //'<option value="not_exist_event_id">event id not exist</option>',
          '</select>',

          '<input type="button" @click="addCondition" value="+"/>',
          '<input type="button" @click="removeCondition" value="-"/>',
        '</div>',

        '<div v-for="condition in conditions" :condition="condition" :config="config">',
          '<event-condition-exist-tile :condition="condition" :config="config"></event-condition-exist-tile>',
        '</div>',
      '</div>'
      ].join(''),
  methods: {
    addCondition: function () {
      if (!config.activeLayerEvent.conditions) {
        Vue.set(config.activeLayerEvent, "conditions", [])
      }
      

      let conditions = config.activeLayerEvent.conditions
      if (this.activeCondition) {
        conditions.push({
          type_condition: this.activeCondition,
          position: [0, 0],
        })
      }
    },
    removeCondition: function () {
      let conditions = config.activeLayerEvent.conditions
      conditions.pop()
    },
  }
})