Vue.component('eventEnemies', {
  props: ['config'],
  template: [
      '<div v-if="isActive">',
  			'<div class="field-row">',
  				'<label>Cooldown:</label> ',
  				'<input type="number" v-model="config.activeLayerEvent.cooldown" />',
  			'</div>',

    		'<div class="field-row">',
          '<label>Select Enemy:</label> ',
    			'<select v-model="config.selectedEnemy">',
    				'<option value="" selected="selected">---</option>',
    				'<option v-for="enemy in config.db.enemies" :value="enemy">{{ enemy.id }}</option>',
    			'</select>',
          '<input @click="addEnemy" type="button" value="+"/>',
          '<input @click="removeEnemy" type="button" value="-"/>',
        '</div>',

        '<div class="info">Enemies: {{ config.activeLayerEvent.enemies }}</div>',
  		  
        '<event-conditions :conditions="config.activeLayerEvent.conditions" :config="config"></event-conditions>',
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
  },
  computed: {
    isActive: function () {
      return config.activeLayerEvent && config.activeLayerEvent.id == 'enemies'
    },
  }
})