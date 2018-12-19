var db_map_sewer1_actions = {
  "6": {
    "1": {
      "undefined_6_1_1": {
        "id": "unlock",
        "name": "Subway/Cave Lock",
        "icon": "assets/basement_door.jpg",
        "type_unlock": "use",
        "item": null,
        "triggers": [
          {
            "type_trigger": "replace_tile",
            "position": [
              1,
              6
            ],
            "layer_id": "2",
            "map": "sewer1",
            "tile": {
              "id": "tile-map5_4_4",
              "offset": [
                4,
                4
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
        ],
        "condidions": [],
        "conditions": [
          {
            "type_condition": "exist_tile",
            "position": [
              1,
              6
            ],
            "layer_id": "2",
            "map": "sewer1",
            "tile": {
              "id": "tile-map5_3_4",
              "offset": [
                4,
                3
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
      }
    },
    "2": {
      "undefined_6_2_0": {
        "id": "unlock",
        "name": "Subway/Cave Lock",
        "icon": "assets/basement_door.jpg",
        "type_unlock": "use",
        "item": null,
        "triggers": [
          {
            "type_trigger": "replace_tile",
            "position": [
              2,
              6
            ],
            "layer_id": "1",
            "map": "sewer1",
            "tile": {
              "id": "tile-map5_1_7",
              "offset": [
                7,
                1
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
        ],
        "condidions": [],
        "conditions": [
          {
            "type_condition": "exist_tile",
            "position": [
              1,
              6
            ],
            "layer_id": "2",
            "map": "sewer1",
            "tile": {
              "id": "tile-map5_4_4",
              "offset": [
                4,
                4
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
          {
            "type_condition": "exist_tile",
            "position": [
              3,
              6
            ],
            "layer_id": "2",
            "map": "sewer1",
            "tile": {
              "id": "tile-map5_4_4",
              "offset": [
                4,
                4
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
      }
    },
    "3": {
      "undefined_6_3_0": {
        "id": "unlock",
        "name": "Subway/Cave Lock",
        "icon": "assets/basement_door.jpg",
        "type_unlock": "use",
        "item": null,
        "triggers": [
          {
            "type_trigger": "replace_tile",
            "position": [
              3,
              6
            ],
            "layer_id": "2",
            "map": "sewer1",
            "tile": {
              "id": "tile-map5_4_4",
              "offset": [
                4,
                4
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
        ],
        "condidions": [],
        "conditions": [
          {
            "type_condition": "exist_tile",
            "position": [
              3,
              6
            ],
            "layer_id": "2",
            "map": "sewer1",
            "tile": {
              "id": "tile-map5_3_4",
              "offset": [
                4,
                3
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
      }
    }
  },
  "8": {
    "2": {
      "undefined_8_2_0": {
        "id": "player",
        "name": "Player",
        "player_id": "player0",
        "icon": "assets/player.png",
        "tile_icon": "assets/player.png"
      }
    }
  }
}