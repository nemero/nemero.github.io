var db_map_sewer1_actions = {
  "3": {
    "4": {
      "undefined_3_4_0": {
        "id": "loot_box",
        "name": "Chest open",
        "icon": "icon-paper0",
        "tile_icon": "icon-paper0",
        "items": [
          "paper0"
        ]
      }
    }
  },
  "7": {
    "1": {
      "undefined_7_1_0": {
        "id": "unlock",
        "name": "Subway/Cave Lock",
        "icon": "icon-basement-door0",
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
      },
      "undefined_7_1_1": {
        "id": "unlock",
        "name": "Subway/Cave Lock",
        "icon": "icon-basement-door0",
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
        ],
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
          }
        ]
      }
    },
    "2": {
      "undefined_7_2_0": {
        "id": "unlock",
        "name": "Subway/Cave Lock",
        "icon": "icon-townout0",
        "type_unlock": "use",
        "item": null,
        "triggers": [
          {
            "type_trigger": "replace_tile",
            "position": [
              2,
              6
            ],
            "layer_id": "2",
            "map": "sewer1",
            "tile": {
              "id": "tile-map5_0_16",
              "offset": [
                16,
                0
              ],
              "map": "tile-map5"
            }
          }
        ],
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
      },
      "undefined_7_2_1": {
        "id": "enemies",
        "name": "Enemies",
        "icon": "icon-battle0",
        "tile_icon": "icon-battle0",
        "cooldown": 20,
        "enemies": [
          "boss"
        ],
        "hidden": ""
      }
    },
    "3": {
      "undefined_7_3_0": {
        "id": "unlock",
        "name": "Subway/Cave Lock",
        "icon": "icon-basement-door0",
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
      },
      "undefined_7_3_1": {
        "id": "unlock",
        "name": "Subway/Cave Lock",
        "icon": "icon-basement-door0",
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
        ],
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
    "8": {
      "undefined_7_8_0": {
        "id": "unlock",
        "name": "Subway/Cave Lock",
        "icon": "icon-basement-door0",
        "type_unlock": "use",
        "item": null,
        "triggers": [
          {
            "type_trigger": "replace_tile",
            "position": [
              8,
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
        "conditions": [
          {
            "type_condition": "exist_tile",
            "position": [
              8,
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
      },
      "undefined_7_8_1": {
        "id": "unlock",
        "name": "Subway/Cave Lock",
        "icon": "icon-basement-door0",
        "type_unlock": "use",
        "item": null,
        "triggers": [
          {
            "type_trigger": "replace_tile",
            "position": [
              8,
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
        ],
        "conditions": [
          {
            "type_condition": "exist_tile",
            "position": [
              8,
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
    "9": {
      "undefined_7_9_0": {
        "id": "enemies",
        "name": "Enemies",
        "icon": "icon-battle0",
        "tile_icon": "icon-fly0",
        "cooldown": 20,
        "enemies": [
          "fly",
          "fly",
          "fly"
        ],
        "hidden": false,
        "conditions": []
      },
      "undefined_7_9_1": {
        "id": "teleport",
        "name": "Subway/Cave",
        "icon": "icon-townout0",
        "position": [
          23,
          -10
        ],
        "map": "sewer1"
      }
    }
  },
  "-10": {
    "23": {
      "undefined_-10_23_0": {
        "id": "teleport",
        "name": "Subway/Cave",
        "icon": "icon-basement-door0",
        "position": [
          9,
          7
        ],
        "map": "sewer1",
        "hidden": "",
        "conditions": [
          {
            "type_condition": "exist_tile",
            "position": [
              23,
              -10
            ],
            "layer_id": "2",
            "map": "sewer1",
            "tile": {
              "id": "tile-map5_5_14",
              "offset": [
                14,
                5
              ],
              "map": "tile-map5"
            }
          }
        ]
      },
      "undefined_-10_23_1": {
        "id": "unlock",
        "name": "Subway/Cave Lock",
        "icon": "icon-basement-door0",
        "type_unlock": "use",
        "item": null,
        "triggers": [
          {
            "type_trigger": "replace_tile",
            "position": [
              23,
              -10
            ],
            "layer_id": "2",
            "map": "sewer1",
            "tile": {
              "id": "tile-map5_5_14",
              "offset": [
                14,
                5
              ],
              "map": "tile-map5"
            }
          }
        ],
        "conditions": []
      }
    }
  },
  "-6": {
    "21": {
      "undefined_-6_21_0": {
        "id": "teleport",
        "name": "Subway/Cave",
        "icon": "icon-townout0",
        "position": [
          2,
          1
        ],
        "map": "world1"
      }
    }
  }
}