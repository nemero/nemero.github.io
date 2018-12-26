var db_abilities = {
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
		id: "potatos",
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
	escape0: {
		id: "escape0",
		name: "Forrest run Forest run!",
		cooldown: 1,
		chance: 75, // percents
		type: "escape",
		icon: "assets/escape.png"
	},
}