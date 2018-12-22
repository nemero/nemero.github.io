var config = {
	step: 0,
	holdKeys: [], // shift, ctrl, alt

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

		position: [5, 6],

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
			"attack", "range_shot", "regrown", "nekro_aoe", "stamina0", "strength0", "escape0"
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
	activeUI: "world", // battle, battle-finish, game-over, menu, prefix active-ui-

	db: {
		items: db_items,
		enemies: db_enemies,
		loot: db_loot,
		abilities: db_abilities,
		tileMaps: db_tile_maps,

		map: {
			//tiles: db_map_draw_tiles,
			viewport: [15, 10],
			stop_tiles: stop_tiles,
			directions_tiles: directions_tiles,
			z_tiles: z_tiles,
			activeMap: "cave1",
			tileSize: [48, 48],

			cave1: {
				name: "Start Pos 1",
				height: 15,
				width: 15,
				default_tile: {
					map_class: "tile-map5",
					position: [11, 1],
					size: [48, 48]
				},
				map: db_map_cave1,
				layerEvents: db_map_cave1_actions,
				defaultBattleMap: "battle2",
			},
			sewer1: {
				name: "Instance test",
				height: 15,
				width: 15,
				default_tile: {
					map_class: "tile-map5",
					position: [0, 8],
					size: [48, 48]
				},
				map: db_map_sewer1,
				layerEvents: db_map_sewer1_actions,
				defaultBattleMap: "battle1",
			},
			world1: {
				name: "World 1",
				height: 15,
				width: 15,
				default_tile: {
					map_class: "tile-map3",
					position: [0, 0],
					size: [48, 48]
				},
				map: db_map_world1,
				layerEvents: db_map_world1_actions,
				defaultBattleMap: "battle3",
			},

			battle1: {
				name: "Battle Town",
				height: 15,
				width: 15,
				default_tile: {
					map_class: "tile-map5",
					position: [0, 8],
					size: [48, 48]
				},
				map: db_map_battle1,
				layerEvents: {}
			},
			battle2: {
				name: "Battle Cave",
				height: 15,
				width: 15,
				default_tile: {
					map_class: "tile-map5",
					position: [11, 1],
					size: [48, 48]
				},
				map: db_map_battle2,
				layerEvents: {}
			},
			battle3: {
				name: "Battle World",
				height: 15,
				width: 15,
				default_tile: {
					map_class: "tile-map3",
					position: [0, 0],
					size: [48, 48]
				},
				map: db_map_battle3,
				layerEvents: {}
			},
		}
	}
}

var logger = function($msg) {
	config.combatLog.push($msg)
}