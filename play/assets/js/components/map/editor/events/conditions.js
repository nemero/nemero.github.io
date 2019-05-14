Vue.component('eventConditions', {
  props: ['parent', 'conditions'],
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
            '<option value="world_state">world state</option>',
            '<option value="items">items</option>',
            //'<option value="exist_tile_id">tile id exist</option>',
            //'<option value="not_exist_tile_id">tile id not exist</option>',

            //'<option value="exist_event_id">event id exist</option>',
            //'<option value="not_exist_event_id">event id not exist</option>',
          '</select>',

          '<input type="button" @click="addCondition" value="+"/>',
          '<input type="button" @click="removeCondition" value="-"/>',
        '</div>',

        '<div v-for="(condition, idx ) in conditions" :condition="condition">',
          '<condition-exist-tile :condition="condition" :conditions="conditions" :idx="idx"></condition-exist-tile>',
          '<condition-world-state :condition="condition" :conditions="conditions" :idx="idx"></condition-world-state>',
          '<condition-items :condition="condition" :conditions="conditions" :idx="idx"></condition-items>',
        '</div>',
      '</div>'
      ].join(''),
  methods: {
    addCondition: function () {
      if (!this.parent.conditions) {
        Vue.set(this.parent, "conditions", [])
      }
      

      let conditions = this.parent.conditions
      let condition = {}
      if (this.activeCondition) {
        condition['type'] = this.activeCondition
        if (this.activeCondition == "exist_tile") {
          condition['position'] = [0, 0]
        }

        conditions.push(condition)
      }
    },
    removeCondition: function () {
      let conditions = this.parent.conditions
      conditions.pop()
    },
  }
})