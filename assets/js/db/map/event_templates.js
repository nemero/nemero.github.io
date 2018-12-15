var db_map_event_templates = {
	"player": {
		id: 7,
		type: "player",
		name: "Player",
		player_id: null,
		icon: "assets/player.png"
	},
	"enemies": {
		id: 6,
		type: "enemies",
		name: "Enemies",
		icon: "assets/battle.png",
		cooldown: 20,
		enemies: [],
		hidden: false,
	},
	"cave": {
		id: 8,
		type: "cave",
		name: "Subway/Cave",
		icon: "assets/cave.jpg",
		position: [0, 0],
		map: null,
	},
	"cave_lock": {
		id: 9,
		type: "cave_lock",
		name: "Subway/Cave Lock",	
		icon: "assets/basement_door.jpg",

		type_unlock: null,
		item: null,

		triggers: [ // success (unlock) trigger action
			{
				type: "replace_tile",

				map: "sewer1",
				position: [1, 3], // position in map that will showing
				layer_id: 2, // layer which will updating after call trigger
				tile: { 
					"id": "tile-map5-80_-224", // should generating automatically by offset and size
					"offset": [ -224, -80 ], 
					"size": [ 16, 16 ], 
					"map": "tile-map5" 
				},
			},
			{
				type: "show_event_tile",

				map: "sewer1", // map here show layer
				position: [1, 3], // position in map that will showing
				event_id: "sub_town_opened", // id layer that need to show
			},
			{
				type: "hide_event_tile",

				map: "sewer1", // map here show layer
				position: [8, 0], // position in map that will showing
				event_id: "sub_town_opened", // id layer that need to show
			},
		]
	},
	"chest_open": {
		id: 10,
		type: "chest_open",
		name: "Chest open",	
		icon: "assets/chest-open.png",

		items: [],
	},
}