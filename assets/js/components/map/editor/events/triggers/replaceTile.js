Vue.component('eventTriggerReplaceTile', {
  props: ['trigger', 'config'],
  template: [
      '<div class="box">',
        'Edit Replace Tile',

          '<div>',
            'Map here triggering Action Layer: ',
            '<select v-model="trigger.map">',
              '<option value="" selected="selected">---</option>',
              '<option v-for="map in config.map_list" :value="map.name">{{ map.name }}</option>',
            '</select>',
          '</div>',
          
          '<div>',
            'X/Y Replacing Tile: ',
            'X: <input type="number" v-model="trigger.position[0]" />',
            'Y: <input type="number" v-model="trigger.position[1]" />',
          '</div>',

          '<div>',
            'Replacing Layer Id: ',
            '<input type="number" v-model="trigger.layer_id" />',
          '</div>',

          '<div>',
            '<div>Replace to Tile if condition success: (click to change on selected tile)</div>',
            '<span @click="useActiveTile" class="active-brush-tile" :style="getTileStyle" :class="getTileMapClass"></span>',
          '</div>',
        '{{ trigger }}',
      '</div>'
      ].join(''),
  methods: {
    useActiveTile: function () {
      Vue.set(this.trigger, 'tile', config.activeTile)
    },
  },
  computed: {
    getTileStyle: function () {
      let data = {}
      let tile = this.trigger.tile
      if (!tile) {
        return data
      }

      // style="width: 16px; height: 16px; background: url(assets/tileset_1.png); background-position: 0 0;"
      if (tile['size']) {
        data['width'] = tile['size'][0] + 'px'
      }
      if (tile['size']) {
        data['height'] = tile['size'][1] + 'px'
      }
      if (tile['texture']) {
        data['background'] = 'url(' + tile['texture'] + ')'
      }
      if (tile['offset']) {
        data['background-position'] = tile['offset'][0] + 'px ' + tile['offset'][1] + 'px'
      }

      return data
    },
    getTileMapClass: function () {
      let data = {}
      let tile = this.trigger.tile

      if (!tile) {
        return data
      }

      if (tile['map']) {
        data[tile['map']] = true
      }

      return data
    },
  }
})