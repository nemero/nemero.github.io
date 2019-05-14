Vue.component('eventTriggerReplaceTile', {
  props: ['trigger', 'config'],
  template: [
      '<div class="box" v-if="isActive">',
        '<h5>Edit Replace Tile</h5>',
        '<span class="close" @click="removeEvent">close</span>',

        '<div class="field-row">',
          '<label>Map:</label> ',
          '<select v-model="trigger.map">',
            '<option value="" selected="selected">---</option>',
            '<option v-for="map in config.db.mapList" :value="map.name">{{ map.name }}</option>',
          '</select>',
        '</div>',

        '<div class="field-row">',
          '<label>Y/X Replacing Tile:</label> ',
          'Row: <input type="number" v-model="trigger.position[1]" />',
          'Col: <input type="number" v-model="trigger.position[0]" />',
          '<input type="button" @click="selectOnMap" value="select on map"/>',
        '</div>',

        '<div class="field-row">',
          '<label>Replacing Layer Id:</label> ',
          '<input type="number" v-model="trigger.layer_id" />',
        '</div>',

        '<div class="field-row flex">',
          '<label>Replace to Tile if condition success: (click to change on active tile)</label> ',
          '<span @click="useActiveTile" class="active-brush-tile" :style="getTileStyle" :class="getTileMapClass"></span>',
        '</div>',
        
        '<div class="info">{{ trigger }}</div>',
      '</div>'
      ].join(''),
  methods: {
    useActiveTile: function () {
      Vue.set(this.trigger, 'tile', config.activeTile)
    },
    selectOnMap: function () {
      Vue.set(config, "activeConditionTrigger", this.trigger)
      config.activeModeMap = "selectTile"
    },
    removeEvent: function () {
      // remove item
      Vue.delete(config.activeLayerEvent.triggers, this.trigger.event_id)
    }
  },
  computed: {
    getTileStyle: function () {
      let data = {}
      let tile = this.trigger.tile
      if (!tile) {
        return data
      }

      data['width'] = config.db.tileSize[0] + 'px'
      data['height'] = config.db.tileSize[1] + 'px'

      if (tile['texture']) {
        data['background'] = 'url(' + tile['texture'] + ')'
      }
      if (tile['offset']) {
        data['background-position'] = '-' + tile['offset'][0]*config.db.tileSize[0] + 'px -' + tile['offset'][1]*config.db.tileSize[1] + 'px'
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
    isActive: function () {
       return this.trigger.type_trigger == 'replace_tile'
    },
  }
})