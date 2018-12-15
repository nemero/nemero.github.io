Vue.component('eventCaveLock', {
  props: ['config'],
  data: function () {
  	return {
  		"activeTrigger": null,
  	}
  },
  template: [
      '<div>',
		'<div>',
			'Selected Tile:',
			'<active-brush-tile :tile="config.activeTile"></active-brush-tile>',
		'</div>',
      	'Unlock Type: ',
		'<select v-model="config.activeLayerEvent.type_unlock">',
			'<option value="" selected="selected">---</option>',
			'<option value="item">item</option>',
			'<option value="use">use</option>',
		'</select>',

		'<div v-show="config.activeLayerEvent.type_unlock == \'item\'">',
			'Unlock Item: {{ config.activeLayerEvent.item }}',
			'<select v-model="config.activeLayerEvent.item">',
				'<option value="" selected="selected">---</option>',
				'<option v-for="item in config.db.items" :value="item.id">{{ item.id }}</option>',
			'</select>',
		'</div>',

		'<div>',
			'Trigger:',

			'<div>Select Type Trigger:</div>',
			'<select v-model="activeTrigger">',
				'<option value="" selected="selected">---</option>',
				'<option v-for="item in config.db.event_triggers" :value="item">{{ item }}</option>',
			'</select>',

			'<event-trigger v-for="trigger in config.activeLayerEvent.triggers" :trigger="trigger" :config="config"></event-trigger>',

			'<span @click="addTrigger">Add Trigger</span>',
			'<span @click="removeTrigger">Remove Trigger</span>',
		'</div>',

		'<event-show-conditions :event="config.activeLayerEvent" :config="config"></event-show-conditions>',
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
  	removeTrigger: function () {
  		let triggers = config.activeLayerEvent.triggers
  		triggers.pop()
  	}
  },
})