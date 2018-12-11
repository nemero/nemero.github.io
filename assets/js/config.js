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
			head: "head0",
			neck: null,
			shoulders: null,
			cloak: null,
			chest: "chest0",
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
			"head0", "chest0",
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
			stop_tiles: stop_tiles,
			directions_tiles: directions_tiles,
			activeMap: "zone1",

			sewer1_b1: {
				name: "Instance test",
				height: 15,
				width: 15,
				default_tile: {
					map_class: "tile-map5",
					position: [0, -128],
				},
				map: db_map_sewer1_b1,
				layerEvents: {
					1: {
						7: {
							"sub_town_opened": {
								id: "8",
								name: "Sub Tower",
								type: "cave",
								position: [1, 3],
								map: "sewer1",
								icon: "assets/town_in.jpg",
							}
						}
					},
					2: {
						3: {
							"enemies_test2": {
								id: "6",
								name: "Battle zone boss",
								type: "enemies",
								cooldown: 40, // after kill all enemies it will return after 20 steps
								enemies: ["zomby", "zomby"]
							},
							"box0": {
								id: "10",
								name: "Box Items",
								type: "chest_open",
								items: ["sword4", "cane0"],
								icon: "assets/town_out.jpg",
							},
						}
					},
				},
			},

			sewer1: {
				name: "Instance test",
				height: 15,
				width: 15,
				default_tile: {
					map_class: "tile-map5",
					position: [0, -128],
				},
				map: db_map_sewer1,
				layerEvents: {
					3: {
						1: {
							"sub_town": {
								id: "9",
								name: "Sub Tower",
								type: "cave_lock",
								type_unlock: "item",
								item: "key_old_tower0",
								icon: "assets/town_out.jpg",

								trigger: {
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
								hidden: true,
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
				},
			}
		}
	}
}

var logger = function($msg) {
	config.combatLog.push($msg)
}