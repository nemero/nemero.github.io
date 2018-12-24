var stop_tiles = {
		"tile-map1": [
			"tile-map1_0_0", "tile-map1_0_1", "tile-map1_0_2", "tile-map1_1_0", "tile-map1_1_2", "tile-map1_2_0", "tile-map1_2_1",
			"tile-map1_2_2", "tile-map1_3_0", "tile-map1_3_1", "tile-map1_4_0", "tile-map1_4_1", "tile-map1_10_13", "tile-map1_10_15",
			"tile-map1_14_13", "tile-map1_14_15", "tile-map1_9_0", "tile-map1_9_1", "tile-map1_8_0", "tile-map1_8_1"
		],
		"tile-map4": [
			"tile-map4_0_0", "tile-map4_0_1", "tile-map4_0_2",
			"tile-map4_8_6", "tile-map4_8_7",
			"tile-map4_9_6", "tile-map4_9_7",
			"tile-map4_9_2", "tile-map4_8_2", "tile-map4_7_2",
			"tile-map4_5_3", "tile-map4_5_5",
			"tile-map4_2_12", "tile-map4_2_13", "tile-map4_2_14", "tile-map4_2_15",
			"tile-map4_5_6", "tile-map4_5_7", "tile-map4_5_8",
			"tile-map4_6_6", "tile-map4_6_8", "tile-map4_7_6", "tile-map4_7_7", "tile-map4_7_8",
		],
		"tile-map5": [
			"tile-map5_3_0", "tile-map5_3_1", "tile-map5_3_2", "tile-map5_3_7",
			"tile-map5_3_8", "tile-map5_3_9", "tile-map5_4_0", "tile-map5_4_1",
			"tile-map5_4_2", "tile-map5_4_7", "tile-map5_4_8", "tile-map5_4_9",
			"tile-map5_5_2", "tile-map5_5_11", "tile-map5_5_12", "tile-map5_5_13",
			"tile-map5_6_0", "tile-map5_10_0", "tile-map5_1_8", "tile-map5_1_7",
		]
	}

var z_tiles = {
	"tile-map5": [
		"tile-map5_0_16", "tile-map5_0_7", "tile-map5_0_8", "tile-map5_0_5", "tile-map5_2_5", "tile-map5_9_15",
	],
}

// move directions from tile
var directions_tiles = {
	"tile-map5": {
		"tile-map5_0_0": {
			right: true,
			down: true
		},
		"tile-map5_0_1": {
			//left: false, // we cant move on this tile to left
			right: true,
			left: true,
			down: true
		},
		"tile-map5_0_2": {
			down: true,
			left: true
		},
		"tile-map5_1_0": {
			up: true,
			down: true,
			right: true
		},
		"tile-map5_1_2": {
			down: true,
			up: true,
			left: true
		},
		"tile-map5_1_9": {
			down: true,
			up: true
		},
		"tile-map5_1_16": {
			left: true
		},
		"tile-map5_2_16": {
			right: true
		},
		"tile-map5_2_0": {
			right: true,
			up: true,
		},
		"tile-map5_2_1": {
			up: true,
			right: true,
			left: true
		},
		"tile-map5_2_2": {
			left: true,
			up: true
		},
		"tile-map5_2_7": {
			right: true,
			left: true
		},
		"tile-map5_6_4": {
			up: true,
			down: true,
			right: true
		},
		"tile-map5_6_6": {
			up: true,
			down: true,
			left: true
		}
	},
}