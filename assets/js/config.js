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
		items: {
			// poor
			fists0: {
				id: "fists0",
				name: "Fists",
				damage: 1,
				level: 0,
				distance: 20,
				speed: 10,
				type: "weapon",
				quality: "poor",
				class: "fists",
				price: 0,
				icon: "assets/fists.png"
			},
			bow0: {
				id: "bow0",
				name: "Stone Bow",
				damage: 2,
				level: 0,
				distance: 20,
				speed: 15,
				type: "weapon",
				quality: "poor",
				class: "bow",
				price: 3,
				icon: "assets/bow.png"
			},
			cane0: {
				id: "cane0",
				name: "Cane MEGA",
				damage: 1,
				level: 0,
				distance: 4,
				speed: 8,
				type: "weapon",
				quality: "poor",
				class: "sword_one",
				price: 1,
				icon: "assets/cane.png"
			},
			cane1: {
				id: "cane1",
				name: "Stick Broken",
				damage: 1,
				level: 0,
				distance: 4,
				speed: 8,
				type: "weapon",
				quality: "poor",
				class: "sword_one",
				price: 1,
				icon: "assets/cane.png"
			},
			garbage0: {
				id: "garbage0",
				name: "Garbage",
				damage: 0,
				level: 0,
				distance: 0,
				speed: 0,
				type: "garbage",
				quality: "poor",
				class: "garbage",
				price: 1,
				icon: "assets/scrap.png"
			},
			garbage1: {
				id: "garbage1",
				name: "Garbage mmm",
				damage: 0,
				level: 0,
				distance: 0,
				speed: 0,
				type: "garbage",
				quality: "poor",
				class: "garbage",
				price: 1,
				icon: "assets/scrap.png"
			},

			// common
			knife0: {
				id: "knife0",
				name: "Knife Frog",
				damage: 3,
				level: 2,
				distance: 1,
				speed: 9,
				type: "weapon",
				quality: "common",
				class: "knife",
				price: 10,
				icon: "assets/knife.png"
			},
			cane2: {
				id: "cane2",
				name: "Stick Chicken",
				damage: 2,
				level: 0,
				distance: 4,
				speed: 8,
				type: "weapon",
				quality: "poor",
				class: "sword_one",
				price: 4,
				icon: "assets/cane.png"
			},

			// uncommon
			head0: {
				id: "head0",
				name: "Head Oldman",
				level: 1,
				defence: 1,
				strength: 2,
				agility: 1,
				stamina: 1,
				type: "gear",
				quality: "uncommon",
				class: "head",
				price: 24,
				icon: "assets/helm.png"
			},
			chest0: {
				id: "chest0",
				name: "Chest Oldman",
				level: 1,
				defence: 0,
				strength: 0,
				agility: 0,
				stamina: 3,
				type: "gear",
				quality: "uncommon",
				class: "chest",
				price: 26,
				icon: "assets/chest.png"
			},
			sword0: {
				id: "sword0",
				name: "Sword Oldman",
				damage: 5,
				level: 1,
				distance: 4,
				speed: 6,
				stamina: 2,
				agility: 4,
				type: "weapon",
				quality: "uncommon",
				class: "sword_one",
				price: 24,
				icon: "assets/sword.png"
			},
			sword01: {
				id: "sword01",
				name: "Sword Black Wolf",
				damage: 6,
				level: 1,
				distance: 4,
				speed: 6,
				type: "weapon",
				quality: "uncommon",
				class: "sword_one",
				price: 26,
				icon: "assets/sword.png"
			},
			sword02: {
				id: "sword02",
				name: "Sword Night Wolf",
				damage: 5,
				level: 1,
				distance: 4,
				speed: 6,
				type: "weapon",
				quality: "uncommon",
				class: "sword_one",
				price: 28,
				icon: "assets/sword.png"
			},
			sword03: {
				id: "sword03",
				name: "Sword Angry Bear",
				damage: 7,
				level: 2,
				distance: 4,
				speed: 6,
				agility: 9,
				type: "weapon",
				quality: "uncommon",
				class: "sword_one",
				price: 28,
				icon: "assets/sword.png"
			},

			// rare
			sword1: {
				id: "sword1",
				name: "Sword Saphire Bring",
				damage: 8,
				level: 1,
				distance: 4,
				speed: 6,
				type: "weapon",
				quality: "rare",
				class: "sword_one",
				price: 37,
				icon: "assets/sword.png"
			},
			sword11: {
				id: "sword11",
				name: "Sword Angry Bear",
				damage: 10,
				level: 4,
				distance: 4,
				speed: 6,
				type: "weapon",
				quality: "uncommon",
				class: "sword_one",
				price: 28,
				icon: "assets/sword.png"
			},

			sword2: {
				id: "sword2",
				name: "Sword Owl Bring",
				damage: 12,
				level: 2,
				distance: 4,
				speed: 6,
				type: "weapon",
				quality: "rare",
				class: "sword_one",
				price: 37,
				icon: "assets/sword.png"
			},

			// epic
			sword3: {
				id: "sword3",
				name: "Sword Ruby Bring",
				damage: 20,
				level: 2,
				distance: 4,
				speed: 6,
				type: "weapon",
				quality: "epic",
				class: "sword_one",
				price: 56,
				icon: "assets/sword.png"
			},
			sword21: {
				id: "sword21",
				name: "Sword White Bear",
				damage: 12,
				level: 4,
				distance: 4,
				speed: 6,
				type: "weapon",
				quality: "uncommon",
				class: "sword_one",
				price: 28,
				icon: "assets/sword.png"
			},
			// legendary
			sword4: {
				id: "sword4",
				name: "Sword Legendary Hand",
				damage: 47,
				level: 7,
				distance: 4,
				speed: 6,
				type: "weapon",
				quality: "legendary",
				class: "sword_one",
				price: 281,
				icon: "assets/sword-legendary.png"
			},
			knife1: {
				id: "knife1",
				name: "Knife of Legendary Juice",
				damage: 33,
				level: 7,
				distance: 1,
				speed: 9,
				type: "weapon",
				quality: "legendary",
				class: "knife",
				price: 179,
				icon: "assets/knife.png"
			},
			knife2: {
				id: "knife2",
				name: "Knife of Legendary Beaar",
				damage: 370,
				level: 15,
				distance: 1,
				speed: 9,
				type: "weapon",
				quality: "legendary",
				class: "knife",
				price: 179,
				icon: "assets/knife.png"
			},
			bow1: {
				id: "bow1",
				name: "Bow of Legendary Juice",
				damage: 36,
				level: 7,
				distance: 20,
				speed: 15,
				type: "weapon",
				quality: "legendary",
				class: "bow",
				price: 266,
				icon: "assets/bow.png"
			},
			bow2: {
				id: "bow2",
				name: "Bow of Titan Koko",
				damage: 450,
				level: 20,
				distance: 20,
				speed: 15,
				type: "weapon",
				quality: "legendary",
				class: "bow",
				price: 266,
				icon: "assets/bow.png"
			},
			
		},

		// available enemies	
		enemies: {
			boss2: {
				id: "boss2",
				name: "Titan KOKO",
				experience: 13,
				health: 3190,
				damage: 150,
				speed: 10,
				defence: 20,
				agility: 0,
				faction: 'wolfare',
				debuffs: {},
				buffs: {},
				activeTarget: null,
				hpScroll: [],
			},
			boss1: {
				id: "boss1",
				name: "Big Juice",
				experience: 13,
				health: 325,
				damage: 15,
				speed: 10,
				defence: 20,
				agility: 0,
				faction: 'wolfare',
				debuffs: {},
				buffs: {},
				activeTarget: null,
				hpScroll: [],
			},

			boss: {
				id: "boss",
				name: "Big Bob",
				experience: 10,
				health: 190,
				damage: 10,
				speed: 10,
				defence: 20,
				agility: 0,
				faction: 'wolfare',
				debuffs: {},
				buffs: {},
				activeTarget: null,
				hpScroll: [],
			},

			bear0: {
				id: "bear0",
				name: "Angry Bear",
				experience: 7,
				level: 4,
				health: 125,
				damage: 3,
				speed: 10,
				defence: 20,
				agility: 7,
				faction: 'animal',
				avatar: 'assets/angry_bear.png',
				debuffs: {},
				buffs: {},
				activeTarget: null,
				hpScroll: [],
			},

			bear1: {
				id: "bear1",
				name: "White Bear",
				experience: 7,
				level: 4,
				health: 112,
				damage: 3,
				speed: 10,
				defence: 20,
				agility: 7,
				faction: 'animal',
				avatar: 'assets/bear.png',
				debuffs: {},
				buffs: {},
				activeTarget: null,
				hpScroll: [],
			},

			wolf: {
				id: "wolf",
				name: "Black wolf",
				experience: 5,
				level: 4,
				health: 85,
				damage: 3,
				speed: 10,
				defence: 10,
				agility: 7,
				faction: 'wolfare',
				avatar: 'assets/wolf.png',
				debuffs: {},
				buffs: {},
				activeTarget: null,
				hpScroll: [],
			},

			wolf1: {
				id: "wolf1",
				name: "Night wolf",
				experience: 4,
				level: 3,
				health: 62,
				damage: 3,
				speed: 10,
				defence: 10,
				agility: 7,
				faction: 'wolfare',
				avatar: 'assets/wolf.png',
				debuffs: {},
				buffs: {},
				activeTarget: null,
				hpScroll: [],
			},

			zomby: {
				id: "zomby",
				name: "Zomby",
				experience: 3,
				level: 6,
				health: 50,
				damage: 6,
				speed: 1,
				defence: 10,
				agility: 0,
				faction: "undead",
				debuffs: {},
				buffs: {},
				activeTarget: null,
				hpScroll: [],
			},

			fly: {
				id: "fly",
				name: "Quick Fly",
				experience: 2,
				level: 1,
				health: 20,
				damage: 1,
				speed: 8,
				defence: 5,
				agility: 0,
				faction: "fly",
				avatar: 'assets/fly.png',
				script: {
					80: ["attack", "attack", "range_shot"],
					20: ["range_shot"]
				},
				debuffs: {},
				buffs: {},
				activeTarget: null,
				hpScroll: [],
			}
		},

		loot: {
			fly: {
				id: "fly",
				items: {
					blow: 20,
					sword1: 8,
					sword0: 30,
					cane0: 12,
					cane1: 10,
					cane2: 12,
					garbage0: 8,
					sword3: 2,
					sword4: 1
				}
			},
			zomby: {
				id: "zomby",
				items: {
					blow: 20,
					sword1: 10,
					sword0: 20,
					cane0: 10,
					cane1: 8,
					cane2: 12,
					garbage0: 20,
					sword3: 6,
					sword4: 1
				}
			},
			wolf: {
				id: "wolf",
				items: {
					garbage0: 20,
					garbage1: 20,
					sword3: 15,	
					sword4: 2,
					sword01: 19
				}
			},
			wolf1: {
				id: "wolf1",
				items: {
					garbage0: 20,
					garbage1: 20,
					sword3: 15,	
					sword4: 2,
					sword02: 10,
				}
			},
			bear0: {
				id: "bear0",
				items: {
					garbage0: 20,
					garbage1: 20,
					sword11: 2,	
					sword4: 2,
					sword03: 15,
					knife2: 1,
				}
			},
			bear1: {
				id: "bear1",
				items: {
					garbage0: 20,
					garbage1: 20,
					sword03: 2,	
					sword4: 2,
					sword21: 21,
					knife2: 1
				}
			},
			boss: {
				id: "boss",
				items: {
					garbage0: 10,
					garbage1: 20,
					cane2: 30,
					sword3: 20,
					sword4: 2,
					sword0: 10
				}
			},
			boss1: {
				id: "boss1",
				items: {
					garbage0: 11,
					garbage1: 10,
					cane2: 12,
					sword3: 30,
					sword4: 1,
					knife1: 2,
					sword0: 15,
					bow1: 2
				}
			},
			boss2: {
				id: "boss2",
				items: {
					garbage0: 11,
					garbage1: 10,
					cane2: 12,
					sword21: 15,
					bow2: 30,
					knife2: 3,

				}
			}
		},

		abilities: {
			attack: {
				id: "attack",
				name: "POWER RANGERRRS!!!!",
				level: 1,
				cooldown: 1,
				heal: 0,
				damage: 0,
				type: "damage",
				icon: "assets/sword.png"
			},
			regrown: {
				id: "regrown",
				name: "Regrown",
				level: 1,
				cooldown: 3,
				heal: 10,
				time: 17,
				heal_tick: 7,
				damage: 0,
				type: "heal_buff",
				icon: "assets/regrown.png"
			},
			potatos: {
				id: "popatos",
				name: "POWER POTATOS!!!!",
				level: 10,
				cooldown: 10,
				heal: 0,
				damage: 200,
				type: "damage",
				icon: "assets/powerpotatos.png"
			},
			lightflesh: {
				id: "lightflesh",
				name: "Light Flash",
				level: 10,
				cooldown: 3,
				heal: 102,
				damage: 0,
				type: "heal",
				icon: "assets/regrown.png"
			},
			range_shot: {
				id: "range_shot",
				name: "dot kick!!!!",
				level: 1,
				cooldown: 0,
				heal: 0,
				damage: 0,
				type: "damage_dot",
				icon: "assets/knife-dot.png",
				time: 20,
				damage_tick: 2,
				strength_scaling: 20
			},
			nekro_aoe: {
				id: "nekro_aoe",
				name: "aoe kick!!!!",
				level: 1,
				cooldown: 4,
				heal: 0,
				damage: 1,
				type: "damage_aoe",
				icon: "assets/powerpotatos.png",
				damage_aoe: 2,
				damage_count: 4,
				strength_scaling: 20
			},
			stamina0: {
				id: "stamina0",
				name: "Power stamina buff",
				level: 2,
				cooldown: 1,
				stamina: 50,
				time: 120,
				type: "buff",
				icon: "assets/stamina.png"
			},
			strength0: {
				id: "strength0",
				name: "Power Strength buff",
				level: 2,
				cooldown: 1,
				strength: 10,
				time: 60,
				type: "buff",
				icon: "assets/strength.png"
			},
			lose_stamina0: {
				id: "lose_stamina0",
				name: "Lose stamina debuff",
				level: 1,
				cooldown: 1,
				stamina: -20,
				time: 7,
				type: "debuff",
				icon: "assets/knife.png"
			},
		},

		map: {
			tiles: {
				0: {
					id: "0",
					name: "Ground 0",
					icon: "ground0"
				},
				1: {
					id: "1",
					name: "River 0",
					icon: "river0"
				},
				2: {
					id: "2",
					name: "Forest 0",
					icon: "forest0"
				},
				3: {
					id: "3",
					name: "Rock 0",
					icon: "rock0"
				},
				4: {
					id: "4",
					name: "Water 0",
					icon: "water0"
				},

				5: {
					id: "5",
					name: "Bridge 0",
					icon: "bridge0"
				},

				6: {
					id: "6",
					name: "Enemy 0",
					icon: "battle0"
				},

				7: {
					id: "7",
					name: "Player 0",
					icon: "player0"
				},

				8: {
					id: "8",
					name: "doors",
					//icon: "player0"
				}
			},
			viewport: [15, 10],
			activeMap: "zone1",
			sevew1: {
				name: "Instance test",
				height: 15,
				width: 15,
				default_tile: {
					map_class: "tile-map5",
					position: [0, -128],
				},
				map:{
	"0":{
    "0": {
      "2": {
        "id": "tile-map5-96_-96",
        "offset": [
          -96,
          -96
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map5"
      }
    },
    "1": {
      "2": {
        "id": "tile-map5-48_0",
        "offset": [
          0,
          -48
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map5"
      }
    },
    "2": {
      "2": {
        "id": "tile-map5-48_0",
        "offset": [
          0,
          -48
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map5"
      }
    },
    "3": {
      "2": {
        "id": "tile-map5-48_0",
        "offset": [
          0,
          -48
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map5"
      }
    },
    "4": {
      "2": {
        "id": "tile-map5-48_0",
        "offset": [
          0,
          -48
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map5"
      }
    },
    "5": {
      "2": {
        "id": "tile-map5-48_0",
        "offset": [
          0,
          -48
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map5"
      }
    },
    "6": {
      "2": {
        "id": "tile-map5-48_0",
        "offset": [
          0,
          -48
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map5"
      }
    },
    "7": {
      "2": {
        "id": "tile-map5-48_0",
        "offset": [
          0,
          -48
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map5"
      },
      "3": {
        "id": "tile-map5-96_-96",
        "offset": [
          -96,
          -96
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map5"
      }
    },
    "8": {
      "2": {
        "id": "tile-map5-48_0",
        "offset": [
          0,
          -48
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map5"
      },
      "3": {
        "id": "tile-map5-16_-128",
        "offset": [
          -128,
          -16
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map5"
      }
    },
    "9": {
      "2": {
        "id": "tile-map5-96_-64",
        "offset": [
          -64,
          -96
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map5"
      }
    }
  },
  "1": {
    "0": {
      "2": {
        "id": "tile-map5-96_-96",
        "offset": [
          -96,
          -96
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map5"
      }
    },
    "1": {
      "2": {
        "id": "tile-map5-48_-16",
        "offset": [
          -16,
          -48
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map5"
      },
      "3": {
        "id": "tile-map5-64_-96",
        "offset": [
          -96,
          -64
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map5"
      }
    },
    "2": {
      "2": {
        "id": "tile-map5-48_-128",
        "offset": [
          -128,
          -48
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map5"
      }
    },
    "3": {
      "2": {
        "id": "tile-map5-80_-224",
        "offset": [
          -224,
          -80
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map5"
      }
    },
    "4": {
      "2": {
        "id": "tile-map5-48_-128",
        "offset": [
          -128,
          -48
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map5"
      }
    },
    "5": {
      "1": {},
      "2": {
        "id": "tile-map5-48_-128",
        "offset": [
          -128,
          -48
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map5"
      },
      "3": {
        "id": "tile-map5-64_-96",
        "offset": [
          -96,
          -64
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map5"
      }
    },
    "6": {
      "1": {},
      "2": {
        "id": "tile-map5-48_-128",
        "offset": [
          -128,
          -48
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map5"
      }
    },
    "7": {
      "2": {
        "id": "tile-map5-48_-128",
        "offset": [
          -128,
          -48
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map5"
      },
      "3": {
        "id": "tile-map5-96_-96",
        "offset": [
          -96,
          -96
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map5"
      }
    },
    "8": {
      "2": {
        "id": "tile-map5-48_-16",
        "offset": [
          -16,
          -48
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map5"
      },
      "3": {
        "id": "tile-map5-48_-48",
        "offset": [
          -48,
          -48
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map5"
      }
    },
    "9": {
      "2": {
        "id": "tile-map5-96_-64",
        "offset": [
          -64,
          -96
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map5"
      }
    }
  },
  "2": {
    "0": {
      "2": {
        "id": "tile-map5-96_-96",
        "offset": [
          -96,
          -96
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map5"
      }
    },
    "1": {
      "2": {
        "id": "tile-map5-16_-16",
        "offset": [
          -16,
          -16
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map5"
      }
    },
    "2": {
      "2": {
        "id": "tile-map50_-64",
        "offset": [
          -64,
          0
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map5"
      }
    },
    "3": {
      "2": {
        "id": "tile-map50_-64",
        "offset": [
          -64,
          0
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map5"
      }
    },
    "4": {
      "2": {
        "id": "tile-map50_-64",
        "offset": [
          -64,
          0
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map5"
      }
    },
    "5": {
      "2": {
        "id": "tile-map50_-64",
        "offset": [
          -64,
          0
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map5"
      }
    },
    "6": {
      "1": {},
      "2": {
        "id": "tile-map50_-64",
        "offset": [
          -64,
          0
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map5"
      }
    },
    "7": {
      "2": {
        "id": "tile-map5-16_-16",
        "offset": [
          -16,
          -16
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map5"
      },
      "3": {
        "id": "tile-map5-96_-96",
        "offset": [
          -96,
          -96
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map5"
      }
    },
    "8": {
      "2": {
        "id": "tile-map5-16_-16",
        "offset": [
          -16,
          -16
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map5"
      },
      "3": {
        "id": "tile-map5-48_-48",
        "offset": [
          -48,
          -48
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map5"
      }
    },
    "9": {
      "2": {
        "id": "tile-map5-96_-64",
        "offset": [
          -64,
          -96
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map5"
      }
    }
  },
  "3": {
    "0": {
      "2": {
        "id": "tile-map5-96_-96",
        "offset": [
          -96,
          -96
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map5"
      }
    },
    "1": {
      "2": {
        "id": "tile-map5-16_-16",
        "offset": [
          -16,
          -16
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map5"
      }
    },
    "2": {
      "2": {
        "id": "tile-map5-16_-16",
        "offset": [
          -16,
          -16
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map5"
      }
    },
    "3": {
      "2": {
        "id": "tile-map5-16_-16",
        "offset": [
          -16,
          -16
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map5"
      }
    },
    "4": {
      "2": {
        "id": "tile-map5-16_-16",
        "offset": [
          -16,
          -16
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map5"
      }
    },
    "5": {
      "1": {},
      "2": {
        "id": "tile-map5-16_-16",
        "offset": [
          -16,
          -16
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map5"
      }
    },
    "6": {
      "2": {
        "id": "tile-map5-16_-16",
        "offset": [
          -16,
          -16
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map5"
      }
    },
    "7": {
      "2": {
        "id": "tile-map5-16_-16",
        "offset": [
          -16,
          -16
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map5"
      },
      "3": {
        "id": "tile-map5-96_-96",
        "offset": [
          -96,
          -96
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map5"
      }
    },
    "8": {
      "2": {
        "id": "tile-map5-16_-16",
        "offset": [
          -16,
          -16
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map5"
      },
      "3": {
        "id": "tile-map5-48_-48",
        "offset": [
          -48,
          -48
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map5"
      }
    },
    "9": {
      "2": {
        "id": "tile-map5-96_-64",
        "offset": [
          -64,
          -96
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map5"
      }
    }
  },
  "4": {
    "0": {
      "2": {
        "id": "tile-map5-96_-96",
        "offset": [
          -96,
          -96
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map5"
      }
    },
    "1": {
      "2": {
        "id": "tile-map5-16_-16",
        "offset": [
          -16,
          -16
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map5"
      }
    },
    "2": {
      "2": {
        "id": "tile-map5-16_-16",
        "offset": [
          -16,
          -16
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map5"
      }
    },
    "3": {
      "2": {
        "id": "tile-map5-16_-16",
        "offset": [
          -16,
          -16
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map5"
      }
    },
    "4": {
      "2": {
        "id": "tile-map5-16_-16",
        "offset": [
          -16,
          -16
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map5"
      }
    },
    "5": {
      "1": {},
      "2": {
        "id": "tile-map5-16_-16",
        "offset": [
          -16,
          -16
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map5"
      }
    },
    "6": {
      "2": {
        "id": "tile-map5-16_-16",
        "offset": [
          -16,
          -16
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map5"
      }
    },
    "7": {
      "2": {
        "id": "tile-map5-16_-16",
        "offset": [
          -16,
          -16
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map5"
      }
    },
    "8": {
      "2": {
        "id": "tile-map5-16_-16",
        "offset": [
          -16,
          -16
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map5"
      }
    },
    "9": {
      "1": {},
      "2": {
        "id": "tile-map5-96_-64",
        "offset": [
          -64,
          -96
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map5"
      }
    }
  },
  "5": {
    "0": {
      "1": {},
      "2": {
        "id": "tile-map5-96_-96",
        "offset": [
          -96,
          -96
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map5"
      }
    },
    "1": {
      "2": {
        "id": "tile-map5-16_-16",
        "offset": [
          -16,
          -16
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map5"
      }
    },
    "2": {
      "2": {
        "id": "tile-map5-16_-16",
        "offset": [
          -16,
          -16
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map5"
      }
    },
    "3": {
      "2": {
        "id": "tile-map5-16_-16",
        "offset": [
          -16,
          -16
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map5"
      }
    },
    "4": {
      "1": {},
      "2": {
        "id": "tile-map5-16_-16",
        "offset": [
          -16,
          -16
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map5"
      }
    },
    "5": {
      "2": {
        "id": "tile-map5-16_-16",
        "offset": [
          -16,
          -16
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map5"
      }
    },
    "6": {
      "2": {
        "id": "tile-map5-16_-16",
        "offset": [
          -16,
          -16
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map5"
      }
    },
    "7": {
      "2": {
        "id": "tile-map5-16_-16",
        "offset": [
          -16,
          -16
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map5"
      }
    },
    "8": {
      "2": {
        "id": "tile-map5-16_-16",
        "offset": [
          -16,
          -16
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map5"
      }
    },
    "9": {
      "2": {
        "id": "tile-map5-96_-64",
        "offset": [
          -64,
          -96
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map5"
      }
    }
  },
  "6": {
    "0": {
      "2": {
        "id": "tile-map5-96_-96",
        "offset": [
          -96,
          -96
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map5"
      }
    },
    "1": {
      "2": {
        "id": "tile-map5-16_-16",
        "offset": [
          -16,
          -16
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map5"
      }
    },
    "2": {
      "2": {
        "id": "tile-map5-16_-16",
        "offset": [
          -16,
          -16
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map5"
      }
    },
    "3": {
      "2": {
        "id": "tile-map5-16_-16",
        "offset": [
          -16,
          -16
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map5"
      }
    },
    "4": {
      "2": {
        "id": "tile-map5-16_-16",
        "offset": [
          -16,
          -16
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map5"
      }
    },
    "5": {
      "2": {
        "id": "tile-map5-16_-16",
        "offset": [
          -16,
          -16
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map5"
      }
    },
    "6": {
      "2": {
        "id": "tile-map5-16_-16",
        "offset": [
          -16,
          -16
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map5"
      }
    },
    "7": {
      "2": {
        "id": "tile-map5-16_-16",
        "offset": [
          -16,
          -16
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map5"
      }
    },
    "8": {
      "2": {
        "id": "tile-map5-16_-16",
        "offset": [
          -16,
          -16
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map5"
      }
    },
    "9": {
      "2": {
        "id": "tile-map5-96_-64",
        "offset": [
          -64,
          -96
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map5"
      }
    }
  },
  "7": {
    "0": {
      "2": {
        "id": "tile-map5-96_-96",
        "offset": [
          -96,
          -96
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map5"
      }
    },
    "1": {
      "2": {
        "id": "tile-map5-16_-16",
        "offset": [
          -16,
          -16
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map5"
      }
    },
    "2": {
      "2": {
        "id": "tile-map5-16_-16",
        "offset": [
          -16,
          -16
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map5"
      }
    },
    "3": {
      "2": {
        "id": "tile-map5-16_-16",
        "offset": [
          -16,
          -16
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map5"
      }
    },
    "4": {
      "2": {
        "id": "tile-map5-16_-16",
        "offset": [
          -16,
          -16
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map5"
      }
    },
    "5": {
      "2": {
        "id": "tile-map5-16_-16",
        "offset": [
          -16,
          -16
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map5"
      },
      "3": {
        "id": "tile-map50_-128",
        "offset": [
          -128,
          0
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map5"
      }
    },
    "6": {
      "2": {
        "id": "tile-map5-16_-16",
        "offset": [
          -16,
          -16
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map5"
      }
    },
    "7": {
      "2": {
        "id": "tile-map5-16_-16",
        "offset": [
          -16,
          -16
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map5"
      }
    },
    "8": {
      "2": {
        "id": "tile-map5-16_-16",
        "offset": [
          -16,
          -16
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map5"
      }
    },
    "9": {
      "2": {
        "id": "tile-map5-96_-64",
        "offset": [
          -64,
          -96
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map5"
      }
    }
  },
  "8": {
    "0": {
      "2": {
        "id": "tile-map5-96_-96",
        "offset": [
          -96,
          -96
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map5"
      }
    },
    "1": {
      "1": {},
      "2": {
        "id": "tile-map5-48_-16",
        "offset": [
          -16,
          -48
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map5"
      }
    },
    "2": {
      "2": {
        "id": "tile-map5-48_-16",
        "offset": [
          -16,
          -48
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map5"
      }
    },
    "3": {
      "2": {
        "id": "tile-map5-48_-16",
        "offset": [
          -16,
          -48
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map5"
      }
    },
    "4": {
      "2": {
        "id": "tile-map5-48_-16",
        "offset": [
          -16,
          -48
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map5"
      }
    },
    "5": {
      "2": {
        "id": "tile-map5-16_-112",
        "offset": [
          -112,
          -16
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map5"
      }
    },
    "6": {
      "2": {
        "id": "tile-map5-48_-16",
        "offset": [
          -16,
          -48
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map5"
      }
    },
    "7": {
      "2": {
        "id": "tile-map5-48_-16",
        "offset": [
          -16,
          -48
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map5"
      }
    },
    "8": {
      "2": {
        "id": "tile-map5-48_-16",
        "offset": [
          -16,
          -48
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map5"
      }
    },
    "9": {
      "2": {
        "id": "tile-map5-96_-64",
        "offset": [
          -64,
          -96
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map5"
      }
    }
  }
},
layerEvents: {
					7: {
						5: {
							"cave_toonel": {
								id: "8",
								name: "Subway",
								type: "cave",
								position: [1, 2],
								map: "zone1",
								icon: "assets/cave.jpg"
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
				map:{
  "0": {
    "0": {
      "1": {
        "id": "tile-map30_0",
        "offset": [
          0,
          0
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map3"
      },
      "2": {
        "id": "tile-map10_0",
        "offset": [
          0,
          0
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map1"
      }
    },
    "1": {
      "1": {
        "id": "tile-map30_0",
        "offset": [
          0,
          0
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map3"
      },
      "2": {
        "id": "tile-map10_-16",
        "offset": [
          -16,
          0
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map1"
      },
      "3": {
        "id": "tile-map1-160_-48",
        "offset": [
          -48,
          -160
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map1"
      },
      "4": {
        "id": "tile-map1-288_-144",
        "offset": [
          -144,
          -288
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map1"
      }
    },
    "2": {
      "1": {
        "id": "tile-map30_0",
        "offset": [
          0,
          0
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map3"
      },
      "2": {
        "id": "tile-map10_-16",
        "offset": [
          -16,
          0
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map1"
      },
      "3": {
        "id": "tile-map1-160_-64",
        "offset": [
          -64,
          -160
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map1"
      }
    },
    "3": {
      "1": {
        "id": "tile-map30_0",
        "offset": [
          0,
          0
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map3"
      },
      "2": {
        "id": "tile-map10_-16",
        "offset": [
          -16,
          0
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map1"
      },
      "3": {
        "id": "tile-map1-160_-80",
        "offset": [
          -80,
          -160
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map1"
      }
    },
    "4": {
      "1": {
        "id": "tile-map30_0",
        "offset": [
          0,
          0
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map3"
      },
      "2": {
        "id": "tile-map10_-32",
        "offset": [
          -32,
          0
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map1"
      }
    },
    "5": {
      "1": {
        "id": "tile-map30_0",
        "offset": [
          0,
          0
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map3"
      }
    },
    "6": {
      "1": {
        "id": "tile-map30_0",
        "offset": [
          0,
          0
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map3"
      }
    },
    "7": {
      "1": {
        "id": "tile-map30_0",
        "offset": [
          0,
          0
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map3"
      }
    },
    "8": {
      "1": {
        "id": "tile-map30_0",
        "offset": [
          0,
          0
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map3"
      }
    },
    "9": {
      "1": {
        "id": "tile-map30_0",
        "offset": [
          0,
          0
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map3"
      }
    }
  },
  "1": {
    "0": {
      "1": {
        "id": "tile-map30_0",
        "offset": [
          0,
          0
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map3"
      },
      "2": {
        "id": "tile-map1-16_0",
        "offset": [
          0,
          -16
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map1"
      }
    },
    "1": {
      "1": {
        "id": "tile-map30_0",
        "offset": [
          0,
          0
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map3"
      },
      "2": {
        "id": "tile-map1-16_-16",
        "offset": [
          -16,
          -16
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map1"
      },
      "3": {
        "id": "tile-map1-192_-48",
        "offset": [
          -48,
          -192
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map1"
      },
      "4": {
        "id": "tile-map1-304_-144",
        "offset": [
          -144,
          -304
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map1"
      }
    },
    "2": {
      "1": {
        "id": "tile-map30_0",
        "offset": [
          0,
          0
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map3"
      },
      "2": {
        "id": "tile-map1-16_-16",
        "offset": [
          -16,
          -16
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map1"
      },
      "3": {
        "id": "tile-map1-224_-64",
        "offset": [
          -64,
          -224
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map1"
      }
    },
    "3": {
      "1": {
        "id": "tile-map30_0",
        "offset": [
          0,
          0
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map3"
      },
      "2": {
        "id": "tile-map1-16_-16",
        "offset": [
          -16,
          -16
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map1"
      },
      "3": {
        "id": "tile-map1-208_-80",
        "offset": [
          -80,
          -208
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map1"
      },
      "4": {
        "id": "tile-map1-240_-112",
        "offset": [
          -112,
          -240
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map1"
      }
    },
    "4": {
      "1": {
        "id": "tile-map30_0",
        "offset": [
          0,
          0
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map3"
      },
      "2": {
        "id": "tile-map1-48_-16",
        "offset": [
          -16,
          -48
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map1"
      },
      "3": {
        "id": "tile-map1-160_-64",
        "offset": [
          -64,
          -160
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map1"
      }
    },
    "5": {
      "1": {
        "id": "tile-map30_0",
        "offset": [
          0,
          0
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map3"
      },
      "2": {
        "id": "tile-map10_-16",
        "offset": [
          -16,
          0
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map1"
      },
      "3": {
        "id": "tile-map1-160_-64",
        "offset": [
          -64,
          -160
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map1"
      }
    },
    "6": {
      "1": {
        "id": "tile-map30_0",
        "offset": [
          0,
          0
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map3"
      },
      "2": {
        "id": "tile-map10_-16",
        "offset": [
          -16,
          0
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map1"
      },
      "3": {
        "id": "tile-map1-160_-80",
        "offset": [
          -80,
          -160
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map1"
      }
    },
    "7": {
      "1": {
        "id": "tile-map30_0",
        "offset": [
          0,
          0
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map3"
      },
      "2": {
        "id": "tile-map10_-32",
        "offset": [
          -32,
          0
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map1"
      }
    },
    "8": {
      "1": {
        "id": "tile-map30_0",
        "offset": [
          0,
          0
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map3"
      }
    },
    "9": {
      "1": {
        "id": "tile-map30_0",
        "offset": [
          0,
          0
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map3"
      }
    },
    "10": {
      "1": {
        "id": null,
        "size": [
          16,
          16
        ]
      }
    }
  },
  "2": {
    "0": {
      "1": {
        "id": "tile-map30_0",
        "offset": [
          0,
          0
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map3"
      },
      "2": {
        "id": "tile-map1-16_0",
        "offset": [
          0,
          -16
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map1"
      }
    },
    "1": {
      "1": {
        "id": "tile-map1-16_-16",
        "offset": [
          -16,
          -16
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map1"
      },
      "2": {
        "id": "tile-map1-288_-32",
        "offset": [
          -32,
          -288
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map1"
      },
      "3": {
        "id": "tile-map1-320_-144",
        "offset": [
          -144,
          -320
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map1"
      }
    },
    "2": {
      "1": {
        "id": "tile-map1-16_-16",
        "offset": [
          -16,
          -16
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map1"
      },
      "2": {
        "id": "tile-map1-192_-48",
        "offset": [
          -48,
          -192
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map1"
      },
      "3": {
        "id": "tile-map1-256_-96",
        "offset": [
          -96,
          -256
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map1"
      }
    },
    "3": {
      "1": {
        "id": "tile-map1-16_-16",
        "offset": [
          -16,
          -16
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map1"
      },
      "2": {
        "id": "tile-map1-192_-80",
        "offset": [
          -80,
          -192
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map1"
      },
      "3": {
        "id": "tile-map1-256_-112",
        "offset": [
          -112,
          -256
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map1"
      }
    },
    "4": {
      "1": {
        "id": "tile-map1-16_-16",
        "offset": [
          -16,
          -16
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map1"
      },
      "2": {
        "id": "tile-map1-192_-48",
        "offset": [
          -48,
          -192
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map1"
      },
      "3": {
        "id": "tile-map1-256_-128",
        "offset": [
          -128,
          -256
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map1"
      }
    },
    "5": {
      "1": {
        "id": "tile-map1-16_-16",
        "offset": [
          -16,
          -16
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map1"
      },
      "2": {
        "id": "tile-map1-224_-64",
        "offset": [
          -64,
          -224
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map1"
      }
    },
    "6": {
      "1": {
        "id": "tile-map1-16_-16",
        "offset": [
          -16,
          -16
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map1"
      },
      "2": {
        "id": "tile-map1-176_-80",
        "offset": [
          -80,
          -176
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map1"
      }
    },
    "7": {
      "1": {
        "id": "tile-map30_0",
        "offset": [
          0,
          0
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map3"
      },
      "2": {
        "id": "tile-map1-16_-32",
        "offset": [
          -32,
          -16
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map1"
      }
    },
    "8": {
      "1": {
        "id": "tile-map30_0",
        "offset": [
          0,
          0
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map3"
      },
      "2": {
        "id": "tile-map10_-48",
        "offset": [
          -48,
          0
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map1"
      }
    },
    "9": {
      "1": {
        "id": "tile-map30_0",
        "offset": [
          0,
          0
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map3"
      },
      "2": {
        "id": "tile-map10_-64",
        "offset": [
          -64,
          0
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map1"
      }
    },
    "10": {
      "1": {},
      "2": {
        "id": "tile-map10_-64",
        "offset": [
          -64,
          0
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map1"
      }
    },
    "11": {
      "1": {},
      "2": {
        "id": "tile-map10_-64",
        "offset": [
          -64,
          0
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map1"
      }
    },
    "12": {
      "1": {},
      "2": {
        "id": "tile-map10_-80",
        "offset": [
          -80,
          0
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map1"
      }
    }
  },
  "3": {
    "0": {
      "1": {
        "id": "tile-map30_0",
        "offset": [
          0,
          0
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map3"
      },
      "2": {
        "id": "tile-map1-16_0",
        "offset": [
          0,
          -16
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map1"
      }
    },
    "1": {
      "1": {
        "id": "tile-map1-16_-16",
        "offset": [
          -16,
          -16
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map1"
      },
      "2": {
        "id": "tile-map1-288_0",
        "offset": [
          0,
          -288
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map1"
      },
      "3": {
        "id": "null",
        "size": [
          16,
          16
        ]
      }
    },
    "2": {
      "1": {
        "id": "tile-map1-16_-16",
        "offset": [
          -16,
          -16
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map1"
      },
      "2": {
        "id": "tile-map1-272_-96",
        "offset": [
          -96,
          -272
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map1"
      },
      "3": {
        "id": "tile-map1-288_-16",
        "offset": [
          -16,
          -288
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map1"
      }
    },
    "3": {
      "1": {
        "id": "tile-map1-16_-16",
        "offset": [
          -16,
          -16
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map1"
      },
      "2": {
        "id": "tile-map1-272_-112",
        "offset": [
          -112,
          -272
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map1"
      }
    },
    "4": {
      "1": {
        "id": "tile-map1-16_-16",
        "offset": [
          -16,
          -16
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map1"
      },
      "2": {
        "id": "tile-map1-272_-128",
        "offset": [
          -128,
          -272
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map1"
      },
      "3": {
        "id": "tile-map1-240_-80",
        "offset": [
          -80,
          -240
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map1"
      }
    },
    "5": {
      "1": {
        "id": "tile-map1-16_-16",
        "offset": [
          -16,
          -16
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map1"
      },
      "2": {
        "id": "tile-map1-192_-48",
        "offset": [
          -48,
          -192
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map1"
      }
    },
    "6": {
      "1": {
        "id": "tile-map1-16_-16",
        "offset": [
          -16,
          -16
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map1"
      },
      "2": {
        "id": "tile-map1-192_-80",
        "offset": [
          -80,
          -192
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map1"
      }
    },
    "7": {
      "1": {
        "id": "tile-map30_0",
        "offset": [
          0,
          0
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map3"
      },
      "2": {
        "id": "tile-map1-16_-32",
        "offset": [
          -32,
          -16
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map1"
      }
    },
    "8": {
      "1": {
        "id": "tile-map30_0",
        "offset": [
          0,
          0
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map3"
      },
      "2": {
        "id": "tile-map1-16_-48",
        "offset": [
          -48,
          -16
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map1"
      }
    },
    "9": {
      "1": {
        "id": null,
        "size": [
          16,
          16
        ]
      },
      "2": {
        "id": "tile-map1-16_-160",
        "offset": [
          -160,
          -16
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map1"
      },
      "3": {
        "id": "tile-map1-320_-176",
        "offset": [
          -176,
          -320
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map1"
      }
    },
    "10": {
      "2": {
        "id": "tile-map1-16_-160",
        "offset": [
          -160,
          -16
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map1"
      }
    },
    "11": {
      "2": {
        "id": "tile-map1-16_-160",
        "offset": [
          -160,
          -16
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map1"
      }
    },
    "12": {
      "2": {
        "id": "tile-map1-16_-80",
        "offset": [
          -80,
          -16
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map1"
      }
    }
  },
  "4": {
    "0": {
      "1": {
        "id": "tile-map30_0",
        "offset": [
          0,
          0
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map3"
      },
      "2": {
        "id": "tile-map1-160_-208",
        "offset": [
          -208,
          -160
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map1"
      }
    },
    "1": {
      "1": {
        "id": "tile-map1-176_-224",
        "offset": [
          -224,
          -176
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map1"
      }
    },
    "2": {
      "1": {
        "id": "tile-map1-224_-224",
        "offset": [
          -224,
          -224
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map1"
      }
    },
    "3": {
      "1": {
        "id": "tile-map1-160_-224",
        "offset": [
          -224,
          -160
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map1"
      }
    },
    "4": {
      "1": {
        "id": "tile-map1-160_-224",
        "offset": [
          -224,
          -160
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map1"
      }
    },
    "5": {
      "1": {
        "id": "tile-map1-160_-224",
        "offset": [
          -224,
          -160
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map1"
      }
    },
    "6": {
      "1": {
        "id": "tile-map1-192_-224",
        "offset": [
          -224,
          -192
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map1"
      }
    },
    "7": {
      "1": {
        "id": "tile-map30_0",
        "offset": [
          0,
          0
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map3"
      },
      "2": {
        "id": "tile-map1-16_-32",
        "offset": [
          -32,
          -16
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map1"
      }
    },
    "8": {
      "1": {
        "id": "tile-map30_0",
        "offset": [
          0,
          0
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map3"
      },
      "2": {
        "id": "tile-map1-16_-48",
        "offset": [
          -48,
          -16
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map1"
      }
    },
    "9": {
      "1": {
        "id": null,
        "size": [
          16,
          16
        ]
      },
      "2": {
        "id": "tile-map1-16_-160",
        "offset": [
          -160,
          -16
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map1"
      }
    },
    "10": {
      "2": {
        "id": "tile-map1-16_-160",
        "offset": [
          -160,
          -16
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map1"
      }
    },
    "11": {
      "2": {
        "id": "tile-map1-16_-160",
        "offset": [
          -160,
          -16
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map1"
      }
    },
    "12": {
      "2": {
        "id": "tile-map1-16_-80",
        "offset": [
          -80,
          -16
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map1"
      }
    }
  },
  "5": {
    "0": {
      "1": {
        "id": "tile-map30_0",
        "offset": [
          0,
          0
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map3"
      },
      "2": {
        "id": "tile-map1-16_0",
        "offset": [
          0,
          -16
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map1"
      }
    },
    "1": {
      "1": {
        "id": "tile-map1-48_-32",
        "offset": [
          -32,
          -48
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map1"
      }
    },
    "2": {
      "1": {
        "id": "tile-map1-16_-16",
        "offset": [
          -16,
          -16
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map1"
      },
      "2": {
        "id": "null",
        "size": [
          16,
          16
        ]
      }
    },
    "3": {
      "1": {
        "id": "tile-map30_0",
        "offset": [
          0,
          0
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map3"
      },
      "2": {
        "id": "tile-map1-64_-16",
        "offset": [
          -16,
          -64
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map1"
      }
    },
    "4": {
      "1": {
        "id": "tile-map30_0",
        "offset": [
          0,
          0
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map3"
      },
      "2": {
        "id": "tile-map1-32_-16",
        "offset": [
          -16,
          -32
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map1"
      }
    },
    "5": {
      "1": {
        "id": "tile-map30_0",
        "offset": [
          0,
          0
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map3"
      },
      "2": {
        "id": "tile-map1-112_-16",
        "offset": [
          -16,
          -112
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map1"
      }
    },
    "6": {
      "1": {
        "id": "tile-map30_0",
        "offset": [
          0,
          0
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map3"
      },
      "2": {
        "id": "tile-map1-192_-192",
        "offset": [
          -192,
          -192
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map1"
      }
    },
    "7": {
      "1": {
        "id": "tile-map30_0",
        "offset": [
          0,
          0
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map3"
      },
      "2": {
        "id": "tile-map1-32_-32",
        "offset": [
          -32,
          -32
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map1"
      }
    },
    "8": {
      "1": {
        "id": "tile-map30_0",
        "offset": [
          0,
          0
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map3"
      },
      "2": {
        "id": "tile-map1-16_-48",
        "offset": [
          -48,
          -16
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map1"
      }
    },
    "9": {
      "1": {
        "id": null,
        "size": [
          16,
          16
        ]
      },
      "2": {
        "id": "tile-map1-16_-160",
        "offset": [
          -160,
          -16
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map1"
      },
      "3": {
        "id": "tile-map1-320_-160",
        "offset": [
          -160,
          -320
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map1"
      }
    },
    "10": {
      "1": {},
      "2": {
        "id": "tile-map1-16_-160",
        "offset": [
          -160,
          -16
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map1"
      }
    },
    "11": {
      "1": {},
      "2": {
        "id": "tile-map1-16_-160",
        "offset": [
          -160,
          -16
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map1"
      }
    },
    "12": {
      "2": {
        "id": "tile-map1-16_-80",
        "offset": [
          -80,
          -16
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map1"
      }
    }
  },
  "6": {
    "0": {
      "1": {
        "id": "tile-map30_0",
        "offset": [
          0,
          0
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map3"
      },
      "2": {
        "id": "tile-map1-16_0",
        "offset": [
          0,
          -16
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map1"
      }
    },
    "1": {
      "1": {
        "id": "tile-map1-48_-32",
        "offset": [
          -32,
          -48
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map1"
      }
    },
    "2": {
      "1": {
        "id": "tile-map1-16_-16",
        "offset": [
          -16,
          -16
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map1"
      },
      "2": {
        "id": "tile-map1-272_-80",
        "offset": [
          -80,
          -272
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map1"
      }
    },
    "3": {
      "1": {
        "id": "tile-map30_0",
        "offset": [
          0,
          0
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map3"
      },
      "2": {
        "id": "tile-map1-16_-32",
        "offset": [
          -32,
          -16
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map1"
      }
    },
    "4": {
      "1": {
        "id": "tile-map30_0",
        "offset": [
          0,
          0
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map3"
      }
    },
    "5": {
      "1": {
        "id": "tile-map30_0",
        "offset": [
          0,
          0
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map3"
      }
    },
    "6": {
      "1": {
        "id": "tile-map30_0",
        "offset": [
          0,
          0
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map3"
      }
    },
    "7": {
      "1": {
        "id": "tile-map30_0",
        "offset": [
          0,
          0
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map3"
      }
    },
    "8": {
      "1": {
        "id": "tile-map30_0",
        "offset": [
          0,
          0
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map3"
      },
      "2": {
        "id": "tile-map1-16_-48",
        "offset": [
          -48,
          -16
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map1"
      }
    },
    "9": {
      "1": {
        "id": null,
        "size": [
          16,
          16
        ]
      },
      "2": {
        "id": "tile-map1-16_-160",
        "offset": [
          -160,
          -16
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map1"
      },
      "3": {
        "id": "tile-map1-288_-160",
        "offset": [
          -160,
          -288
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map1"
      }
    },
    "10": {
      "2": {
        "id": "tile-map1-16_-160",
        "offset": [
          -160,
          -16
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map1"
      },
      "3": {
        "id": "tile-map1-288_-176",
        "offset": [
          -176,
          -288
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map1"
      }
    },
    "11": {
      "2": {
        "id": "tile-map1-16_-160",
        "offset": [
          -160,
          -16
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map1"
      },
      "3": {
        "id": "tile-map1-288_-192",
        "offset": [
          -192,
          -288
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map1"
      }
    },
    "12": {
      "2": {
        "id": "tile-map1-16_-80",
        "offset": [
          -80,
          -16
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map1"
      },
      "3": {
        "id": "tile-map1-288_-208",
        "offset": [
          -208,
          -288
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map1"
      }
    }
  },
  "7": {
    "0": {
      "1": {
        "id": "tile-map30_0",
        "offset": [
          0,
          0
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map3"
      },
      "2": {
        "id": "tile-map1-16_0",
        "offset": [
          0,
          -16
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map1"
      }
    },
    "1": {
      "1": {
        "id": "tile-map1-16_-16",
        "offset": [
          -16,
          -16
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map1"
      },
      "2": {
        "id": "tile-map1-304_-48",
        "offset": [
          -48,
          -304
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map1"
      }
    },
    "2": {
      "1": {
        "id": "tile-map1-16_-16",
        "offset": [
          -16,
          -16
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map1"
      },
      "2": {
        "id": "tile-map1-288_-16",
        "offset": [
          -16,
          -288
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map1"
      }
    },
    "3": {
      "1": {
        "id": "tile-map30_0",
        "offset": [
          0,
          0
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map3"
      },
      "2": {
        "id": "tile-map1-16_-32",
        "offset": [
          -32,
          -16
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map1"
      }
    },
    "4": {
      "1": {
        "id": "tile-map30_0",
        "offset": [
          0,
          0
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map3"
      }
    },
    "5": {
      "1": {
        "id": "tile-map30_0",
        "offset": [
          0,
          0
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map3"
      }
    },
    "6": {
      "1": {
        "id": "tile-map30_0",
        "offset": [
          0,
          0
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map3"
      }
    },
    "7": {
      "1": {
        "id": "tile-map30_0",
        "offset": [
          0,
          0
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map3"
      }
    },
    "8": {
      "1": {
        "id": "tile-map30_0",
        "offset": [
          0,
          0
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map3"
      },
      "2": {
        "id": "tile-map1-16_-48",
        "offset": [
          -48,
          -16
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map1"
      }
    },
    "9": {
      "1": {
        "id": null,
        "size": [
          16,
          16
        ]
      },
      "2": {
        "id": "tile-map1-16_-160",
        "offset": [
          -160,
          -16
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map1"
      },
      "3": {
        "id": "tile-map1-304_-160",
        "offset": [
          -160,
          -304
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map1"
      }
    },
    "10": {
      "2": {
        "id": "tile-map1-16_-160",
        "offset": [
          -160,
          -16
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map1"
      },
      "3": {
        "id": "tile-map1-304_-176",
        "offset": [
          -176,
          -304
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map1"
      },
      "4": {
        "id": "tile-map1-256_-80",
        "offset": [
          -80,
          -256
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map1"
      }
    },
    "11": {
      "1": {},
      "2": {
        "id": "tile-map1-16_-160",
        "offset": [
          -160,
          -16
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map1"
      },
      "3": {
        "id": "tile-map1-304_-192",
        "offset": [
          -192,
          -304
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map1"
      }
    },
    "12": {
      "2": {
        "id": "tile-map1-16_-80",
        "offset": [
          -80,
          -16
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map1"
      },
      "3": {
        "id": "tile-map1-304_-208",
        "offset": [
          -208,
          -304
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map1"
      }
    }
  },
  "8": {
    "0": {
      "1": {
        "id": "tile-map30_0",
        "offset": [
          0,
          0
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map3"
      },
      "2": {
        "id": "tile-map1-32_0",
        "offset": [
          0,
          -32
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map1"
      }
    },
    "1": {
      "1": {
        "id": "tile-map30_0",
        "offset": [
          0,
          0
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map3"
      },
      "2": {
        "id": "tile-map1-32_-16",
        "offset": [
          -16,
          -32
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map1"
      }
    },
    "2": {
      "1": {
        "id": "tile-map30_0",
        "offset": [
          0,
          0
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map3"
      },
      "2": {
        "id": "tile-map1-32_-16",
        "offset": [
          -16,
          -32
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map1"
      }
    },
    "3": {
      "1": {
        "id": "tile-map30_0",
        "offset": [
          0,
          0
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map3"
      },
      "2": {
        "id": "tile-map1-32_-32",
        "offset": [
          -32,
          -32
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map1"
      }
    },
    "4": {
      "1": {
        "id": "tile-map30_0",
        "offset": [
          0,
          0
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map3"
      }
    },
    "5": {
      "1": {
        "id": "tile-map30_0",
        "offset": [
          0,
          0
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map3"
      }
    },
    "6": {
      "1": {
        "id": "tile-map30_0",
        "offset": [
          0,
          0
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map3"
      }
    },
    "7": {
      "1": {
        "id": "tile-map30_0",
        "offset": [
          0,
          0
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map3"
      }
    },
    "8": {
      "1": {
        "id": "tile-map30_0",
        "offset": [
          0,
          0
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map3"
      },
      "2": {
        "id": "tile-map1-32_-48",
        "offset": [
          -48,
          -32
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map1"
      }
    },
    "9": {
      "1": {
        "id": "tile-map30_0",
        "offset": [
          0,
          0
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map3"
      },
      "2": {
        "id": "tile-map1-32_-64",
        "offset": [
          -64,
          -32
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map1"
      }
    },
    "10": {
      "2": {
        "id": "tile-map1-112_-64",
        "offset": [
          -64,
          -112
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map1"
      }
    },
    "11": {
      "2": {
        "id": "tile-map1-112_-64",
        "offset": [
          -64,
          -112
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map1"
      }
    },
    "12": {
      "2": {
        "id": "tile-map1-112_-80",
        "offset": [
          -80,
          -112
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map1"
      }
    }
  },
  "9": {
    "0": {
      "1": {
        "id": "tile-map30_0",
        "offset": [
          0,
          0
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map3"
      }
    },
    "1": {
      "1": {
        "id": "tile-map30_0",
        "offset": [
          0,
          0
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map3"
      }
    },
    "2": {
      "1": {
        "id": "tile-map30_0",
        "offset": [
          0,
          0
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map3"
      }
    },
    "3": {
      "1": {
        "id": "tile-map30_0",
        "offset": [
          0,
          0
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map3"
      }
    },
    "4": {
      "1": {
        "id": "tile-map30_0",
        "offset": [
          0,
          0
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map3"
      }
    },
    "5": {
      "1": {
        "id": "tile-map30_0",
        "offset": [
          0,
          0
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map3"
      }
    },
    "6": {
      "1": {
        "id": "tile-map30_0",
        "offset": [
          0,
          0
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map3"
      }
    },
    "7": {
      "1": {
        "id": "tile-map30_0",
        "offset": [
          0,
          0
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map3"
      }
    },
    "8": {
      "1": {
        "id": "tile-map30_0",
        "offset": [
          0,
          0
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map3"
      }
    },
    "9": {
      "1": {
        "id": "tile-map30_0",
        "offset": [
          0,
          0
        ],
        "size": [
          16,
          16
        ],
        "position": [
          0,
          0
        ],
        "map": "tile-map3"
      }
    }
  }
},
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
								icon: "assets/cave.jpg"
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