var config = {
	width: 10,
	height: 10,

	activeTab: 'layer_events', // 'tiles',
	activeTile: null,
	activeTileMap: null,
	hoveredTiles: {},
	activeLayer: "",
	layers: 9,
	// 256x336 auto tiling by 16px
	tilesMap: db_tile_maps,
	layerEventsTypes: db_map_draw_tiles,
	eventTemplates: db_map_event_templates,
	tiles: [],
	map_list: [
		{
			"name": "zone1",
			"map": db_map_zone1,
			"layerEvents": db_map_zone1_actions,
		},
		{
			"name": "sewer1",
			"map": db_map_sewer1,
			"layerEvents": db_map_sewer1_actions,
		},
		{
			"name": "sewer1_b1",
			"map": db_map_sewer1_b1,
			"layerEvents": db_map_sewer1_b1_actions,
		}
	],
	activeMapId: null,
  	mapOffset: [0, 0],
	map: {},
	
	layerEvents: {},
	activeLayerEvent: {},
	db: {
		enemies: db_enemies,
		items: db_items,
		event_triggers: db_event_triggers,
	},
	selectedEnemy: null,
	selectedItem: null,


}