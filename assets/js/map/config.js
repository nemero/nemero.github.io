var config = {
	width: 10,
	height: 10,

	activeTile: null,
	activeTileMap: null,
	hoveredTiles: {},
	activeLayer: "",
	layers: 9,
	// 256x336 auto tiling by 16px
	tilesMap: [
		{
			id: 'tileset_1',
			class: 'tile-map1',
			width: 256,
			height: 336,
			tileSize: [16, 16]
		},
		{
			id: 'mountains_0',
			class: 'tile-map2',
			width: 196,
			height: 160,
			tileSize: [16, 16]
		},
		{
			id: 'water_1',
			class: 'tile-map3',
			width: 480,
			height: 32,
			tileSize: [16, 16],
			animation: true,
			frame_time: 1000 // miliseconds
		},
	    {
	      id: 'cave_1',
	      class: 'tile-map4',
	      width: 256,
	      height: 336,
	      tileSize: [16, 16],
	    },
	    {
	      id: 'sewer_1',
	      class: 'tile-map5',
	      width: 256,
	      height: 336,
	      tileSize: [16, 16],
	    },
	],
	tiles: [],
	map_list: [db_map_zone1, db_map_sevew1],
	activeMapId: null,
  	mapOffset: [0, 0],
	map: {}
}