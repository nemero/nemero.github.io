Vue.component('activeInteractions', {
	props: ['event'],
	data: function () {
		return {
			active_interaction_id: null,
		}
	},
  template: [
      '<div class="">',
       	'<div class="dialog">',
       		'<span class="text">{{ interaction.text }}</span>',
       		'<div class="answer" v-for="(choice, idx) in interaction.choices" @click="selectChoice(choice)">',
       			'{{ idx }}. {{ choice.answer }}',
       		'</div>',
       	'</div>',
      '</div>'
      ].join(''),
  methods: {
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
  			// todo implement
  			this.active_interaction_id = choice.next
  		}

  		if (choice.type == "rest") {
  			// todo: move in config
  			if (config.character.money - 10 >= 0) {
  				config.character.money -= 10
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
  		  Vue.delete(config, "activeInteractions")
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