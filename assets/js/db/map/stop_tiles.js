var stop_tiles = {
		"tile-map4": [],
		"tile-map5": [
			"tile-map5_3_0", "tile-map5_3_1", "tile-map5_3_2", "tile-map5_3_7",
			"tile-map5_3_8", "tile-map5_3_9", "tile-map5_4_0", "tile-map5_4_1",
			"tile-map5_4_2", "tile-map5_4_7", "tile-map5_4_8", "tile-map5_4_9",
			"tile-map5_5_2", "tile-map5_5_11", "tile-map5_5_12", "tile-map5_5_13",
			"tile-map5_6_0", "tile-map5_10_0", "tile-map5_1_8",
		]
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
		}
	},
}