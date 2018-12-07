var config = {
	width: 10,
	height: 10,

	activeTile: null,
	activeTileMap: null,
	hoveredTiles: {},
	activeLayer: "",
	layers: 9,
	// 256x336 auto tiling by 16px
	tilesMap: [
		{
			id: 'tileset_1',
			class: 'tile-map1',
			width: 256,
			height: 336,
			tileSize: [16, 16]
		},
		{
			id: 'mountains_0',
			class: 'tile-map2',
			width: 196,
			height: 160,
			tileSize: [16, 16]
		},
		{
			id: 'water_1',
			class: 'tile-map3',
			width: 480,
			height: 32,
			tileSize: [16, 16],
			animation: true,
			frame_time: 1000 // miliseconds
		},
	],
	tiles: [
	],
  mapOffset: [0, 0],
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
}
}