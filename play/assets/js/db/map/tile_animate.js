/**
	Global cyclic of sprite animations
*/
var db_tile_animate = {
	// water animation
	"tile-map3_0_0": { // entry sprite
        "id": "tile-map3_0_0", // entry sprite id
        "offset": [ // next sprite offset
          	[0, 0],[1, 0],[2, 0],[3, 0],[4, 0],[5, 0],[6, 0],[7, 0],[8, 0],[9, 0],[10, 0],
          	[11, 0],[12, 0],[13, 0],[14, 0],[15, 0],[16, 0],[17, 0],[18, 0],[19, 0],[20, 0],
          	[21, 0],[22, 0],[23, 0],[24, 0],[25, 0],[26, 0],[27, 0],[28, 0],[29, 0]
        ],
        "type": "random",
        "map": "tile-map3" // next sprite map id
    },

    "tile-map5_4_4": { // entry sprite
        "id": "tile-map5_4_4", // entry sprite id
        "offset": [ // next sprite offset
          	[4, 4],
          	[5, 4],
          	[6, 4]
        ],
        "type": "random",
        "map": "tile-map5" // next sprite map id
    },

    // "tile-map5_4_4": { // entry sprite
    //     "id": "tile-map5_4_4", // entry sprite id
    //     "offset": [ // next sprite offset
    //       	5,
    //       	4
    //     ],
    //     "type": "sequence",
    //     "map": "tile-map5" // next sprite map id
    // },
    // "tile-map5_4_5": { // entry sprite
    //     "id": "tile-map5_4_5", // entry sprite id
    //     "offset": [ // next sprite offset
    //       	6,
    //       	4
    //     ],
    //     "type": "sequence",
    //     "map": "tile-map5" // next sprite map id
    // },
    // "tile-map5_4_6": { // entry sprite
    //     "id": "tile-map5_4_6", // entry sprite id
    //     "offset": [ // next sprite offset
    //       	4,
    //       	4
    //     ],
    //     "type": "sequence",
    //     "map": "tile-map5" // next sprite map id
    // },

    // open door
    "tile-map5_15_12": { // entry sprite
        "id": "tile-map5_15_12", // entry sprite id
        "name": "Opening sewer door",
        "offset": [ // next sprite offset
          	[13, 15],
          	[14, 15],
          	[15, 15],
        ],
        "type": "once",
        "map": "tile-map5" // next sprite map id
    },
    // close door
    "tile-map5_15_15": { // entry sprite
        "id": "tile-map5_15_15", // entry sprite id
        "name": "Closing sewer door",
        "offset": [ // next sprite offset
          	[14, 15],
          	[13, 15],
          	[12, 15],
        ],
        "type": "once",
        "map": "tile-map5" // next sprite map id
    },
}