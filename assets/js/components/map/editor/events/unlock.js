Vue.component('eventUnlock', {
  props: ['config'],
  data: function () {
  	return {
  		"activeTrigger": null,
  	}
  },
  template: [
      '<div v-if="isActive">',
		'<div class="field-row">',
			'<label>Selected Tile:</label> ',
			'<active-brush-tile :tile="config.activeTile"></active-brush-tile>',
		'</div>',

		'<div class="field-row">',
	      	'<label>Unlock Type:</label> ',
			'<select v-model="config.activeLayerEvent.type_unlock">',
				'<option value="" selected="selected">---</option>',
				'<option value="item">item</option>',
				'<option value="use">use</option>',
			'</select>',
		'</div>',

		'<div class="field-row" v-show="config.activeLayerEvent.type_unlock == \'item\'">',
			'<label>Unlock Item:</label> ',
			'<select v-model="config.activeLayerEvent.item">',
				'<option value="" selected="selected">---</option>',
				'<option v-for="item in config.db.items" :value="item.id">{{ item.id }}</option>',
			'</select>',
		'</div>',

		'<h4>Triggers:</h4>',
		'<div class="field-row">',
			'<label>Select Type Trigger:</label> ',
			'<select v-model="activeTrigger">',
				'<option value="" selected="selected">---</option>',
				'<option v-for="item in config.db.eventTriggers" :value="item">{{ item }}</option>',
			'</select>',

			'<input type="button" @click="addTrigger" value="+"/>',
		'</div>',

		'<event-trigger v-for="trigger in config.activeLayerEvent.triggers" :trigger="trigger" :config="config"></event-trigger>',

		'<event-conditions :event="config.activeLayerEvent" :config="config"></event-conditions>',
      '</div>'
      ].join(''),
  methods: {
  	addTrigger: function () {
  		if (!config.activeLayerEvent.triggers) {
  			Vue.set(config.activeLayerEvent, "triggers", [])
  		}
  		let triggers = config.activeLayerEvent.triggers

  		if (this.activeTrigger) {
	  		triggers.push({
	  			type: this.activeTrigger,
	  			position: [0, 0],
	  		})
  		}
  	},
  },
  computed: {
  	isActive: function () {
      return config.activeLayerEvent && config.activeLayerEvent.id == 'unlock'
    },
  }
})