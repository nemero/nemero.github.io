Vue.component('eventLootBox', {
  props: ['config'],
  template: [
      '<div v-if="isActive">',
        '<div class="field-row">',
    			'<label>Select Item:</label> ',
    			'<select v-model="config.selectedItem">',
    				'<option value="" selected="selected">---</option>',
    				'<option v-for="item in config.db.items" :value="item">{{ item.id }}</option>',
    			'</select>',

    	    '<input type="button" @click="addItem" value="+"/>',
    			'<input type="button" @click="removeItem" value="-"/>',
        '</div>',

  			'<div class="info">Items: {{ config.activeLayerEvent.items }}</div>',

        '<event-conditions :conditions="config.activeLayerEvent.conditions" :parent="config.activeLayerEvent"></event-conditions>',
      '</div>'
      ].join(''),
  methods: {
  	addItem: function () {
  		let items = config.activeLayerEvent.items
  		if (config.selectedItem && items.indexOf(config.selectedItem.id) < 0) {
  			items.push(config.selectedItem.id)	
  		}
  	},
  	removeItem: function () {
  		let items = config.activeLayerEvent.items
  		if (config.selectedItem) {
  			items.pop(config.selectedItem.id)	
  		}
  	}
  },
  computed: {
    isActive: function () {
      return config.activeLayerEvent && config.activeLayerEvent.id == 'loot_box'
    },
  }
})