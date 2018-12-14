var db_map_sewer1_actions = {
	3: {
		1: {
			"sub_town": {
				id: "9", // map tile id
				name: "Sub Tower", // just name
				type: "cave_lock", // type of logic cell
				type_unlock: "item",
				item: "key_old_tower0",
				icon: "assets/basement_door.jpg", // action event icon

				trigger: { // success (unlock) trigger action
					map: "sewer1", // map here show layer
					position: [1, 3], // position in map that will showing
					tile_id: "sub_town_opened", // id layer that need to show
					layer_id: 2, 
					tile: { 
						"id": "tile-map5-80_-224", 
						"offset": [ -224, -80 ], 
						"size": [ 16, 16 ], 
						"position": [ 0, 0 ], 
						"map": "tile-map5" 
					},
				}
			},
			"sub_town_opened": {
				id: "8",
				name: "Sub Tower",
				type: "cave",
				position: [5, 2],
				map: "sewer1_b1",
				icon: "assets/town_in.jpg",
				hidden: true, // optionally
			}
		},
		8: {
			"enemies_test2": {
				id: "6",
				name: "Battle zone boss",
				type: "enemies",
				cooldown: 20,
				enemies: ["fly", "fly"],
				//hidden: false
			},
		}
	},
	7: {
		5: {
			"cave_toonel": {
				id: "8",
				name: "Tower",
				type: "cave",
				position: [1, 2],
				map: "zone1",
				icon: "assets/town_out.jpg"
			}
		}
	}
}