var stop_tiles = {
		"tile-map4": [],
		"tile-map5": [
			"tile-map5-48_0", "tile-map5-48_-16", "tile-map5-48_-32", "tile-map5-48_-112",
			"tile-map5-48_-128", "tile-map5-48_-144", "tile-map5-64_0", "tile-map5-64_-16",
			"tile-map5-64_-32", "tile-map5-64_-112", "tile-map5-64_-128", "tile-map5-64_-144",
			"tile-map5-80_-32", "tile-map5-96_0", "tile-map5-160_0"
		]
	}

// move directions from tile
var directions_tiles = {
	"tile-map5": {
		// "tile-map5-48_0", "tile-map5-48_-16", "tile-map5-48_-32", "tile-map5-48_-112", 
		// "tile-map5-48_-128", "tile-map5-64_0", "tile-map5-64_-16",
		// "tile-map5-64_-32", "tile-map5-64_-112", "tile-map5-64_-128", "tile-map5-64_-144",
		// "tile-map5-80_-32", "tile-map5-80_0", "tile-map5-80_-176", "tile-map5-80_-192",
		// "tile-map5-80_-208", "tile-map5-96_0", "tile-map5-144_-176", "tile-map5-144_-192",
		// "tile-map5-144_-208", "tile-map5-160_0", "tile-map5-96_-64", "tile-map5-96_-96",

		"tile-map5-16_-144": {
			up: true,
			down: true
		},
		"tile-map5-16_0": {
			//left: false, // we cant move on this tile to left
			right: true,
			up: true,
			down: true
		},
		"tile-map5-96_-64": {
			up: true,
			down: true,
			right: true
		},
		"tile-map5-96_-96": {
			up: true,
			down: true,
			left: true
		},
		"tile-map50_0": {
			down: true,
			right: true,
		},
		"tile-map50_-16": {
			down: true,
			right: true,
			left: true,
		},
		"tile-map50_-32": {
			left: true,
			down: true,
		},
		"tile-map5-32_-16": {
			up: true,
			right: true,
			left: true
		},
		"tile-map5-32_0": {
			right: true,
			up: true
		},
		"tile-map5-32_-32": {
			up: true,
			left: true
		}
	},
}