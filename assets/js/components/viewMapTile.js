Vue.component('viewMapTile', {
  props: ['item', 'row_id', 'col_id', 'config', 'zone_id'],
  template: ['<span class="tile" :class="getClass">{{ getTile() }}',
        '<span class="layer1">',
        '<tile-detail :config="config" v-for="tile in getTiles" :tile="tile"></tile-detail>',
        '</span>',
        '<span class="layer2"></span>',
    '</span>'].join(""),
  methods: {
    getTile: function() {
      let tile = config.db.map.tiles[this.item]
      return tile.id + ': x: ' + this.col_id + ' : y: ' + this.row_id
    }
  },
  computed: {
    getClass: function () {
      let data = {}
      let tile = config.db.map.tiles[this.item]
      let objects = config.db.map[this.zone_id]['layer1']
      //console.log(this.zone_id)

      if (objects[this.row_id] && objects[this.row_id][this.col_id]) {
        for (idx_layer_item in objects[this.row_id][this.col_id]) {
          let item = objects[this.row_id][this.col_id][idx_layer_item]
          let layer_tale = config.db.map.tiles[item.id]
          data[layer_tale.icon] = true
        }
      }

      data[tile.icon] = true
      return data
    },
    getTiles: function () {
      let objects = config.db.map[this.zone_id]['layer1']
      let layer_tales = []

      if (objects[this.row_id] && objects[this.row_id][this.col_id]) {
        for (idx_layer_item in objects[this.row_id][this.col_id]) {
          let item = objects[this.row_id][this.col_id][idx_layer_item]
          //layer_tales.push(config.db.map.tiles[item.id])
          layer_tales.push(item)
        }
      }

      return layer_tales
    }
  }
})