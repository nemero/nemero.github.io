Vue.component('eventEnemies', {
  props: ['enemy', 'config'],
  data: function () {
    return {
      add_interaction_id: null,
      selected_interaction_type: null,
      selected_enemy_id: null,
      selected_sell_item_id: null
    }
  },
  template: [
      '<div v-if="isActive">',
  			'<div class="field-row">',
  				'<label>Cooldown:</label> ',
  				'<input type="number" v-model.number="enemy.cooldown" />',
  			'</div>',

        '<div class="field-row">',
          '<label>Seller:</label> ',
          '<select v-model="selected_sell_item_id">',
            '<option v-for="item in getItems" :value="item.id">{{ item.id }}</option>',
          '</select>',
          '<input type="button" @click="addSellItem" value="+" />',
          '<div class="box">',
            '<label>Items / Cost: </label>',
            '<event-sell-item v-for="(price, idx) in enemy.seller" :price="price" :idx="idx" :seller="enemy.seller"></event-sell-item>',
          '</div>',
        '</div>',
        

        '<div class="field-row">',
          '<label>Create Interaction:</label> ',
          '<select v-model="selected_interaction_type">',
            '<option v-for="interaction_type in getInteractions" :value="interaction_type">{{ interaction_type }}</option>',
          '</select>',
          '<input type="text" v-model="add_interaction_id" placeholder="unique id"/>',
          '<input type="button" @click="addInteraction()" value="+" />',
        '</div>',
        '<div class="field-row">',
          '<label>Default Interaction:</label> ',
          '<select v-model="enemy.default_interaction_id">',
            '<option v-for="interaction in enemy.interactions" :value="interaction.id">{{ interaction.id }}</option>',
          '</select>',
        '</div>',

        '<event-interaction v-for="(interaction, idx) in enemy.interactions" :interactions="enemy.interactions" :interaction="interaction" :idx="idx"></event-interaction>',

    		'<div class="field-row">',
          '<label>Select Enemy:</label> ',
    			'<select v-model="selected_enemy_id">',
    				'<option value="" selected="selected">---</option>',
    				'<option v-for="enemy in config.db.enemies" :value="enemy.id">{{ enemy.id }}</option>',
    			'</select>',
          '<input @click="addEnemy" type="button" value="+"/>',
          '<input @click="removeEnemy" type="button" value="-"/>',
        '</div>',

        '<div class="info" v-show="enemy.enemies">Enemies: {{ enemy.enemies }}</div>',
  		  
        '<event-conditions :conditions="enemy.conditions" :config="config"></event-conditions>',
      '</div>'
      ].join(''),
  methods: {
  	addEnemy: function () {
  		let enemies = this.enemy.enemies
  		if (this.selected_enemy_id) {
  			enemies.push(this.selected_enemy_id)	
  		}
  	},
  	removeEnemy: function () {
  		let enemies = this.enemy.enemies
  		if (this.selected_enemy_id) {
  			enemies.pop()	
  		}
  	},
    addInteraction: function () {
      if (!this.enemy.interactions) {
        Vue.set(this.enemy, "interactions", {})
      }
      if (!this.enemy.interactions[this.add_interaction_id] && this.selected_interaction_type) {
        Vue.set(this.enemy.interactions, this.add_interaction_id, {
          id: this.add_interaction_id,
          type: this.selected_interaction_type
        })
      }
    },
    addSellItem: function () {
      if (!this.enemy.seller) {
        Vue.set(this.enemy, "seller", {})
      }

      if (this.selected_sell_item_id && !this.enemy.seller[this.selected_sell_item_id]) {
        Vue.set(this.enemy.seller, this.selected_sell_item_id, 0)
      }
    },
  },
  computed: {
    isActive: function () {
      return this.enemy && this.enemy.id == 'enemies'
    },
    getInteractions: function () {
      return ["dialog"]
    },
    getItems: function () {
      return config.db.items
    }
  }
})

