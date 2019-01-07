var config = {
	performance: [],
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
		health: 20,
		max_health: 20,
		base_health: 20,
		stamina: 0,
		agility: 0,
		strength: 0,
		defence: 5,
		base_defence: 5,
		faction: 'aliance',
		avatar: 'assets/hero.png',
		hpScroll: [],
		dies: 0,
		money: 100,
		world_state: [],

		position: [0, 0], // will replacing afgter init component

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

		abilities: [
			"attack", "range_shot", "regrown", "nekro_aoe", "stamina0", "strength0", "lose_stamina0", "escape0"
		],

		bag: [
			"head0", "chest_test0", "chest0", "monomate"
		],

		activeTarget: null,
		cooldown: {},
		
		buffs: {},
		debuffs: {},

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
			"lose_stamina0": {
				id: "lose_stamina0",
				key: 55
			},
			"escape0": {
				id: "escape0",
				key: 48
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

	activeEnemies: [],
	activeUI: "world", // battle, battle-finish, game-over, menu, prefix active-ui-

	db: {
		items: db_items,
		enemies: db_enemies,
		loot: db_loot,
		abilities: db_abilities,
		tileMaps: db_tile_maps,
		tileEvents: db_tile_events,
		factions: db_factions,

		map: {
			//tiles: db_map_draw_tiles,
			viewport: [15, 10],
			stop_tiles: config_tiles.stop,
			directions_tiles: config_tiles.directions,
			z_tiles: config_tiles.z,
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
			},
			city1: {
				name: "City 1",
				height: 15,
				width: 15,
				default_tile: {
					map_class: "tile-map6",
					position: [6, 40],
					size: [48, 48]
				},
				map: db_map_city1,
				layerEvents: db_map_city1_actions,
			},
			indoor1: {
				name: "Indoor 1",
				height: 15,
				width: 15,
				default_tile: {
					map_class: "tile-map6",
					position: [6, 40],
					size: [48, 48]
				},
				map: db_map_indoor1,
				layerEvents: db_map_indoor1_actions,
			},
		}
	}
}

var logger = function($msg) {
	config.combatLog.push($msg)
}