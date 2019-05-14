var config = {
	theme: "",
	width: 13,
	height: 12,
	layers: 15,

	activeTab: 'events', // 'tiles',
	activeTile: null,
	activeTileMap: null,
	eraseMode: false,
	activeLayer: "",
	activeModeMap: "edit", // selectCell, selectTile, selectEvent
	holdKeys: [], // shift, ctrl, alt
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
	battleZone: {},
	activeBattleCell: {},

	selectedEnemy: null,
	selectedItem: null,

	db: {
		eventTemplates: db_map_event_templates,
		enemies: db_enemies,
		abilities: db_abilities,
		items: db_items,
		item_types: db_item_types,
		item_qualities: db_item_qualities,
		item_classes: db_item_classes,
		factions: db_factions,
		loot: db_loot,
		config_tiles: config_tiles,
		eventTriggers: ["hide_event", "show_event", "replace_tile"],
		// 256x336 auto tiling by 16px
		tileMaps: db_tile_maps,
		tileSize: [48, 48],
		mapList: {
			"cave1": {
				"name": "cave1",
				"map": db_map_cave1,
				"layerEvents": db_map_cave1_actions,
				"battle": db_map_cave1_battle
			},
			"sewer1": {
				"name": "sewer1",
				"map": db_map_sewer1,
				"layerEvents": db_map_sewer1_actions,
				"battle": db_map_sewer1_battle
			},
			"world1": {
				"name": "world1",
				"map": db_map_world1,
				"layerEvents": db_map_world1_actions,
				"battle": db_map_world1_battle
			},
			"city1": {
				"name": "city1",
				"map": db_map_city1,
				"layerEvents": db_map_city1_actions,
				"battle": db_map_city1_battle
			},
			"indoor1": {
				"name": "indoor1",
				"map": db_map_indoor1,
				"layerEvents": db_map_indoor1_actions,
				"battle": db_map_indoor1_battle
			},
		},
	},
}