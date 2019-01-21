var db_map_cave1_battle = {
  "zoneDefault": {
    // enemies
    "max": 6,
    "min": 1,
    "percent": 30, // chance random battle
    "enemies": [
      {
        id: "fly",
        percent: 30,
      },
      {
        id: "wolf",
        percent: 10,
        max: 2
      }
    ]
  },
  "zone": {
    6: { // row
      5: { // col
        // proc enemies
        "max": 6,
        "min": 1,
        "enemies": [
          {
            id: "fly",
            percent: 30,
          },
          {
            id: "wolf",
            percent: 10,
            max: 2
          }
        ]
      },
      7: { // col
        // proc enemies
        "max": 6,
        "min": 1,
        "percent": 50, // chance random battle
        "enemies": [
          {
            id: "fly",
            percent: 30,
          },
          {
            id: "bear",
            percent: 30,
            max: 2
          },
          {
            id: "wolf",
            percent: 30,
            max: 3
          }
        ]
      }
    }
  },
}