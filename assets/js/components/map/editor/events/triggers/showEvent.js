Vue.component('eventTriggerShowEvent', {
  props: ['trigger', 'config'],
  data: function () {
    return {
      'selectCell': {},
    }
  },
  template: [
      '<div class="box" v-if="isActive">',
        '<h5>Show Event:</h5> ',
        '<div class="field-row">',
          '<label>Map here triggering Action Layer:</label> ',
          '<select v-model="trigger.map">',
            '<option value="" selected="selected">---</option>',
            '<option v-for="map in config.db.mapList" :value="map.name">{{ map.name }}</option>',
          '</select>',
        '</div>',

        '<div class="field-row">',
          '<label>Select Event Cell:</label> ',
          '<select @change="setCellPosition" v-model="selectCell">',
            '<option value="" selected="selected">---</option>',
            '<option v-for="(cell, idx) in getEventCells()" :value="cell">{{ idx }} - {{ getCellNames(cell) }},  {{ cell.position[1] }}, {{ cell.position[0] }}</option>',
          '</select>',
        '</div>',

        '<div class="field-row">',
          '<label>Set Position of Event Cell:</label> ',
          'Row: <input type="number" v-model="trigger.position[1]" />',
          'Col: <input type="number" v-model="trigger.position[0]" />',
        '</div>',

        '<div class="field-row">',
          '<label>Action Layer id to show:</label> ',
          '<select v-model="trigger.event_id">',
            '<option value="" selected="selected">---</option>',
            '<option v-for="(map, idx) in getTileEvents()" :value="idx">{{ idx }} - {{ map.name }}, {{ map.type }}, is hidden: {{ map.hidden }}</option>',
          '</select>',
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
    }
  },
  computed: {
  	isActive: function () {
       return this.trigger.type_trigger == 'show_event'
    },
  }
})