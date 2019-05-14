Vue.component('enemies', {
  props: ['enemies'],
  data: function () {
  	return {
  		enemy_id: null,
  		create_enemy_id: null,
  	}
  },
  template: ['<div class="enemies">',
	  						'<div class="field-row">',
				          '<label>Select Enemy:</label> ',
					        '<select v-model="enemy_id">',
	  								'<option v-for="enemy in enemies" :value="enemy.id">{{ enemy.id }} - {{ enemy.name }}</option>',
	  							'</select>',
	        				'<input type="button" @click="removeEnemy()" value="-" />', 
				        '</div>',
  							
  							'<div class="field-row">',
				          '<label>Create Enemy:</label> ',
					        '<input type="text" v-model="create_enemy_id" placeholder="unique id"/>',
	  							'<input type="button" @click="createEnemy()" value="+" />',
				        '</div>',
	  							
              	'<active-enemy :enemy="getEnemy" :enemies="enemies" v-if="getEnemy"></active-enemy>',
              	
              	'<div class="flex">',
              		'<textarea rows="5" cols="30">{{ enemies }}</textarea>',
              		'<textarea rows="5" cols="30">{{ getLoot }}</textarea>',
              	'</div>',
            '</div>'
    ].join(""),
	methods: {
	 	createEnemy: function () {
  		if (this.create_enemy_id && !this.enemies[this.create_enemy_id]) {
  			Vue.set(this.enemies, this.create_enemy_id, {
  				id: this.create_enemy_id,
  				name: this.create_enemy_id
  			})

  			this.enemy_id = this.create_enemy_id
  		}
  	},
  	removeEnemy: function () {
  		if (this.enemy_id) {
  			Vue.delete(this.enemies, this.enemy_id)
  		}
  	}
	},
  computed: {
  	getEnemy: function () {
  		if (this.enemy_id) {
  			let enemy = config.db.enemies[this.enemy_id]
  			return enemy
  		}
  	},
  	getLoot: function () {
  		return config.db.loot
  	}
  }
})

Vue.component('activeEnemy', {
  props: ['enemy', 'enemies'],
  template: ['<div class="enemy flex flex-top">',
              //'{{ enemy }}',
              '<div>',
	              '<h4>Enemy:</h4> ',
	              '<div class="field-row">',
				          '<label>Id:</label> ',
				          //'<input type="text" v-model="enemy.id" />',
				          '<span>{{ enemy.id }}</span>',
				        '</div>',

				        '<div class="field-row">',
				          '<label>Name:</label> ',
				          '<input type="text" v-model="enemy.name" />',
				        '</div>',

				        '<div class="tiles-map">',
									'<div class="field-row">',
										'<label>Avatar: </label>',
										'<input type="text" v-model="enemy.avatar" />',
									'</div>',
									'<span class="layer-event" style="zoom: 3; border: 0.2px solid #cecece;" :style="getAvatarStyle"></span>',
								'</div>',

				        '<div class="field-row">',
				          '<label>Experience:</label> ',
				          '<input type="number" v-model.number="enemy.experience" />',
				        '</div>',

				        '<div class="field-row">',
				          '<label>Level:</label> ',
				          '<input type="number" v-model.number="enemy.level" />',
				        '</div>',

				        '<div class="field-row">',
				          '<label>Health:</label> ',
				          '<input type="number" v-model.number="enemy.health" />',
				        '</div>',

				        '<div class="field-row">',
				          '<label>Damage:</label> ',
				          '<input type="number" v-model.number="enemy.damage" />',
				        '</div>',

				        '<div class="field-row">',
				          '<label>Defence:</label> ',
				          '<input type="number" v-model.number="enemy.defence" />',
				        '</div>',

				        '<div class="field-row">',
				          '<label>Agility:</label> ',
				          '<input type="number" v-model.number="enemy.agility" />',
				        '</div>',

				        '<div class="field-row">',
				          '<label>Faction:</label> ',
				          '<select v-model="enemy.faction">',
	  								'<option v-for="(faction, key) in getFactions" :value="key">{{ faction }}</option>',
	  							'</select>',
				        '</div>',

				        '<div class="tiles-map">',
									'<div class="field-row">',
										'<label>Model: </label>',
										'<input type="text" v-model="enemy.model" />',
									'</div>',
									'<span class="layer-event" style="zoom: 3; border: 0.2px solid #cecece;" :class="enemy.model"></span>',
								'</div>',
							'</div>',

							'<div>',
								'<h4>Loot:</h4> ',
			          '<enemy-loot :loot="getLoot"></enemy-loot>',
			        '</div>',

			        '<div>',
			          '<h4>Script:</h4> ',
			          '<enemy-script :script="getScript"></enemy-script>',
			        '</div>',
            '</div>'
  ].join(""),
  computed: {
  	getFactions: function () {
  		return config.db.factions
  	},
  	getAvatarStyle: function () {
  		let data = {}
  		if (this.enemy.avatar) {
  			data['background-image'] = 'url(' + this.enemy.avatar + ')'
  		}

  		return data
  	},
  	getScript: function () {
  		if (!this.enemy.script) {
  			Vue.set(this.enemy, 'script', {})
  		}
			return this.enemy.script  	
  	},
  	getLoot: function () {
  		let loot = config.db.loot[this.enemy.id]
  		if (!loot) {
  			Vue.set(config.db.loot, this.enemy.id, {
  				id: this.enemy.id,
  				items: {}
  			})
  		}
			return config.db.loot[this.enemy.id]
  	}
  }
})

