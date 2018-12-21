Vue.component('eventConditionExistTile', {
  props: ['condition', 'config'],
  template: [
      '<div class="box" v-if="isActive">',
        '<h5>Exist Tile:</h5> ',

        '<div class="field-row">',
          '<label>Map:</label> ',
          '<select v-model="condition.map">',
            '<option value="" selected="selected">---</option>',
            '<option v-for="map in config.db.mapList" :value="map.name">{{ map.name }}</option>',
          '</select>',
        '</div>',

        '<div class="field-row">',
          '<label>Replacing Layer Id:</label> ',
          '<input type="number" v-model="condition.layer_id" />',
        '</div>',

        '<div class="field-row">',
          '<label>Y/X Replacing Tile:</label> ',
          'Row: <input type="number" v-model="condition.position[1]" />',
          'Col: <input type="number" v-model="condition.position[0]" />',

          '<input type="button" @click="selectOnMap" value="select on map"/>',
        '</div>',

        '<div class="field-row">',
          '<label>Condition Tile Is Equal: </label> ',
          '<span @click="useActiveTile" class="active-brush-tile" :style="getTileStyle" :class="getTileMapClass"></span>',
        '</div>',

        '<div class="info">{{ condition }}</div>',
      '</div>'
      ].join(''),
  methods: {
    selectOnMap: function () {
      Vue.set(config, "activeConditionTrigger", this.condition)
      config.activeModeMap = "selectTile"
    },
    useActiveTile: function () {
      Vue.set(this.condition, 'tile', config.activeTile)
    },
  },
  computed: {
    getTileStyle: function () {
      let data = {}
      if (!this.condition.map || !this.condition.layer_id || !this.condition.position) {
        return data
      }

      //let tile = config.db.mapList[this.condition.map].map[this.condition.position[1]][this.condition.position[0]][this.condition.layer_id]
      let tile = this.condition.tile
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
      if (!this.condition.map || !this.condition.layer_id || !this.condition.position) {
        return data
      }

      let tile = config.db.mapList[this.condition.map].map[this.condition.position[1]][this.condition.position[0]][this.condition.layer_id]
      if (!tile) {
        return data
      }

      if (tile['map']) {
        data[tile['map']] = true
      }

      //Vue.set(this.condition, 'tile', tile)

      return data
    },
  	isActive: function () {
       return this.condition.type_condition == 'exist_tile'
    },
  }
})