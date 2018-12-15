Vue.component('eventChestOpen', {
  props: ['config'],
  template: [
      '<div>',
  			'<div>Select Item: </div>',
  			
  			'<select v-model="config.selectedItem">',
  				'<option value="" selected="selected">---</option>',
  				'<option v-for="item in config.db.items" :value="item">{{ item.id }}</option>',
  			'</select>',

  	    	'<span @click="addItem">Add Item +</span>',
  			'<span @click="removeItem">Remove Item -</span>',

  			'<div>Items: {{ config.activeLayerEvent.items }}</div>',

        '<event-show-conditions :event="config.activeLayerEvent" :config="config"></event-show-conditions>',
      '</div>'
      ].join(''),
  methods: {
  	addItem: function () {
  		let items = config.activeLayerEvent.items
  		if (config.selectedItem) {
  			items.push(config.selectedItem.id)	
  		}
  	},
  	removeItem: function () {
  		let items = config.activeLayerEvent.items
  		if (config.selectedItem) {
  			items.pop(config.selectedItem.id)	
  		}
  	}
  }
})