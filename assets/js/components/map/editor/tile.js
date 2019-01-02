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
  				'<span class="tile-picture" :style="getTileStyle" :class="getTileMapClass" :title="getTileDetails"></span>',
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
              '<input type="checkbox" v-model="up_direction" @change="setUpDirection"/>',
            '</div>',
            '<div class="field-row">',
              '<label>Down</label> ',
              '<input type="checkbox" v-model="down_direction" @change="setDownDirection"/>',
            '</div>',
            '<div class="field-row">',
              '<label>Left</label> ',
              '<input type="checkbox" v-model="left_direction" @change="setLeftDirection"/>',
            '</div>',
            '<div class="field-row">',
              '<label>Right</label> ',
              '<input type="checkbox" v-model="right_direction" @change="setRightDirection"/>',
            '</div>',
          '</div>',
    '</span>'].join(""),
  created: function () {
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
    let direction_tiles = config.db.config_tiles.directions[this.tile.map]
    if (direction_tiles && direction_tiles[this.tile.id]) {
      if (direction_tiles[this.tile.id].indexOf('up') >= 0) {
        this.up_direction = true
      } else {
        this.up_direction = false
      }
      if (direction_tiles[this.tile.id].indexOf('down') >= 0) {
        this.down_direction = true
      } else {
        this.down_direction = false
      }
      if (direction_tiles[this.tile.id].indexOf('left') >= 0) {
        this.left_direction = true
      } else {
        this.left_direction = false
      }
      if (direction_tiles[this.tile.id].indexOf('right') >= 0) {
        this.right_direction = true
      } else {
        this.right_direction = false
      }
    }
  },
  updated: function () {
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
    let direction_tiles = config.db.config_tiles.directions[this.tile.map]
    if (direction_tiles && direction_tiles[this.tile.id]) {
      if (direction_tiles[this.tile.id].indexOf('up') >= 0) {
        this.up_direction = true
      } else {
        this.up_direction = false
      }
      if (direction_tiles[this.tile.id].indexOf('down') >= 0) {
        this.down_direction = true
      } else {
        this.down_direction = false
      }
      if (direction_tiles[this.tile.id].indexOf('left') >= 0) {
        this.left_direction = true
      } else {
        this.left_direction = false
      }
      if (direction_tiles[this.tile.id].indexOf('right') >= 0) {
        this.right_direction = true
      } else {
        this.right_direction = false
      }
    }
  },
  methods: {
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
    setUpDirection: function () {
      let direction_tiles = config.db.config_tiles.directions[this.tile.map]
      if (!direction_tiles) {
        Vue.set(config.db.config_tiles.directions, this.tile.map, [])
      }

      if (!direction_tiles[this.tile.id]) {
        Vue.set(config.db.config_tiles.directions[this.tile.map], this.tile.id, []) 
      }

      if (this.up_direction) {
        // set as stop tile
        direction_tiles[this.tile.id].push('up')
      } else {
        // unset as stop tile
        if (direction_tiles[this.tile.id].indexOf('up') >= 0) {
          direction_tiles[this.tile.id].splice(direction_tiles[this.tile.id].indexOf('up'), 1)
        }
      }

      if (direction_tiles[this.tile.id].lenght < 0) {
        Vue.delete(direction_tiles[this.tile.id])
      }
    },
    setDownDirection: function () {
      let direction_tiles = config.db.config_tiles.directions[this.tile.map]
      if (!direction_tiles) {
        Vue.set(config.db.config_tiles.directions, this.tile.map, [])
      }

      if (!direction_tiles[this.tile.id]) {
        Vue.set(config.db.config_tiles.directions[this.tile.map], this.tile.id, []) 
      }

      if (this.down_direction) {
        // set as stop tile
        direction_tiles[this.tile.id].push('down')
      } else {
        // unset as stop tile
        if (direction_tiles[this.tile.id].indexOf('down') >= 0) {
          direction_tiles[this.tile.id].splice(direction_tiles[this.tile.id].indexOf('down'), 1)
        }
      }

      if (direction_tiles[this.tile.id].lenght < 0) {
        Vue.delete(direction_tiles[this.tile.id])
      }
    },
    setLeftDirection: function () {
      let direction_tiles = config.db.config_tiles.directions[this.tile.map]
      if (!direction_tiles) {
        Vue.set(config.db.config_tiles.directions, this.tile.map, [])
      }

      if (!direction_tiles[this.tile.id]) {
        Vue.set(config.db.config_tiles.directions[this.tile.map], this.tile.id, []) 
      }

      if (this.left_direction) {
        // set as stop tile
        direction_tiles[this.tile.id].push('left')
      } else {
        // unset as stop tile
        if (direction_tiles[this.tile.id].indexOf('left') >= 0) {
          direction_tiles[this.tile.id].splice(direction_tiles[this.tile.id].indexOf('left'), 1)
        }
      }

      if (direction_tiles[this.tile.id].lenght < 0) {
        Vue.delete(direction_tiles[this.tile.id])
      }
    },
    setRightDirection: function () {
      let direction_tiles = config.db.config_tiles.directions[this.tile.map]
      if (!direction_tiles) {
        Vue.set(config.db.config_tiles.directions, this.tile.map, [])
      }

      if (!direction_tiles[this.tile.id]) {
        Vue.set(config.db.config_tiles.directions[this.tile.map], this.tile.id, []) 
      }

      if (this.right_direction) {
        // set as stop tile
        direction_tiles[this.tile.id].push('right')
      } else {
        // unset as stop tile
        if (direction_tiles[this.tile.id].indexOf('right') >= 0) {
          direction_tiles[this.tile.id].splice(direction_tiles[this.tile.id].indexOf('right'), 1)
        }
      }

      if (direction_tiles[this.tile.id].lenght < 0) {
        Vue.delete(direction_tiles[this.tile.id])
      }
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