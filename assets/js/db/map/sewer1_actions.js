var db_map_sewer1_actions = {
  "2": {
    "2": {
      "cave_lock_2_2_1": {
        "id": 9,
        "type": "cave_lock",
        "name": "Subway/Cave Lock",
        "icon": "assets/basement_door.jpg",
        "type_unlock": "use",
        "item": null,
        "triggers": [
          {
            "type": "replace_tile",
            "position": [
              "2",
              "1"
            ],
            "tile": {
              "id": "tile-map5-64_-64",
              "offset": [
                -64,
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
            },
            "map": "sewer1",
            "layer_id": "2"
          },
          {
            "type": "replace_tile",
            "position": [
              "8",
              0
            ],
            "tile": {
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
            },
            "map": "sewer1",
            "layer_id": "1"
          }
        ]
      }
    }
  },
  "3": {
    "1": {
      "sub_town": {
        "id": "9",
        "name": "Sub Tower",
        "type": "cave_lock",
        "type_unlock": "item",
        "item": "key_old_tower0",
        "icon": "assets/basement_door.jpg",
        "triggers": [
          {
            "type": "show_event_tile",
            "position": [
              "1",
              "3"
            ],
            "map": "sewer1",
            "event_id": "sub_town_opened"
          },
          {
            "type": "replace_tile",
            "position": [
              "1",
              "3"
            ],
            "layer_id": "2",
            "map": "sewer1",
            "tile": {
              "id": "tile-map5-96_-224",
              "offset": [
                -224,
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
        ]
      },
      "sub_town_opened": {
        "id": "8",
        "name": "Sub Tower",
        "type": "cave",
        "position": [
          5,
          2
        ],
        "map": "sewer1_b1",
        "icon": "assets/town_in.jpg",
        "hidden": true
      }
    },
    "8": {
      "enemies_test2": {
        "id": "6",
        "name": "Battle zone boss",
        "type": "enemies",
        "cooldown": 20,
        "enemies": [
          "fly",
          "fly"
        ]
      }
    }
  },
  "7": {
    "5": {
      "cave_toonel": {
        "id": "8",
        "name": "Tower",
        "type": "cave",
        "position": [
          1,
          2
        ],
        "map": "zone1",
        "icon": "assets/town_out.jpg"
      }
    }
  }
}