Vue.component('tile', {
  props: ['tile', 'config'],
  data: function () {
    return {
      stop_tile: "",
      up_direction: "",
      down_direction: "",
      left_direction: "",
      right_direction: "",
      z_tile: "",
    }
  },
  template: ['<span class="tile" :class="isSelected" @click="selectTile">',
  				'<span class="tile-picture" :style="getTileStyle" :class="getTileMapClass"></span>',
				  '<div class="tile-details">',
					 '<h4>{{ tile.id }}</h4>',
           '<div class="field-row">',
            '<label>Is Stop Tile</label> ',
            '<input type="checkbox" v-model="stop_tile" @change="setStopTile"/>',
           '</div>',

           '<div class="field-row">',
            '<label>Z tile</label> ',
            '<input type="checkbox" v-model="z_tile" @change="setZTile"/>',
           '</div>',

           '<h4>Accept directions</h4> ',
            '<div class="field-row">',
              '<label>Up</label> ',
              '<input type="checkbox" v-model="up_direction" @change="changeDirection"/>',
            '</div>',
            '<div class="field-row">',
              '<label>Down</label> ',
              '<input type="checkbox" v-model="down_direction" @change="changeDirection"/>',
            '</div>',
            '<div class="field-row">',
              '<label>Left</label> ',
              '<input type="checkbox" v-model="left_direction" @change="changeDirection"/>',
            '</div>',
            '<div class="field-row">',
              '<label>Right</label> ',
              '<input type="checkbox" v-model="right_direction" @change="changeDirection"/>',
            '</div>',
          '</div>',
    '</span>'].join(""),
  created: function () {
    this.initOptions()
  },
  updated: function () {
    this.initOptions()
  },
  methods: {
    initOptions: function () {
      // init options
      let stop_tiles = config.db.config_tiles.stop[this.tile.map]
      if (stop_tiles && stop_tiles.indexOf(this.tile.id) >= 0) {
        this.stop_tile = true
      } else {
        this.stop_tile = false
      }

      // z tile 
      let z_tiles = config.db.config_tiles.z[this.tile.map]
      if (z_tiles && z_tiles.indexOf(this.tile.id) >= 0) {
        this.z_tile = true
      } else {
        this.z_tile = false
      }

      // direction tile 
      let directions = config.db.config_tiles.directions[this.tile.map]
      if (directions && directions[this.tile.map] && directions[this.tile.map][this.tile.id]) {
        if (directions[this.tile.map][this.tile.id].indexOf('up') >= 0) {
          this.up_direction = true
        } else {
          this.up_direction = false
        }
        if (directions[this.tile.map][this.tile.id].indexOf('down') >= 0) {
          this.down_direction = true
        } else {
          this.down_direction = false
        }
        if (directions[this.tile.map][this.tile.id].indexOf('left') >= 0) {
          this.left_direction = true
        } else {
          this.left_direction = false
        }
        if (directions[this.tile.map][this.tile.id].indexOf('right') >= 0) {
          this.right_direction = true
        } else {
          this.right_direction = false
        }
      }
    },
  	selectTile: function () {
  		config.activeTile = this.tile
  	},
    setStopTile: function () {
      let stop_tiles = config.db.config_tiles.stop[this.tile.map]
      if (!stop_tiles) {
        Vue.set(config.db.config_tiles.stop, this.tile.map, [])
      }

      if (this.stop_tile) {
        // set as stop tile
        stop_tiles.push(this.tile.id)
      } else {
        // unset as stop tile
        if (stop_tiles.indexOf(this.tile.id) >= 0) {
          stop_tiles.splice(stop_tiles.indexOf(this.tile.id), 1)
        }
      }
    },
    updateTileDirections: function (directions) {
      let direction_tiles = config.db.config_tiles.directions

      // remove tile direction if not set
      if (directions.length == 0) {
        if (direction_tiles[this.tile.map] && direction_tiles[this.tile.map][this.tile.id]) {
          Vue.delete(direction_tiles[this.tile.map], this.tile.id)
        }

        return
      }

      // create map direction if not exist
      if (!direction_tiles[this.tile.map]) {
        Vue.set(direction_tiles, this.tile.map, {})
      }

      // set tile directions
      Vue.set(direction_tiles[this.tile.map], this.tile.id, directions) 
    },
    changeDirection: function () {
      let directions = []

      if (this.up_direction) {
        directions.push('up')
      }
      if (this.down_direction) {
        directions.push('down')
      }
      if (this.left_direction) {
        directions.push('left')
      }
      if (this.right_direction) {
        directions.push('right')
      }

      this.updateTileDirections(directions)
    },
    setZTile: function () {
      let z_tiles = config.db.config_tiles.z[this.tile.map]
      if (!z_tiles) {
        Vue.set(config.db.config_tiles.z, this.tile.map, [])
      }

      if (this.z_tile) {
        // set as stop tile
        z_tiles.push(this.tile.id)
      } else {
        // unset as stop tile
        if (z_tiles.indexOf(this.tile.id) >= 0) {
          z_tiles.splice(z_tiles.indexOf(this.tile.id), 1)
        }
      }
    }
  },
	computed: {
		getTileStyle: function () {
  		let data = {}
  		data['width'] = config.db.tileSize[0] + 'px'
  		data['height'] = config.db.tileSize[1] + 'px'

  		if (this.tile['offset']) {
  			data['background-position'] = '-' + this.tile['offset'][0]*config.db.tileSize[0] + 'px -' + this.tile['offset'][1]*config.db.tileSize[1] + 'px'
  		}

  		return data
  	},
  	getTileMapClass: function () {
  		let data = {}
  		if (this.tile['map']) {
  			data[this.tile['map']] = true
  		}

  		return data
  	},
  	isSelected: function () {
  		let data = {}
  		if (config.activeTile == this.tile) {
  			data['active'] = true
  		}

  		return data
  	},
		getTileDetails: function () {
				return this.tile.id
		}
	}
})