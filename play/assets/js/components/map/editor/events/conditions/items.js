Vue.component('conditionItems', {
  props: ['condition', 'conditions', 'idx'],
  data: function () {
    return {
      item_id: null,
      collapse: false,
    }
  },
  template: [
      '<div class="box" v-if="condition.type == \'items\'">',
        '<h5 @click="collapse = collapse ? false : true">{{ idx }} - ({{ condition.type }}) <input type="button" @click="removeCondition" value="-" /></h5>',
        '<div v-show="collapse">',
          '<div class="field-row">',
            '<label>Items: </label> ',
            '<select v-model="item_id">',
              '<option v-for="item in getItems" :value="item.id">{{ item.id }}</option>',
            '</select>',
            
            '<div class="field-row">',
              '<label>Has:</label> ',
              '<input type="button" @click="addHasItem" value="+" />',
              '<input type="button" @click="removeHasItem" value="-" />',
              '<div class="info" v-show="condition.has">{{ condition.has }}</div>',
            '</div>',

            '<div class="field-row">',
              '<label>Not Has:</label> ',
              '<input type="button" @click="addNotHasItem" value="+" />',
              '<input type="button" @click="removeNotHasItem" value="-" />',
              '<div class="info" v-show="condition.not">{{ condition.not }}</div>',
            '</div>',
          '</div>',
        '</div>',

      '</div>'
      ].join(''),
  methods: {
    removeCondition: function () {
      this.conditions.splice(this.idx, 1)
    },
    addHasItem: function () {
      if (!this.item_id) {
        return
      }

      if (!this.condition.has) {
        Vue.set(this.condition, "has", [])
      }

      if (this.condition.has.indexOf(this.item_id) < 0) {
        this.condition.has.push(this.item_id)
      }
    },
    addNotHasItem: function () {
      if (!this.item_id) {
        return
      }

      if (!this.condition.not) {
        Vue.set(this.condition, "not", [])
      }

      if (this.condition.not.indexOf(this.item_id) < 0) {
        this.condition.not.push(this.item_id)
      }
    },
    removeHasItem: function () {
      if (this.condition.has) {
        this.condition.has.pop()
      }
    },
    removeNotHasItem: function () {
      if (this.condition.not) {
        this.condition.not.pop()
      }
    },
  },
  computed: {
    getItems: function () {
      return config.db.items
    },
  }
})