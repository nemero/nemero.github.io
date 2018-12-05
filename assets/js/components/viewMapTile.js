Vue.component('viewMapTile', {
  props: ['item', 'row_id', 'col_id', 'config', 'zone_id'],
  template: ['<span class="tile" :class="getClass"><span class="service">{{ getTile() }}</span>',
        '<span class="layer1" style="getStyle" class="getLayer1Class">',
          
        '</span>',
        '<span class="layer2">',
          '<tile-detail :config="config" v-for="tile in getTiles" :tile="tile"></tile-detail>',
        '</span>',
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
      let objects = config.db.map[this.zone_id]['layer2']
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
    // deprecated
    getLayer1Class: function () {
      let data = {}
      let tile = config.db.map.tiles[this.item.tile]

      data[tile.icon] = true
      return data
    },
    // deprecated
    getStyle: function () {
      let data = {}
      console.log(this.item)

      if (this.item.mod !== undefined) {
        let binary = this.item.mod
        var FLAG_A = 0x1; // 0001
        var FLAG_B = 0x2; // 0010
        var FLAG_C = 0x4; // 0100
        var FLAG_D = 0x8; // 1000

        let borders = ''
        if (binary & FLAG_A) {
          borders += '50% '
        } else {
          borders += '0 '
        }

        if (binary & FLAG_B) {
          borders += '50% '
        } else {
          borders += '0 '
        }

        if (binary & FLAG_C) {
          borders += '50% '
        } else {
          borders += '0 '
        }

        if (binary & FLAG_D) {
          borders += '50% '
        } else {
          borders += '0 '
        }

        data['border-radius'] = borders
      } 

      return data
    },
    getTiles: function () {
      let objects = config.db.map[this.zone_id]['layer2']
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