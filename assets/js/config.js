var config = {
	step: 0,

	level: {
		experience: 10,
		up: {
			health: 4,
		}
	},

	character: {
		id: "player0",
		name: "kokoko",
		level: 1, // calculating from experience 1 = 100 exp.
		experience: 10,
		health: 37,
		max_health: 37,
		base_health: 37,
		stamina: 0,
		agility: 0,
		strength: 0,
		defence: 10,
		base_defence: 10,
		faction: 'aliance',
		avatar: 'assets/hero.png',
		hpScroll: [],
		dies: 0,

		position: [0, 0],

		activeEquipment: {
			head: null,
			neck: null,
			shoulders: null,
			cloak: null,
			chest: "whinte cloth",
			hands: null,
			legs: "grey cloth",
			boots: "grey cloth",
			ring1: null,
			ring2: null,
			weapon: "fists0"
		},
		activeEquipmentStats: {
			stamina: 0,
			agility: 0,
			strength: 0,
			defence: 0
		},

		abilities: [
			"attack", "range_shot", "regrown", "nekro_aoe", "stamina0", "strength0"
		],

		bag: [
			"knife0", "cane1", "head0", "chest0", "sword0"
		],

		activeTarget: null,
		cooldown: {},
		
		buffs: {},
		debuffs: {},
		activeBuffStats: {
			stamina: 0,
			agility: 0,
			strength: 0,
			defence: 0
		},

		keyBindings: {
			"attack": {
				id: "attack",
				key: 49
			},
			"range_shot": {
				id: "range_shot",
				key: 50
			},
			"regrown": {
				id: "regrown",
				key: 51
			},
			"nekro_aoe": {
				id: "nekro_aoe",
				key: 52
			},
			"stamina0": {
				id: "stamina0",
				key: 53
			},
			"strength0": {
				id: "strength0",
				key: 54
			},
		},
	},

	combatLog: [
		"Start Logging..."
	],

	qualities: {
		poor: "Poor",
		common: "White",
		uncommon: "Green",
		rare: "Blue",
		epic: "Purple",
		legendary: "Orange",
		artifact: "Light Gold"
	},

	weapon_classes: {
		knife: "Knife",
		sword_one: "Sword one-handed",
		sword_two: "Sword two-handed",
		bow: "Bow",
		staff: "Staff",
		hammer_one: "Hammer one-handed",
		hammer_two: "Hammer two-handed",
		shield: "Shield"
	},

	factions: {
		wolf: "Wolf",
		undead: "Undead",
		zomby: "Zomby",
		human: "Human",
		elf: "Elf",
		dwarf: "Dwarf"
	},

	activeEnemies: [],

	db: {
		items: db_items,
		enemies: db_enemies,
		loot: db_loot,
		abilities: db_abilities,

		map: {
			tiles: db_map_tiles,
			viewport: [15, 10],
			stop_tiles: {
				"tile-map4": [],
				"tile-map5": [
					"tile-map5-48_0", "tile-map5-48_-16", "tile-map5-48_-32", "tile-map5-48_-112", 
					"tile-map5-48_-128", "tile-map5-48_-144", "tile-map5-64_0", "tile-map5-64_-16",
					"tile-map5-64_-32", "tile-map5-64_-112", "tile-map5-64_-128", "tile-map5-64_-144",
					"tile-map5-80_-32", "tile-map5-80_0", "tile-map5-80_-176", "tile-map5-80_-192",
					"tile-map5-80_-208", "tile-map5-96_0", "tile-map5-144_-176", "tile-map5-144_-192",
					"tile-map5-144_-208", "tile-map5-160_0", "tile-map5-96_-64", "tile-map5-96_-96"
				],
			},
			activeMap: "zone1",

			sevew1: {
				name: "Instance test",
				height: 15,
				width: 15,
				default_tile: {
					map_class: "tile-map5",
					position: [0, -128],
				},
				map: db_map_sevew1,
				layerEvents: {
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
				},
			},

			zone1: {
				id: "zone1",
				name: "Instance test",
				height: 15,
				width: 15,
				default_tile: {
					map_class: "tile-map3",
					position: [0, 0],
				},
				map: db_map_zone1,
				layerEvents: {
					2: {
						1: {
							"enemies_test2": {
								id: "6",
								name: "Battle zone boss",
								type: "enemies",
								enemies: ["boss1", "zomby", "bear0"]
							},
							"sevew_tower": {
								id: "8",
								name: "Tower",
								type: "cave",
								position: [5, 7],
								map: "sevew1",
								icon: "assets/town_in.jpg"
							}
						},
						6: {
							"enemies_test2": {
								id: "6",
								name: "Battle zone boss",
								type: "enemies",
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
								enemies: ["fly", "fly", "fly", "fly", "fly", "fly", "wolf1"]
							}
						},
						4: {
							"enemies_test2": {
								id: "6",
								name: "Battle zone boss",
								type: "enemies",
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
								enemies: ["fly", "fly", "fly", "fly"]
							}
						},

						9: { // col
							"titan_zone": {
								id: "6",
								name: "Battle zone boss",
								type: "enemies",
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
				},
			}
		}
	}
}

var logger = function($msg) {
	config.combatLog.push($msg)
}