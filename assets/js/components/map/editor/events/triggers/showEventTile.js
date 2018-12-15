Vue.component('eventTriggerShowEventTile', {
  props: ['trigger', 'config'],
  template: [
      '<div class="box">',
          'Show Event Tile:',
          '<div>',
            'Map here triggering Action Layer: ',
            '<select v-model="trigger.map">',
              '<option value="" selected="selected">---</option>',
              '<option v-for="map in config.map_list" :value="map.name">{{ map.name }}</option>',
            '</select>',
          '</div>',

          '<div>',
            'X/Y Position of Action Layers: ',
            'X: <input type="number" v-model="trigger.position[0]" />',
            'Y: <input type="number" v-model="trigger.position[1]" />',
          '</div>',

          '<div>',
            'Action Layer id to show: ',
            // 
            '<select v-model="trigger.event_id">',
              '<option value="" selected="selected">---</option>',
                '<option v-for="(map, idx) in getTileEvents()" :value="idx">{{ idx }} - {{ map.name }}, {{ map.type }}, is hidden: {{ map.hidden }}</option>',
            '</select>',
          '</div>',

        '{{ trigger }}',
      '</div>'
      ].join(''),
  methods: {
    getTileEvents: function () {
      let events = config.map_list[this.trigger.map]

      for (map_idx in config.map_list) {
        let map = config.map_list[map_idx]
        if (map.name == this.trigger.map) {
          if (map.layerEvents && map.layerEvents[this.trigger.position[1]] && map.layerEvents[this.trigger.position[1]][this.trigger.position[0]]) {
            return map.layerEvents[this.trigger.position[1]][this.trigger.position[0]]
          }

          break
        }
      }
    }
  },
  computed: {
  	
  }
})