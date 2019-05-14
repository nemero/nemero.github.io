var db_map_event_templates = {
	"player": {
		id: "player",
		name: "Player",
		player_id: null,
		icon: "icon-player0",
		tile_icon: "icon-player0",
	},
	"enemies": {
		id: "enemies",
		name: "Enemies",
		icon: "icon-battle0",
		tile_icon: "icon-battle0",

		cooldown: 20,
		enemies: [],
		hidden: false,
	},
	"teleport": {
		id: "teleport",
		name: "Subway/Cave",
		icon: "icon-teleport0",
		position: [0, 0],
		map: "sewer1",
		//tile_icon: "assets/player.png",

		// conditions: [
		//     {
		//       "type_condition": "exist_tile",
		//       "position": [
		//         5,
		//         0
		//       ],
		//       "layer_id": "2",
		//       "map": "sewer1",
		//       "tile": {
		//         "id": "tile-map5-64_-96",
		//         "offset": [
		//           -96,
		//           -64
		//         ],
		//         "size": [
		//           16,
		//           16
		//         ],
		//         "position": [
		//           0,
		//           0
		//         ],
		//         "map": "tile-map5"
		//       }
		//     }
	 //    ]
	},
	"unlock": {
		id: "unlock",
		name: "Subway/Cave Lock",	
		icon: "icon-basement-door0",
		//tile_icon: "assets/player.png",

		type_unlock: null, // item or use (just click event for triggering)
		item: null,

		triggers: [ // success (unlock) trigger action
			{
				type_trigger: "replace_tile",

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
				type_trigger: "show_event",

				map: "sewer1", // map here show layer
				position: [1, 3], // position in map that will showing
				event_id: "sub_town_opened", // id layer that need to show
			},
			{
				type_trigger: "hide_event",

				map: "sewer1", // map here show layer
				position: [2, 2], // position in map that will showing
				event_id: "cave_lock_2_2_1", // id layer that need to show
			},
		],

		conditions: [],
	},
	"loot_box": {
		id: "loot_box",
		name: "Chest open",	
		icon: "icon-chest-open0",
		tile_icon: "icon-chest-locked0",

		items: [],
	},
}