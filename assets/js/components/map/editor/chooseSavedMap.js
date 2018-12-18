Vue.component('choose-saved-map', {
  props: ['config'],
  template: ['<select v-model="config.activeMapId" @change="test">',
  			'<option value="" disabled selected=selected>---</option>',
  			'<option v-for="(map, idx) in config.db.mapList" :idx="idx" :value="idx">{{ map.name }}</option>',
    '</select>'].join(""),
  methods: {
  	test: function () {
  		// set map
  		config.map = config.db.mapList[config.activeMapId].map
      config.layerEvents = config.db.mapList[config.activeMapId].layerEvents
  	}
  }
})