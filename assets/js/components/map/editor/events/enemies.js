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
          '<label>Select Enemy:</label> ',
          '<select v-model="selected_enemy_id">',
            '<option value="" selected="selected">---</option>',
            '<option v-for="enemy in config.db.enemies" :value="enemy.id">{{ enemy.id }}</option>',
          '</select>',
          '<input @click="addEnemy" type="button" value="+"/>',
          '<input @click="removeEnemy" type="button" value="-"/>',
        '</div>',

        '<div class="info" v-show="enemy.enemies">Enemies: {{ enemy.enemies }}</div>',

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
  		  
        '<event-conditions :conditions="enemy.conditions" :parent="enemy"></event-conditions>',
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
      collapse: false,
    }
  },
  template: [
      '<div class="box">',
        '<h5 @click="collapse = collapse ? false : true">{{ interaction.id }} - ({{ interaction.text }})<input type="button" @click="removeInteraction" value="-" /></h5>',
        '<div v-show="collapse">',
          '<div class="field-row">',
            '<label>Type:</label> ',
            '{{ interaction.type }}', //<input type="text" v-model="interaction.type" />',
          '</div>',

          '<div class="field-row">',
            '<label>Text:</label> ',
            '<textarea v-model="interaction.text" rows=5 cols=30></textarea>',
          '</div>',

          '<div class="field-row">',
            '<label>Create Choice</label> ',
            '<input type="button" @click="createChoice" value="+" />',
          '</div>',
          '<event-interaction-choice v-for="(choice, idx) in interaction.choices" :choice="choice" :choices="interaction.choices" :idx="idx"></event-interaction-choice>',

          '<event-conditions :conditions="interaction.conditions" :parent="interaction"></event-conditions>',
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

Vue.component('eventInteractionChoice', {
  props: ['choice', 'choices', 'idx'],
  data: function () {
    return {
      item_id: null,
      cash: null,
      world_state: null,
      event_change: null,
      collapse: false,
    }
  },
  template: [
      '<div class="box">',
        '<h5 @click="collapse = collapse ? false : true">{{ idx }} - {{ choice.type }}, next: ({{ choice.next }}), ({{ choice.answer }}) <input type="button" @click="removeChoice" value="-" /></h5>',
        '<div v-show="collapse">',
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
            '<label>Set World State</label> ',
            '<select v-model="world_state">',
              '<option v-for="state in getWorldStates" :value="state">{{ state }}</option>',
            '</select>',
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

          '<div v-if="choice.type == \'auto_trade\'">',
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

          '<div class="field-row">',
            '<label>Event change</label> ',
            '<select v-model="event_change">',
              '<option v-for="type in getEventChangeTypes" :value="type">{{ type }}</option>',
            '</select>',
            '<input type="button" @click="addEventChange" value="+" />',
          '</div>',
          '<event-interaction-action v-for="(action, idx) in choice.events" :action="action" :events="choice.events" :idx="idx"></event-interaction-action>',

          '<event-conditions :conditions="choice.conditions" :parent="choice"></event-conditions>',
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
    addEventChange: function () {
      if (!this.event_change) {
        return
      }

      if (!this.choice.events) {
        Vue.set(this.choice, "events", [])
      }

      this.choice.events.push({
        "type": this.event_change,
        "map": "",
        "position": [0, 0]
      })
    }
  },
  computed: {
    getTypes: function () {
      return ["dialog", "attack", "rest", "trade", "auto_trade", "exit"]
    },
    getItems: function () {
      return config.db.items
    },
    getEventChangeTypes: function () {
      return ["move", "hide", "show"]
    },
    getWorldStates: function () {
      let world_states = []

      for (layer_id in config.db.mapList) {
        let layer = config.db.mapList[layer_id].layerEvents

        for (row_id in layer) {
          let rows = layer[row_id]

          for (col_id in rows) {
            let cols = rows[col_id]

            for (event_id in cols) {
              let event = cols[event_id]
              if (event.interactions) {
                for (interaction_id in event.interactions) {
                  let interaction = event.interactions[interaction_id]
                  for (choice_id in interaction.choices) {
                    let choice = interaction.choices[choice_id]
                    if (choice.state) {
                      for (state_id in choice.state) {
                        let state = choice.state[state_id]
                        if (world_states.indexOf(state) < 0) {
                          world_states.push(state)
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }

      return world_states.sort()
    },
  }
})


Vue.component('eventInteractionAction', {
  props: ['action', 'events', 'idx'],
  data: function () {
    return {
      collapse: false,
    }
  },
  created: function () {
    if (this.action.type == "move") {
      this.action.new_position = [0, 0]
    }
  },
  template: [
      '<div class="box">',
        '<h5 @click="collapse = collapse ? false : true">{{ idx }} - ({{ action.type }}) {{ action.id }} <input type="button" @click="removeAction" value="-" /></h5>',
        '<div v-show="collapse">',
          '<div class="field-row">',
            '<label>Type:</label> ',
            '<select v-model="action.type" @change="prepareType">',
              '<option v-for="type in getTypes" :value="type">{{ type }}</option>',
            '</select>',
          '</div>',

          '<div class="field-row">',
              '<label>Event Id: </label> ',
              '<input type="text" v-model="action.id"/>',
          '</div>',
          '<div class="field-row">',
            '<label>Map Id: </label> ',
            '<input type="text" v-model="action.map"/>',
          '</div>',
          '<div class="field-row">',
            '<label>Position: </label> ',
            'X: <input type="number" v-model="action.position[0]"/>',
            'Y: <input type="number" v-model="action.position[1]"/>',
          '</div>',

          '<div v-if="action.type == \'move\'">',
            '<div class="field-row">',
              '<label>To Map Id: </label> ',
              '<input type="text" v-model="action.to_map"/>',
            '</div>',
            '<div class="field-row">',
              '<label>New Position: </label> ',
              'X: <input type="number" v-model="action.new_position[0]"/>',
              'Y: <input type="number" v-model="action.new_position[1]"/>',
            '</div>',
          '</div>',
        '</div>',
      '</div>'
      ].join(''),
  methods: {
    removeAction: function () {
      this.events.splice(this.idx, 1)
    },
    prepareType: function () {
      if (this.action.type == "move" && !this.action.new_position) {
        this.action.new_position = [0, 0]
      }
    }
  },
  computed: {
    getTypes: function () {
      return ["move", "hide", "show"]
    },
  }
})
