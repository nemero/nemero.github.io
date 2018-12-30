Vue.component('activeInteractions', {
	props: ['event'],
	data: function () {
		return {
			active_interaction_id: null,
		}
	},
  template: [
      '<div class="" v-if="event">',
       	'<div class="dialog">',
       		'<span class="text">{{ interaction.text }}</span>',
       		'<div class="answer" v-for="(choice, idx) in interaction.choices" @click="selectChoice(choice)">',
       			'{{ idx + 1 }}. {{ choice.answer }} ({{ choice.type }})',
       		'</div>',
       	'</div>',
      '</div>'
      ].join(''),
  created: function () {
    window.addEventListener('keydown', this.selectChoiceKey)
  },
  methods: {
  	selectChoiceKey: function (e) {
      if (config.activeUI != "dialog" || !this.event) {
        return
      }

      let choice_id = null
      if (e.keyCode - 49 >= 0) {
      	choice_id = e.keyCode - 49
      } else {
      	return
      }
      console.log(choice_id, this.interaction.choices[choice_id].answer)

      if (this.interaction.choices && this.interaction.choices[choice_id]) {
      	this.selectChoice(this.interaction.choices[choice_id])
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
	  					config.character.bag.splice(item_id, 1)
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
  			}

  			this.active_interaction_id = choice.next
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

  		if (choice.type == "exit" || choice.type == "attack") {
  		  Vue.set(config, "activeInteractions", null)
  			this.active_interaction_id = null
  		}
  	}
  },
  computed: {
  	getInteractions: function () {
  		if (this.event) {
  			return this.event.interactions
  		}
  	},
  	interaction: function () {
  		if (!this.active_interaction_id) {
  			this.active_interaction_id = this.event.default_interaction_id
  		}

  		return this.event.interactions[this.active_interaction_id]
  	}
  }
})