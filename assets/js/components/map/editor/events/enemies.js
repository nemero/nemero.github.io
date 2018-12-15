Vue.component('eventEnemies', {
  props: ['config'],
  template: [
      '<div>',
  			'<div>',
  				'Cooldown: ',
  				'<input type="number" v-model="config.activeLayerEvent.cooldown" />',
  			'</div>',

    			'Select Enemy:', 						
  			'<select v-model="config.selectedEnemy">',
  				'<option value="" selected="selected">---</option>',
  				'<option v-for="enemy in config.db.enemies" :value="enemy">{{ enemy.id }}</option>',
  			'</select>',
  			
  			'<span @click="addEnemy">Add Enemy +</span>',
  			'<span @click="removeEnemy">Remove Enemy -</span>',

  			'<div>Enemies: {{ config.activeLayerEvent.enemies }}</div>',
        
        '<event-show-conditions :event="config.activeLayerEvent" :config="config"></event-show-conditions>',
      '</div>'
      ].join(''),
  methods: {
  	addEnemy: function () {
  		let enemies = config.activeLayerEvent.enemies
  		if (config.selectedEnemy) {
  			enemies.push(config.selectedEnemy.id)	
  		}
  	},
  	removeEnemy: function () {
  		let enemies = config.activeLayerEvent.enemies
  		if (config.selectedEnemy) {
  			enemies.pop()	
  		}
  	}
  }
})