Vue.component('active-tile-map', {
  props: ['map', 'config'],
  template: ['<span>',
  			'{{ regenerateTiles() }}',
  			//'{{ map }}',
    '</span>'].join(""),
  methods: {
  	regenerateTiles: function () {
  		let map = this.map
  		if (!map) {
  			return
  		}
  		config.tiles = []

  		let cols = Math.trunc(map.width / map.tileSize[0])
  		let rows = Math.trunc(map.height / map.tileSize[1]) 
      console.log(cols, rows, map.width, map.height, map.tileSize)
  		let map_class = map.class
  		let tiles = [
				{
					id: null,
					size: [48, 48],
				},
			]
      console.log(cols, rows, map.tileSize)
  		for (let y = 0; y < rows; y++) {
  			let top_offset = - (map.tileSize[1] * y)
  			for (let x = 0; x < cols; x++) {
  				let left_offset = - (map.tileSize[0] * x)
  				//console.log(x, y)
  				let tile = {
						id: map_class + '_' + y + '_' + x,
						//texture: 'assets/tileset_1.png',
            offset: [x, y],
						//offset: [left_offset, top_offset],
						// size: [map.tileSize[0], map.tileSize[1]],
						// position: [0, 0],
						map: map_class
					}

					tiles.push(tile)
  			}
  		}

  		config.tiles = tiles

  	}
  }
})