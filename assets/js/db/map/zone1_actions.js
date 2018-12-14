var db_map_zone1_actions = {
	2: {
		1: {
			"enemies_test2": {
				id: "6",
				name: "Battle zone boss",
				type: "enemies",
				cooldown: 40,
				enemies: ["boss1"]
			},
			"sewer_tower": {
				id: "8",
				name: "Tower",
				type: "cave",
				position: [5, 7],
				map: "sewer1",
				icon: "assets/town_in.jpg"
			}
		},
		6: {
			"enemies_test2": {
				id: "6",
				name: "Battle zone boss",
				type: "enemies",
				cooldown: 60,
				enemies: ["wolf1", "wolf1", "boss"]
			}
		}
	},

	3: {
		3: {
			"enemies_test2": {
				id: "6",
				name: "Battle zone boss",
				type: "enemies",
				cooldown: 20,
				enemies: ["fly", "fly", "fly", "fly", "fly", "fly", "wolf1"]
			}
		},
		4: {
			"enemies_test2": {
				id: "6",
				name: "Battle zone boss",
				type: "enemies",
				cooldown: 20,
				enemies: ["wolf1", "bear0", "bear1"]
			},
			"cave_toonel": {
				id: "8",
				name: "Subway",
				type: "cave",
				position: [10, 7],
				map: "zone1",
				icon: "assets/cave.jpg"
			}
		},
	},

	4: {
		4: {
			"player0": {
				id: "7",
				player_id: "player0",
                name: "Player Kokoko",
                type: "player",
			}
		},
	},

	5: { // row
		2: {
			"enemies_test": {
				id: "6",
				name: "Battle zone",
				type: "enemies",
				cooldown: 20,
				enemies: ["fly", "fly", "fly", "fly"]
			}
		},

		9: { // col
			"titan_zone": {
				id: "6",
				name: "Battle zone boss",
				type: "enemies",
				cooldown: 200,
				enemies: ["boss2"]
			}
		},
	},
	7: {
		10: {
			"cave_toonel": {
				id: "8",
				name: "Subway",
				type: "cave",
				position: [4, 3],
				map: "zone1",
				icon: "assets/cave.jpg"
			}
		}
	}
}