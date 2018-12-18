var config = {
	width: 10,
	height: 10,
	layers: 9,

	activeTab: 'events', // 'tiles',
	activeTile: null,
	activeTileMap: null,
	activeLayer: "",
	activeModeMap: "edit", // selectCell, selectTile, selectEvent
	mapSelect: { // config for observing map selecting with external components
		position: [],
		layer_id: null,
		map_id: null,
		event_id: null
	},
	
	tiles: [],
	activeMapId: null,
  	mapOffset: [0, 0],
	map: {},
	
	layerEvents: {},
	activeLayerEvent: {},

	selectedEnemy: null,
	selectedItem: null,

	db: {
		// 256x336 auto tiling by 16px
		tileMaps: db_tile_maps,
		eventTemplates: db_map_event_templates,
		enemies: db_enemies,
		items: db_items,
		eventTriggers: ["hide_event", "show_event", "replace_tile"],
		mapList: {
			"zone1": {
				"name": "zone1",
				"map": db_map_zone1,
				"layerEvents": db_map_zone1_actions,
			},
			"sewer1": {
				"name": "sewer1",
				"map": db_map_sewer1,
				"layerEvents": db_map_sewer1_actions,
			},
			"sewer1_b1": {
				"name": "sewer1_b1",
				"map": db_map_sewer1_b1,
				"layerEvents": db_map_sewer1_b1_actions,
			}
		},
	},
}