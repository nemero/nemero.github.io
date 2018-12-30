var db_map_sewer1_actions = {
  "3": {
    "2": {
      "undefined_3_2_0": {
        "id": "unlock",
        "name": "Subway/Cave Lock",
        "icon": "icon-basement-door0",
        "type_unlock": "use",
        "autoTrigger": "13",
        "item": null,
        "triggers": [
          {
            "type_trigger": "replace_tile",
            "position": [
              2,
              2
            ],
            "layer_id": "2",
            "map": "sewer1",
            "tile": {
              "id": "tile-map5_4_5",
              "offset": [
                5,
                4
              ],
              "map": "tile-map5"
            }
          }
        ],
        "conditions": [
          {
            "type_condition": "exist_tile",
            "position": [
              2,
              2
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
      "undefined_3_2_1": {
        "id": "unlock",
        "name": "Subway/Cave Lock",
        "icon": "icon-basement-door0",
        "type_unlock": "use",
        "autoTrigger": "13",
        "item": null,
        "triggers": [
          {
            "type_trigger": "replace_tile",
            "position": [
              2,
              2
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
              2,
              2
            ],
            "layer_id": "2",
            "map": "sewer1",
            "tile": {
              "id": "tile-map5_4_5",
              "offset": [
                5,
                4
              ],
              "map": "tile-map5"
            }
          }
        ]
      }
    },
    "4": {
      "undefined_3_4_0": {
        "id": "loot_box",
        "name": "Chest open",
        "icon": "icon-paper0",
        "tile_icon": "icon-paper0",
        "autoTrigger": "hover",
        "items": [
          "paper0"
        ],
        "hidden": false
      }
    }
  },
  "6": {
    "9": {
      "undefined_6_9_0": {
        "id": "teleport",
        "name": "Subway/Cave",
        "icon": "icon-townout0",
        "autoTrigger": "hover",
        "position": [
          2,
          2
        ],
        "map": "world1"
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
        "autoTrigger": "13",
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
        "autoTrigger": "13",
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
        "id": "enemies",
        "name": "Enemies",
        "icon": "icon-battle0",
        "tile_icon": "icon-boss1",
        "autoTrigger": "13",
        "cooldown": 20,
        "enemies": [
          "boss"
        ],
        "hidden": ""
      },
      "undefined_7_2_1": {
        "id": "unlock",
        "name": "Subway/Cave Lock",
        "icon": "icon-townout0",
        "type_unlock": "use",
        "autoTrigger": "13",
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
              2,
              6
            ],
            "layer_id": "2",
            "map": "sewer1",
            "tile": {
              "id": "tile-map5_1_8",
              "offset": [
                8,
                1
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
        "autoTrigger": "13",
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
        "autoTrigger": "13",
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
    "6": {
      "undefined_7_6_0": {
        "id": "unlock",
        "name": "Subway/Cave Lock",
        "icon": "icon-basement-door0",
        "type_unlock": "use",
        "autoTrigger": "13",
        "item": null,
        "triggers": [
          {
            "type_trigger": "replace_tile",
            "position": [
              6,
              6
            ],
            "layer_id": "2",
            "map": "sewer1",
            "tile": {
              "id": "tile-map5_4_5",
              "offset": [
                5,
                4
              ],
              "map": "tile-map5"
            }
          }
        ],
        "conditions": [
          {
            "type_condition": "exist_tile",
            "position": [
              6,
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
      "undefined_7_6_1": {
        "id": "unlock",
        "name": "Subway/Cave Lock",
        "icon": "icon-basement-door0",
        "type_unlock": "use",
        "autoTrigger": "13",
        "item": null,
        "triggers": [
          {
            "type_trigger": "replace_tile",
            "position": [
              6,
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
              6,
              6
            ],
            "layer_id": "2",
            "map": "sewer1",
            "tile": {
              "id": "tile-map5_4_5",
              "offset": [
                5,
                4
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
        "autoTrigger": "13",
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
        "autoTrigger": "13",
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
        "autoTrigger": "13",
        "enemies": [
          "fly",
          "fly",
          "fly"
        ],
        "hidden": false,
        "conditions": [],
        "seller": {
          "sword0": 55,
          "sword1": 155,
          "monomate": 15,
        }, 
        "default_interaction_id": "dialog_1",
        "interactions": {
          "dialog_1": {
            id: "dialog_1",
            type: "dialog", 
            text: "what do you need from us?", choices: [
              {answer: "1. give me russian vodka!", type: "dialog", next: "dialog_2"},
              {answer: "2. i want your $ byustra! (attack)", type: "attack"}, 
              {answer: "3. I will boom you!!! meowmeowfuker!", type: "dialog", next: "dialog_3"},
              {answer: "4. I give you 10 cash, need badroom!", type: "rest", next: "dialog_4"},
            ]
          },
          "dialog_2": {
            id: "dialog_2",
            type: "dialog", 
            text: "10 cash!", choices: [
              {answer: "1. I take it! (attack)", type: "attack"},
              {answer: "2. Yes take 10 cash!", type: "auto_trade", take: ["vodka0"], give: [10], next: "dialog_4"}, // if number then it cash 
              {answer: "3. Not intresting. (bye)", type: "exit"},
              {answer: "4. Let see that you can sell. (trade)", type: "trade", next: "dialog_4"},
            ]
          },
          "dialog_3": {
            id: "dialog_3",
            type: "dialog", 
            text: "Oh you crazy fakir! lets try!", choices: [
              {answer: "1. (attack)", type: "attack"},
            ]
          },
          "dialog_4": {
            id: "dialog_4",
            type: "dialog", 
            text: "something else?", choices: [
              {answer: "1. Yes", type: "dialog", next: "dialog_1"},
              {answer: "2. No, Thanks!", type: "exit"},
            ]
          }
        },
      }
    }
  },
  "-10": {
    "23": {
      "undefined_-10_23_0": {
        "id": "teleport",
        "name": "Subway/Cave",
        "icon": "icon-basement-door0",
        "autoTrigger": "hover",
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
        "autoTrigger": "13",
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
        "autoTrigger": "hover",
        "position": [
          2,
          1
        ],
        "map": "world1"
      }
    }
  }
}