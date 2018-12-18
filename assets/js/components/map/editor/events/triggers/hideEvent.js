Vue.component('eventTriggerHideEvent', {
  props: ['trigger', 'config'],
  data: function () {
    return {
      'selectCell': {},
    }
  },
  template: [
      '<div class="box" v-if="isActive">',
        '<h5>Hide Event:</h5> ',
        '<span class="close" @click="removeEvent">close</span>',

        '<div class="field-row">',
          '<label>Map here triggering Action Layer:</label> ',
          '<select v-model="trigger.map">',
            '<option value="" selected="selected">---</option>',
            '<option v-for="map in config.db.mapList" :value="map.name">{{ map.name }}</option>',
          '</select>',
        '</div>',

        '<div class="field-row">',
          '<label>Set Position of Event Cell:</label> ',
          'Row: <input type="number" v-model="trigger.position[1]" />',
          'Col: <input type="number" v-model="trigger.position[0]" />',
          '<input type="button" @click="selectOnMap" value="select on map"/>',
        '</div>',

        '<div class="field-row">',
          '<label>Selected Event: </label> ',
          '<view-map-tile-event :event="getEvent" v-if="getEvent"></view-map-tile-event>',
        '</div>',

        '<div class="info">{{ trigger }}</div>',
      '</div>'
      ].join(''),
  methods: {
    getTileEvents: function () {
      let map = config.db.mapList[this.trigger.map]
      if (map && map.layerEvents && map.layerEvents[this.trigger.position[1]] && map.layerEvents[this.trigger.position[1]][this.trigger.position[0]]) {
        return map.layerEvents[this.trigger.position[1]][this.trigger.position[0]]
      }
    },
    selectOnMap: function () {
      Vue.set(config.activeLayerEvent, "trigger_active", this.trigger)
      config.activeModeMap = "selectEvent"
    },
    getEventCells: function () {
      if (!config.db.mapList[this.trigger.map]) {
        return
      }

      let events = config.db.mapList[this.trigger.map].layerEvents
      let cells = []
      for (row_id in events) {
        let row = events[row_id]
        for (col_id in row) {
          let col = row[col_id]
          let label = ''
          for (label_idx in col) {
            label += col[label_idx].id + ', '
          }
          cells.push({
            name: label,
            position: [col_id, row_id]
          })

          //console.log(col)
        }

      }

      //console.log(cells)
      return cells
    },
    getCellNames: function (cell) {
      return cell.name
    },
    setCellPosition: function (value) {
      if (!this.selectCell.position) {
        return 
      }

      this.trigger.position[1] = this.selectCell.position[1]
      this.trigger.position[0] = this.selectCell.position[0]
    },
    removeEvent: function () {
      // remove item
      Vue.delete(config.activeLayerEvent.triggers, this.trigger.event_id)
    }
  },
  computed: {
    isActive: function () {
       return this.trigger.type_trigger == 'hide_event'
    },
    getEvent: function () {
      if (this.trigger.event_id) {
        let map = config.db.mapList[this.trigger.map]
        let event = map.layerEvents[this.trigger.position[1]][this.trigger.position[0]][this.trigger.event_id]

        return event
      }

      return
    }
  }
})