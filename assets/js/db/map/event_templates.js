var db_map_event_templates = {
	"player": {
		id: null,
		type: "player",
		name: "Player",
		player_id: null,
		icon: "assets/player.png"
	},
	"enemies": {
		id: null,
		type: "enemies",
		name: "Enemies",
		icon: "assets/battle.png",
		cooldown: 20,
		enemies: [],
		hidden: false,
	},
	"cave": {
		id: null,
		type: "cave",
		name: "Subway/Cave",
		icon: "assets/cave.jpg",
		position: [0, 0],
		map: null,
	},
	"cave_lock": {
		id: null,
		type: "cave_lock",
		name: "Subway/Cave Lock",	
		icon: "assets/basement_door.jpg",

		type_unlock: null,
		item: null,

		trigger: { // success (unlock) trigger action
			map: "sewer1", // map here show layer
			position: [1, 3], // position in map that will showing
			tile_id: "sub_town_opened", // id layer that need to show

			layer_id: 2, // layer which will updating after call trigger
			tile: { 
				"id": "tile-map5-80_-224", 
				"offset": [ -224, -80 ], 
				"size": [ 16, 16 ], 
				"map": "tile-map5" 
			},
		}
	},
	"chest_open": {
		id: null,
		type: "chest_open",
		name: "Chest open",	
		icon: "assets/chest-open.png",

		items: [],
	},
}