Vue.component('enemyLoot', {
  props: ['loot'],
  data: function () {
  	return {
  		to: 0
  	}
  },
  template: ['<div class="enemy-loot">',
      '<div class="field-row">',
        '<label>Inserting Item:</label> ',
        '<select v-model="inserting_item">',
        	'<option>---</option>',
					'<option v-for="(item, idx) in getItems" :value="idx">{{ item.id }}</option>',
				'</select>',
				'<input type="button" @click="addItem()" value="+" />', 
      '</div>',

  		'<enemy-loot-item v-for="(percent, idx) in loot.items" :items="loot.items" :percent="percent" :idx="idx"></enemy-loot-item>',
  	'</div>'
  ].join(""),
  methods: {
  	addItem: function () {
  		if (this.inserting_item && !this.loot.items[this.inserting_item]) {
  			Vue.set(this.loot.items, this.inserting_item, 0)
  		}
  	},
  },
  computed: {
  	getItems: function () {
  		return config.db.items
  	},
  	inserting_item: {
  		get: function () {
  			return config.selectedItem
  		}, 
  		set: function (item) {
  			Vue.set(config, "selectedItem", item)
  		}
  	}
  }
})

Vue.component('enemyLootItem', {
  props: ['items', 'percent', 'idx'],
  template: ['<div class="enemy-loot-item">',
  		'<div class="field-row">',
  			'<label>{{ idx }}</label>',
      	'<input type="number" v-model.number="item_percent" />',
      	'<input type="button" @click="removeItem()" value="-" />',
      '</div>',
  	'</div>'
  ].join(""),
  methods: {
  	removeItem: function () {
  		Vue.delete(this.items, this.idx)
  	}
  },
  computed: {
  	item_percent: {
  		get: function () {
  			return this.percent
  		},
  		set: function (percent) {
  			Vue.set(this.items, this.idx, percent)
  		}
  	}
  }
})

Vue.component('enemyScript', {
  props: ['script'],
  data: function () {
  	return {
  		to: 0
  	}
  },
  template: ['<div class="enemy-script">',
      '<div class="field-row">',
        '<label>Inserting Ability:</label> ',
        '<select v-model="inserting_ability">',
        	'<option>---</option>',
					'<option v-for="(ability, idx) in getAbilities" :value="idx">{{ ability.id }}</option>',
				'</select>',
      '</div>',

  		'<div class="field-row">',
        '<label>Add Stage To:</label> ',
        '<input type="number" v-model.number="to" />',
        '<input type="button" @click="addStage()" value="+" />', 
      '</div>',
  		'<enemy-script-stage v-for="(stage, idx) in script" :script="script" :stage="stage" :idx="idx"></enemy-script-stage>',
  	'</div>'
  ].join(""),
  methods: {
  	addStage: function () {
  		if (!this.script[this.to]) {
  			Vue.set(this.script, this.to, ["attack"])
  		}
  	},
  },
  computed: {
  	getAbilities: function () {
  		return config.db.abilities
  	},
  	inserting_ability: {
  		get: function () {
  			return config.selectedAbility
  		}, 
  		set: function (ability) {
  			//config.selectedAbility = ability
  			Vue.set(config, "selectedAbility", ability)
  		}
  	}
  }
})

Vue.component('enemyScriptStage', {
  props: ['script', 'stage', 'idx'],
  template: ['<div class="enemy-script-stage">',
  		'<h4>> {{ idx }} %:',
  		'<input type="button" @click="removeStage()" value="-" /></h4>',
  		'<enemy-script-stage-ability v-for="(ability, idx) in stage" :stage="stage" :ability="ability" :idx="idx"></enemy-script-stage-ability>',
  	'</div>'
  ].join(""),
  methods: {
  	removeStage: function () {
  		Vue.delete(this.script, this.idx)
  	}
  }
})

Vue.component('enemyScriptStageAbility', {
  props: ['stage', 'ability', 'idx'],
  template: ['<div class="stage-ability">',
  		'<div class="field-row">',
        '<label>{{ idx + 1 }}. {{ ability }}</label> ',
	  		'<input type="button" @click="addAbility()" value="+" />',
	  		'<input type="button" @click="removeAbility()" value="-" v-show="stage.length > 1"/>',
	  		'{{ getType }}',
      '</div>',
  	'</div>'
  ].join(""),
  methods: {
  	addAbility: function () {
  		if (config.selectedAbility) {
	  		let insert_after = this.idx + 1
	  		this.stage.splice(insert_after, 0, config.selectedAbility)
	  	}
  	},
  	removeAbility: function () {
  		this.stage.splice(this.idx, 1)
  	}
  },
  computed: {
  	getType: function () {
  		return config.db.abilities[this.ability] ? config.db.abilities[this.ability].type : ""
  	}
  }
})