Vue.component('eventSellItem', {
  props: ['price', 'idx', 'seller'],
  template: [
      '<div>',
        '<div class="field-row">',
          '<label>{{ idx }}: </label> ',
          '<input type="number" v-model.number="new_price" />',
          '<input type="button" @click="removeItem" value="-" />',
        '</div>',
      '</div>'
      ].join(''),
  methods: {
    removeItem: function () {
      Vue.delete(this.seller, this.idx)
    }
  },
  computed: {
    new_price: {
      get: function () {
        return this.price
      },
      set: function (value) {
        Vue.set(this.seller, this.idx, value)
      }
    }
  }
})

Vue.component('eventInteraction', {
  props: ['interaction', 'interactions', 'idx'],
  data: function () {
    return {
      selected_choice_type: null,
    }
  },
  template: [
      '<div class="box">',
        '<h5>Dialog id: {{ interaction.id }} <input type="button" @click="removeInteraction" value="-" /></h5>',
        '<div class="field-row">',
          '<label>Type:</label> ',
          '{{ interaction.type }}', //<input type="text" v-model="interaction.type" />',
        '</div>',

        '<div class="field-row">',
          '<label>Text:</label> ',
          '<textarea v-model="interaction.text" rows=5 cols=30></textarea>',
        '</div>',

        '<div class="field-row">',
          '<h5>Create Show Conditions <input type="button" @click="createCondition" value="+" /></h5>',
        '</div>',

        '<div>',
          '<event-interaction-condition v-for="(condition, idx) in interaction.conditions" :condition="condition" :conditions="interaction.conditions" :idx="idx"></event-interaction-condition>',
        '</div>',

        '<div class="field-row">',
          '<h5>Create Choice <input type="button" @click="createChoice" value="+" /></h5>',
        '</div>',

        '<div>',
          '<event-interaction-choice v-for="(choice, idx) in interaction.choices" :choice="choice" :choices="interaction.choices" :idx="idx"></event-interaction-choice>',
        '</div>',
      '</div>'
      ].join(''),
  methods: {
    removeInteraction: function () {
      Vue.delete(this.interactions, this.idx)
    },
    createChoice: function () {
      if (!this.interaction.choices) {
        Vue.set(this.interaction, "choices", [])
      }
      
      this.interaction.choices.push({})
    },
    createCondition: function () {
      if (!this.interaction.conditions) {
        Vue.set(this.interaction, "conditions", [])
      }
      
      this.interaction.conditions.push({})
    }
  }
})

Vue.component('eventInteractionCondition', {
  props: ['condition', 'conditions', 'idx'],
  data: function () {
    return {
      state_id: null,
    }
  },
  template: [
      '<div class="box">',
        '<h5>Condition {{ idx }} <input type="button" @click="removeCondition" value="-" /></h5>',

        '<div class="field-row">',
          '<label>Type:</label> ',
          '<select v-model="condition.type">',
            '<option v-for="type in getTypes" :value="type">{{ type }}</option>',
          '</select>',
        '</div>',

        '<div v-if="condition.type == \'world_state\'">',
          '<div class="field-row">',
            '<label>State Id: </label> ',
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
    getTypes: function () {
      return ["world_state"]
    }
  }
})

