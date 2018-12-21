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
  "5": {
    "-25": {
      "undefined_5_-25_0": {
        "id": "teleport",
        "name": "Subway/Cave",
        "icon": "icon-teleport0",
        "position": [
          -10,
          7
        ],
        "map": "sewer1"
      }
    },
    "-28": {
      "undefined_5_-28_0": {
        "id": "unlock",
        "name": "Subway/Cave Lock",
        "icon": "icon-basement-door0",
        "type_unlock": "use",
        "item": null,
        "triggers": [
          {
            "type_trigger": "replace_tile",
            "map": "sewer1",
            "position": [
              -28,
              4
            ],
            "layer_id": "2",
            "tile": {
              "id": "tile-map5_5_16",
              "offset": [
                16,
                5
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
            "type_trigger": "show_event",
            "map": "sewer1",
            "position": [
              1,
              3
            ],
            "event_id": "sub_town_opened"
          },
          {
            "type_trigger": "hide_event",
            "map": "sewer1",
            "position": [
              2,
              2
            ],
            "event_id": "cave_lock_2_2_1"
          }
        ],
        "conditions": [
          {
            "type_condition": "exist_tile",
            "position": [
              -28,
              4
            ],
            "layer_id": "2",
            "map": "sewer1",
            "tile": {
              "id": "tile-map5_4_16",
              "offset": [
                16,
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
      "undefined_5_-28_1": {
        "id": "unlock",
        "name": "Subway/Cave Lock",
        "icon": "icon-basement-door0",
        "type_unlock": "use",
        "item": null,
        "triggers": [
          {
            "type_trigger": "replace_tile",
            "map": "sewer1",
            "position": [
              -28,
              4
            ],
            "layer_id": "2",
            "tile": {
              "id": "tile-map5_4_16",
              "offset": [
                16,
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
            "type_trigger": "show_event",
            "map": "sewer1",
            "position": [
              1,
              3
            ],
            "event_id": "sub_town_opened"
          },
          {
            "type_trigger": "hide_event",
            "map": "sewer1",
            "position": [
              2,
              2
            ],
            "event_id": "cave_lock_2_2_1"
          }
        ],
        "conditions": [
          {
            "type_condition": "exist_tile",
            "position": [
              -28,
              4
            ],
            "layer_id": "2",
            "map": "sewer1",
            "tile": {
              "id": "tile-map5_5_16",
              "offset": [
                16,
                5
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
    "-27": {
      "undefined_5_-27_0": {
        "id": "unlock",
        "name": "Subway/Cave Lock",
        "icon": "icon-basement-door0",
        "type_unlock": "use",
        "item": null,
        "triggers": [
          {
            "type_trigger": "replace_tile",
            "map": "sewer1",
            "position": [
              -27,
              4
            ],
            "layer_id": "2",
            "tile": {
              "id": "tile-map5_4_16",
              "offset": [
                16,
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
            "type_trigger": "show_event",
            "map": "sewer1",
            "position": [
              1,
              3
            ],
            "event_id": "sub_town_opened"
          },
          {
            "type_trigger": "hide_event",
            "map": "sewer1",
            "position": [
              2,
              2
            ],
            "event_id": "cave_lock_2_2_1"
          }
        ],
        "conditions": [
          {
            "type_condition": "exist_tile",
            "position": [
              -27,
              4
            ],
            "layer_id": "2",
            "map": "sewer1",
            "tile": {
              "id": "tile-map5_5_16",
              "offset": [
                16,
                5
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
      "undefined_5_-27_1": {
        "id": "unlock",
        "name": "Subway/Cave Lock",
        "icon": "icon-basement-door0",
        "type_unlock": "use",
        "item": null,
        "triggers": [
          {
            "type_trigger": "replace_tile",
            "map": "sewer1",
            "position": [
              -27,
              4
            ],
            "layer_id": "2",
            "tile": {
              "id": "tile-map5_5_16",
              "offset": [
                16,
                5
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
            "type_trigger": "show_event",
            "map": "sewer1",
            "position": [
              1,
              3
            ],
            "event_id": "sub_town_opened"
          },
          {
            "type_trigger": "hide_event",
            "map": "sewer1",
            "position": [
              2,
              2
            ],
            "event_id": "cave_lock_2_2_1"
          }
        ],
        "conditions": [
          {
            "type_condition": "exist_tile",
            "position": [
              -27,
              4
            ],
            "layer_id": "2",
            "map": "sewer1",
            "tile": {
              "id": "tile-map5_4_16",
              "offset": [
                16,
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
    "-26": {
      "undefined_5_-26_0": {
        "id": "unlock",
        "name": "Subway/Cave Lock",
        "icon": "icon-basement-door0",
        "type_unlock": "use",
        "item": null,
        "triggers": [
          {
            "type_trigger": "replace_tile",
            "map": "sewer1",
            "position": [
              -26,
              4
            ],
            "layer_id": "2",
            "tile": {
              "id": "tile-map5_4_16",
              "offset": [
                16,
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
            "type_trigger": "show_event",
            "map": "sewer1",
            "position": [
              1,
              3
            ],
            "event_id": "sub_town_opened"
          },
          {
            "type_trigger": "hide_event",
            "map": "sewer1",
            "position": [
              2,
              2
            ],
            "event_id": "cave_lock_2_2_1"
          }
        ],
        "conditions": [
          {
            "type_condition": "exist_tile",
            "position": [
              -26,
              4
            ],
            "layer_id": "2",
            "map": "sewer1",
            "tile": {
              "id": "tile-map5_5_16",
              "offset": [
                16,
                5
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
      "undefined_5_-26_1": {
        "id": "unlock",
        "name": "Subway/Cave Lock",
        "icon": "icon-basement-door0",
        "type_unlock": "use",
        "item": null,
        "triggers": [
          {
            "type_trigger": "replace_tile",
            "map": "sewer1",
            "position": [
              -26,
              4
            ],
            "layer_id": "2",
            "tile": {
              "id": "tile-map5_5_16",
              "offset": [
                16,
                5
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
            "type_trigger": "show_event",
            "map": "sewer1",
            "position": [
              1,
              3
            ],
            "event_id": "sub_town_opened"
          },
          {
            "type_trigger": "hide_event",
            "map": "sewer1",
            "position": [
              2,
              2
            ],
            "event_id": "cave_lock_2_2_1"
          }
        ],
        "conditions": [
          {
            "type_condition": "exist_tile",
            "position": [
              -26,
              4
            ],
            "layer_id": "2",
            "map": "sewer1",
            "tile": {
              "id": "tile-map5_4_16",
              "offset": [
                16,
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
        "icon": "icon-basement-door0",
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
        "icon": "icon-cave0",
        "position": [
          -15,
          7
        ],
        "map": "sewer1"
      }
    },
    "-15": {
      "undefined_7_-15_0": {
        "id": "teleport",
        "name": "Subway/Cave",
        "icon": "icon-cave0",
        "position": [
          9,
          7
        ],
        "map": "sewer1"
      }
    },
    "-10": {
      "undefined_7_-10_0": {
        "id": "teleport",
        "name": "Subway/Cave",
        "icon": "icon-teleport0",
        "position": [
          -25,
          5
        ],
        "map": "sewer1"
      }
    },
    "-24": {
      "undefined_7_-24_0": {
        "id": "loot_box",
        "name": "Chest open",
        "icon": "icon-chest-open0",
        "tile_icon": "icon-chest-locked0",
        "items": [
          "cane0"
        ],
        "conditions": [
          {
            "type_condition": "exist_tile",
            "position": [
              -27,
              4
            ],
            "layer_id": "2",
            "map": "sewer1",
            "tile": {
              "id": "tile-map5_4_16",
              "offset": [
                16,
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
              -26,
              4
            ],
            "layer_id": "2",
            "map": "sewer1",
            "tile": {
              "id": "tile-map5_5_16",
              "offset": [
                16,
                5
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
              -28,
              4
            ],
            "layer_id": "2",
            "map": "sewer1",
            "tile": {
              "id": "tile-map5_5_16",
              "offset": [
                16,
                5
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
    "-12": {
      "undefined_7_-12_0": {
        "id": "unlock",
        "name": "Subway/Cave Lock",
        "icon": "icon-basement-door0",
        "type_unlock": "item",
        "item": "cane0",
        "triggers": [
          {
            "type_trigger": "replace_tile",
            "position": [
              -12,
              6
            ],
            "layer_id": "2",
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
        "conditions": []
      },
      "undefined_7_-12_1": {
        "id": "teleport",
        "name": "Subway/Cave",
        "icon": "icon-teleport0",
        "position": [
          -16,
          -2
        ],
        "map": "sewer1",
        "conditions": [
          {
            "type_condition": "exist_tile",
            "position": [
              -12,
              6
            ],
            "layer_id": "2",
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
        "hidden": "false"
      }
    }
  },
  "8": {
    "2": {
      "player0": {
        "id": "player",
        "name": "Player",
        "player_id": "player0",
        "icon": "icon-player0",
        "tile_icon": "icon-player0"
      }
    }
  },
  "-2": {
    "-16": {
      "undefined_-2_-16_0": {
        "id": "teleport",
        "name": "Subway/Cave",
        "icon": "icon-teleport0",
        "position": [
          -12,
          7
        ],
        "map": "sewer1",
        "conditions": [],
        "hidden": ""
      }
    }
  }
}