Vue.component('choose-saved-map', {
  data: function () {
    return {
      saveAs: null,
    }
  },
  props: ['config'],
  template: ['<div>',
      '<select v-model="config.activeMapId" @change="test">',
    			'<option value="" disabled selected=selected>---</option>',
    			'<option v-for="(map, idx) in config.db.mapList" :idx="idx" :value="idx">{{ map.name }}</option>',
      '</select>',
      '<input type="input" v-model="saveAs" />',
      '<input type="button" value="Save Map" @click="saveMap()" />',
      '<input type="button" value="Load Maps" @click="loadMaps()" />',
      '<input type="button" value="Delete Map" @click="deleteMap()" />',
    '<div/>'
    ].join(""),
  methods: {
  	test: function () {
  		// set map
  		config.map = config.db.mapList[config.activeMapId].map
      config.layerEvents = config.db.mapList[config.activeMapId].layerEvents
      config.battleZone = config.db.mapList[config.activeMapId].battle
      this.saveAs = config.activeMapId
  	},
    saveMap: function () {
      var body = [{
        "uid": this.saveAs,
        "name": this.saveAs,
        "tiles": config.db.mapList[config.activeMapId].map,
        "events": config.db.mapList[config.activeMapId].layerEvents,
        "battle": config.db.mapList[config.activeMapId].battle
      }]

      ajaxSubmit("POST", this.getEndpoint, JSON.stringify(body), null)
    },
    loadMaps: function () {
      ajaxSubmit("GET", this.getEndpoint, null, function(data) {
        console.log(JSON.parse(data))
        /* mapList: {
        "cave1": {
          "name": "cave1",
          "map": db_map_cave1,
          "layerEvents": db_map_cave1_actions,
          "battle": db_map_cave1_battle
        }, */
        var json = JSON.parse(data)
        var data = {};
        for (row_id in json) {
          let row = json[row_id]
          data[row.uid] = {
            "name": row.name,
            "map": row.tiles,
            "layerEvents": row.events,
            "battle": row.battle
          }
        }

        Vue.set(config.db, "mapList", data) 
        config.activeMapId = null
      })
    },
    deleteMap: function () {
      var body = config.activeMapId
      ajaxSubmit("DELETE", this.getEndpoint, body, null)
      this.loadMaps()
    },
  },
  computed: {
    getEndpoint: function () {
      return config.ip_server + '/map/'
    }
  }
})