Vue.component('eventInteractionChoice', {
  props: ['choice', 'choices', 'idx'],
  data: function () {
    return {
      item_id: null,
      cash: null,
      world_state: null,
    }
  },
  template: [
      '<div class="box">',
        '<h5>Choice {{ idx }} <input type="button" @click="removeChoice" value="-" /></h5>',

        '<div class="field-row">',
          '<label>Type:</label> ',
          '<select v-model="choice.type">',
            '<option v-for="type in getTypes" :value="type">{{ type }}</option>',
          '</select>',
        '</div>',

        '<div class="field-row">',
          '<label>Answer:</label> ',
          '<textarea v-model="choice.answer" rows=5 cols=30></textarea>',
        '</div>',

        '<div class="field-row">',
          '<h5>Create Show Conditions <input type="button" @click="createCondition" value="+" /></h5>',
        '</div>',

        '<div>',
          '<event-interaction-condition v-for="(condition, idx) in choice.conditions" :condition="condition" :conditions="choice.conditions" :idx="idx"></event-interaction-condition>',
        '</div>',

        '<div class="field-row">',
          '<label>Set World State (if choose the answer)</label> ',
          '<input type="text" v-model="world_state"/>',
          '<input type="button" @click="addWorldState" value="+" />',
          '<input type="button" @click="removeWorldState" value="-" />',
          '<div class="info" v-show="choice.state">{{ choice.state }}</div>',
        '</div>',

        '<div v-if="choice.type == \'rest\'">',
          '<div class="field-row">',
            '<label>Cost:</label> ',
            '<input type="text" v-model.number="choice.cost"/>',
          '</div>',
        '</div>',

        '<div v-if="choice.type != \'attack\' && choice.type != \'exit\'">',
          '<div class="field-row">',
            '<label>Next Dialog:</label> ',
            // '<select v-model="choice.next">',
            //   '<option v-for="next in choices" :value="next.id">{{ next.id }}</option>',
            // '</select>',
            '<input type="text" v-model="choice.next" placeholder="next dialog_id"/>',
          '</div>',
        '</div>',

        '<div class="box" v-if="choice.type == \'auto_trade\'">',
          '<div class="field-row">',
            '<label>Auto Trade:</label> ',
            '<select v-model="item_id">',
              '<option value="cash">Cash</option>',
              '<option v-for="item in getItems" :value="item.id">{{ item.id }}</option>',
            '</select>',
            '<input type="number" v-model.number="cash" v-show="item_id == \'cash\'"/>',
          '</div>',

          '<div class="field-row">',
            '<label>Take Items:</label> ',
            '<input type="button" @click="addTakeItem" value="+" />',
            '<input type="button" @click="removeTakeItem" value="-" />',
            '<div class="info" v-show="choice.take">{{ choice.take }}</div>',
          '</div>',

          '<div class="field-row">',
            '<label>Give Items:</label> ',
            '<input type="button" @click="addGiveItem" value="+" />',
            '<input type="button" @click="removeGiveItem" value="-" />',
            '<div class="info" v-show="choice.give">{{ choice.give }}</div>',
          '</div>',
        '</div>',

      '</div>'
      ].join(''),
  methods: {
    removeChoice: function () {
      this.choices.splice(this.idx, 1)
    },
    createCondition: function () {
      if (!this.choice.conditions) {
        Vue.set(this.choice, "conditions", [])
      }
      
      this.choice.conditions.push({})
    },
    addTakeItem: function () {
      if (!this.choice.take) {
        Vue.set(this.choice, "take", [])
      }

      if (!this.item_id) {
        return
      }

      let item_id = null
      if (this.item_id == "cash") {
        item_id = this.cash
      } else {
        item_id = this.item_id
      }

      this.choice.take.push(item_id)
    },
    removeTakeItem: function () {
      if (this.choice.take) {
        this.choice.take.pop()
      }
    },
    addGiveItem: function () {
      if (!this.choice.give) {
        Vue.set(this.choice, "give", [])
      }

      if (!this.item_id) {
        return
      }

      let item_id = null
      if (this.item_id == "cash") {
        item_id = this.cash
      } else {
        item_id = this.item_id
      }

      this.choice.give.push(item_id)
    },
    removeGiveItem: function () {
      if (this.choice.give) {
        this.choice.give.pop()
      }
    },
    addWorldState: function () {
      if (!this.world_state) {
        return
      }

      if (!this.choice.state) {
        Vue.set(this.choice, "state", [])
      }

      if (this.choice.state.indexOf(this.world_state) < 0) {
        this.choice.state.push(this.world_state)
      }
    },
    removeWorldState: function () {
      if (this.choice.state) {
        this.choice.state.pop()
      }
    },
  },
  computed: {
    getTypes: function () {
      return ["dialog", "attack", "rest", "trade", "auto_trade", "exit"]
    },
    getItems: function () {
      return config.db.items
    }
  }
})

