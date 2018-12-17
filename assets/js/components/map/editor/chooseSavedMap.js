Vue.component('choose-saved-map', {
  props: ['config'],
  template: ['<select v-model="config.activeMapId" @change="test">',
  			'<option value="" disabled selected=selected>---</option>',
  			'<option v-for="(map, idx) in config.map_list" :idx="idx" :value="idx">{{ map.name }}</option>',
    '</select>'].join(""),
  methods: {
  	test: function () {
  		// set map
  		config.map = config.map_list[config.activeMapId].map
      config.layerEvents = config.map_list[config.activeMapId].layerEvents
  	}
  }
})