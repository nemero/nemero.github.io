Vue.component('conditionWorldState', {
  props: ['condition', 'conditions', 'idx'],
  data: function () {
    return {
      state_id: null,
      collapse: false,
    }
  },
  template: [
      '<div class="box" v-if="condition.type == \'world_state\'">',
        '<h5 @click="collapse = collapse ? false : true">{{ idx }} - ({{ condition.type }}) <input type="button" @click="removeCondition" value="-" /></h5>',
        '<div v-show="collapse">',
          '<div class="field-row">',
            '<label>State Id: </label> ',
            '<select v-model="state_id">',
              '<option v-for="state in getWorldStates" :value="state">{{ state }}</option>',
            '</select>',
            '<input type="text" v-model="state_id" placeholder="world state id"/>',
          '</div>',
          '<div class="field-row">',
            '<label>Has:</label> ',
            '<input type="button" @click="addHasState" value="+" />',
            '<input type="button" @click="removeHasState" value="-" />',
            '<div class="info" v-show="condition.has">{{ condition.has }}</div>',
          '</div>',

          '<div class="field-row">',
            '<label>Not Has:</label> ',
            '<input type="button" @click="addNotHasState" value="+" />',
            '<input type="button" @click="removeNotHasState" value="-" />',
            '<div class="info" v-show="condition.not">{{ condition.not }}</div>',
          '</div>',
        '</div>',

      '</div>'
      ].join(''),
  methods: {
    removeCondition: function () {
      this.conditions.splice(this.idx, 1)
    },
    addHasState: function () {
      if (!this.state_id) {
        return
      }

      if (!this.condition.has) {
        Vue.set(this.condition, "has", [])
      }

      if (this.condition.has.indexOf(this.state_id) < 0) {
        this.condition.has.push(this.state_id)
      }
    },
    addNotHasState: function () {
      if (!this.state_id) {
        return
      }

      if (!this.condition.not) {
        Vue.set(this.condition, "not", [])
      }

      if (this.condition.not.indexOf(this.state_id) < 0) {
        this.condition.not.push(this.state_id)
      }
    },
    removeHasState: function () {
      if (this.condition.has) {
        this.condition.has.pop()
      }
    },
    removeNotHasState: function () {
      if (this.condition.not) {
        this.condition.not.pop()
      }
    },
  },
  computed: {
    getWorldStates: function () {
      return activeWorldStates()
    },
  }
})