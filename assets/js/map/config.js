var config = {
	width: 10,
	height: 10,

	activeTile: null,
	activeTileMap: null,
	hoveredTiles: {},
	activeLayer: "",
	layers: 9,
	// 256x336 auto tiling by 16px
	tilesMap: db_tile_maps,
	tiles: [],
	map_list: [db_map_zone1, db_map_sewer1, db_map_sewer1_b1],
	activeMapId: null,
  	mapOffset: [0, 0],
	map: {}
}