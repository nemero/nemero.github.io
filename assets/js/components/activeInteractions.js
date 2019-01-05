Vue.component('activeInteractions', {
	props: ['event'],
	data: function () {
		return {
			active_interaction_id: null,
		}
	},
  template: [
      '<div class="" v-if="event">',
        '<div class="dialogs dialog" v-if="!active_interaction_id">',
          '<span class="text">{{ event.name }} says:</span>',
          '<div class="answer" v-for="(_interaction, idx) in getActiveInteractions" @click="selectInteraction(idx)">',
            '{{ idx + 1 }}. {{ getActiveInteractions[idx].text }}',
          '</div>',
        '</div>',

       	'<div class="dialog" v-if="active_interaction_id">',
       		'<span class="text">{{ interaction.text }}</span>',
       		'<div class="answer" v-for="(choice, idx) in getChoices(interaction)" @click="selectChoice(choice)">',
       			'{{ idx + 1 }}. {{ choice.answer }} ({{ choice.type }})',
       		'</div>',
       	'</div>',
      '</div>'
      ].join(''),
  created: function () {
    window.addEventListener('keydown', this.selectKey)
  },
  methods: {
    selectInteraction: function (idx) {
      let interaction = this.getActiveInteractions[idx]
      this.active_interaction_id = interaction.id
    },
  	selectKey: function (e) {
      if (config.activeUI != "dialog" || !this.event) {
        return
      }

      let id = null
      if (e.keyCode - 49 >= 0) {
      	id = e.keyCode - 49
      } else {
      	return
      }

      if (this.active_interaction_id) {
        if (this.getChoices(this.interaction) && this.getChoices(this.interaction)[id]) {
      	 this.selectChoice(this.getChoices(this.interaction)[id])
        }
      } else {
        this.selectInteraction(id)
      }
    },
  	selectChoice: function (choice) {
  		if (choice.type == "dialog") {
  			this.active_interaction_id = choice.next
  		}

  		if (choice.type == "attack") {
  			// attack
  			Vue.set(config, "executeEvent", {
          id: "enter",
          event: this.event
        })
  		}

  		if (choice.type == "trade") {
  			config.activeUI = "trade"
  			config.activeTrade = this.event.seller

  			this.active_interaction_id = choice.next
  		}

  		if (choice.type == "auto_trade") {
  			// check needed items
  			let can_trade = true
  			for (item_id in choice.give) {
  				let item = choice.give[item_id]
  				if (Number.isInteger(item) && config.character.money < item) {
  					can_trade = false
  					break
  				}

  				if (!Number.isInteger(item) && config.character.bag.indexOf(item) < 0) {
  					can_trade = false
  					break
  				}
  			}

  			if (can_trade) {
  				// take from player
					for (item_id in choice.give) {
	  				let item = choice.give[item_id]
	  				if (Number.isInteger(item)) {
	  					config.character.money -= item
	  				} else {
	  					config.character.bag.splice(config.character.bag.indexOf(item), 1)
	  				}
	  			}

	  			// give player
	  			for (item_id in choice.take) {
	  				let item = choice.take[item_id]
	  				if (Number.isInteger(item)) {
	  					config.character.money += item
	  				} else {
	  					config.character.bag.push(item)
	  				}	
	  			}
  			} else {
          return
        }

        if (choice.next) {
  			  this.active_interaction_id = choice.next
        } else {
          config.activeUI = "world"
        }
  		}

  		if (choice.type == "rest") {
  			if (config.character.money - choice.cost >= 0) {
  				config.character.money -= choice.cost
  			} else {
  				// apply cant use effect
  				return
  			}

  			config.character.health = config.character.max_health

  			// after rest call next interaction
  			this.active_interaction_id = choice.next
  		}

  		if (choice.type == "exit") {
  			config.activeUI = "world"
  		}

  		if (choice.type == "exit" || choice.type == "attack" || !choice.next) {
  		  Vue.set(config, "activeInteractions", null)
  			this.active_interaction_id = null
  		}

      // if choice correct with check other options
      if (choice.state) {
        for (idx in choice.state) {
          let state = choice.state[idx]
          if (config.character.world_state.indexOf(state) < 0) {
            config.character.world_state.push(state)
          }
        } 
      }

      if (choice.events) {
        for (idx in choice.events) {
          let action = choice.events[idx]
          if (!config.db.map[action.map] 
                || !config.db.map[action.map].layerEvents[action.position[1]]
                || !config.db.map[action.map].layerEvents[action.position[1]][action.position[0]]
                || !config.db.map[action.map].layerEvents[action.position[1]][action.position[0]][action.id]
            ) {
            continue
          }

          let object = JSON.parse(JSON.stringify(config.db.map[action.map].layerEvents[action.position[1]][action.position[0]][action.id]))
          if (action.type == "move") {
            if (action.to_map && action.new_position) {
              Vue.set(config.db.map[action.to_map].layerEvents[action.new_position[1]][action.new_position[0]], action.id, object)
            }
            Vue.delete(config.db.map[action.map].layerEvents[action.position[1]][action.position[0]], action.id)
          }

          if (action.type == "hide") {
            Vue.set(config.db.map[action.map].layerEvents[action.position[1]][action.position[0]][action.id], 'hidden', 'true')
            //Vue.delete(config.db.map[action.map].layerEvents[action.position[1]][action.position[0]], action.id)
          }

          if (action.type == "show") {
            Vue.set(config.db.map[action.map].layerEvents[action.position[1]][action.position[0]][action.id], 'hidden', 'false')
          }
        } 
      }
  	},
    getChoices: function (interaction) {
      let active_choices = []
      let world_state = config.character.world_state

      for (idx in interaction.choices) {
        let choice = interaction.choices[idx]
        let is_showing = true
        
        if (choice.conditions) {
          for (condition_idx in choice.conditions) {
            let condition = choice.conditions[condition_idx]
            if (condition.type == 'world_state') {
              if (condition.has) {
                for (state_id in condition.has) {
                  let state = condition.has[state_id]
                  if (world_state.indexOf(state) < 0) {
                    is_showing = false
                    break
                  }
                }
              }
              if (condition.not) {
                for (state_id in condition.not) {
                  let state = condition.not[state_id]
                  if (world_state.indexOf(state) >= 0) {
                    is_showing = false
                    break
                  }
                }
              }
            }

            if (condition.type == "items") {
              let bag = config.character.bag
              for (idx in condition.items) {
                let item = condition.items[idx]
                if (bag.indexOf(item) < 0) {
                  is_showing = false
                  break
                }
              }
            }
          }
        }

        if (is_showing) {
          active_choices.push(choice)
        }
      }

      return active_choices
    },
  },
  computed: {
  	getInteractions: function () {
  		if (this.event) {
  			return this.event.interactions
  		}
  	},
    getActiveInteractions: function () {
      let active_interactions = []
      let world_state = config.character.world_state
      for (idx in this.event.interactions) {
        let interaction = this.event.interactions[idx]
        let is_showing = false
        // is default interaction? (showing always)
        if (this.event.default_interaction_id == interaction.id) {
          active_interactions.push(this.event.interactions[this.event.default_interaction_id])
        }

        if (interaction.conditions) {
          is_showing = true

          for (condition_idx in interaction.conditions) {
            let condition = interaction.conditions[condition_idx]
            if (condition.type == 'world_state') {
              if (condition.has) {
                for (state_id in condition.has) {
                  let state = condition.has[state_id]
                  if (world_state.indexOf(state) < 0) {
                    is_showing = false
                    break
                  }
                }
              }
              if (condition.not) {
                for (state_id in condition.not) {
                  let state = condition.not[state_id]
                  if (world_state.indexOf(state) >= 0) {
                    is_showing = false
                    break
                  }
                }
              }
            }

            if (condition.type == "items") {
              let bag = config.character.bag
              for (idx in condition.items) {
                let item = condition.items[idx]
                if (bag.indexOf(item) < 0) {
                  is_showing = false
                  break
                }
              }
            }
          }

          if (is_showing) {
            active_interactions.push(interaction)
          }
        }
      }

      return active_interactions
    },
  	interaction: function () {
  		if (!this.active_interaction_id) {
  			this.active_interaction_id = this.event.default_interaction_id
  		}

  		return this.event.interactions[this.active_interaction_id]
  	}
  }
})