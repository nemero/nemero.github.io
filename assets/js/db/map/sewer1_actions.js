var db_map_sewer1_actions = {
  "2": {
    "2": {
      "undefined_2_2_0": {
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
            "type": "exist_tile",
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
      "undefined_2_2_1": {
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
            "type": "exist_tile",
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
    }
  },
  "3": {
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
        "hidden": false,
        "conditions": [
          {
            "type": "items",
            "not": [
              "paper0"
            ]
          }
        ]
      }
    }
  },
  "6": {
    "1": {
      "undefined_6_1_0": {
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
            "type": "exist_tile",
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
      "undefined_6_1_1": {
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
            "type": "exist_tile",
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
      "undefined_6_2_0": {
        "id": "unlock",
        "name": "Subway/Cave Lock",
        "icon": "icon-townout0",
        "type_unlock": "item",
        "autoTrigger": "13",
        "item": "key_old_tower0",
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
            "type": "exist_tile",
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
    "8": {
      "undefined_6_8_0": {
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
            "type": "exist_tile",
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
      "undefined_6_8_1": {
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
            "type": "exist_tile",
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
      "undefined_6_9_0": {
        "id": "teleport",
        "name": "Subway/Cave",
        "icon": "icon-townout0",
        "autoTrigger": "hover",
        "position": [
          23,
          -9
        ],
        "map": "sewer1"
      }
    }
  },
  "8": {
    "3": {
      "undefined_8_3_0": {
        "id": "enemies",
        "name": "Enemies",
        "icon": "icon-battle0",
        "tile_icon": "icon-fly0",
        "cooldown": 50,
        "autoTrigger": "hover",
        "enemies": [
          "fly",
          "fly",
          "fly"
        ],
        "hidden": false,
        "conditions": [
          {
            "type": "world_state",
            "has": [],
            "not": [
              "quest_1_done"
            ]
          }
        ],
        "seller": {
          "sword0": 55,
          "sword1": 155,
          "monomate": 15
        },
        "interactions": {
          "start": {
            "id": "start",
            "type": "dialog",
            "text": "VZZZZZZZZZZZZ!!!!!!!",
            "choices": [
              {
                "answer": "Kia!",
                "type": "attack"
              },
              {
                "type": "exit",
                "answer": "PAKA!!"
              }
            ]
          }
        },
        "default_interaction_id": "start"
      }
    }
  },
  "-10": {
    "19": {
      "undefined_-10_19_0": {
        "id": "enemies",
        "name": "Enemies",
        "icon": "icon-battle0",
        "tile_icon": "icon-boss1",
        "autoTrigger": "hover",
        "cooldown": "",
        "enemies": [
          "boss"
        ],
        "hidden": "",
        "interactions": {
          "start": {
            "id": "start",
            "type": "dialog",
            "text": "Sho nado?",
            "choices": [
              {
                "type": "dialog",
                "answer": "Ti Kto?",
                "next": "d2"
              },
              {
                "type": "exit",
                "answer": "Nicho!"
              }
            ]
          },
          "d2": {
            "id": "d2",
            "type": "dialog",
            "text": "YA BIG BOB!",
            "choices": [
              {
                "answer": "Paluchay!",
                "type": "attack"
              },
              {
                "type": "dialog",
                "answer": "Nichosy, Sho v podvale?",
                "next": "d3"
              },
              {
                "type": "exit",
                "answer": "Paka!"
              },
              {
                "type": "auto_trade",
                "answer": "Мне нужно к оной персоне, за 10 монет лады?",
                "take": [
                  "key_old_tower0"
                ],
                "events": [],
                "conditions": [
                  {
                    "type": "world_state",
                    "has": [
                      "quest_1_progress"
                    ],
                    "not": [
                      "quest_1_done",
                      "quest_1_progress_10_cash_bob"
                    ]
                  }
                ],
                "state": [
                  "quest_1_progress_10_cash_bob"
                ],
                "give": [
                  10
                ]
              }
            ]
          },
          "d3": {
            "id": "d3",
            "type": "dialog",
            "text": "NICHO!!!1111",
            "choices": [
              {
                "type": "attack",
                "answer": "paluchay!!"
              },
              {
                "type": "dialog",
                "answer": "A Ti Kto? ",
                "next": "d2"
              },
              {
                "type": "exit",
                "answer": "Paka!"
              }
            ]
          }
        },
        "default_interaction_id": "start"
      }
    },
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
            "type": "exist_tile",
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
        "conditions": [
          {
            "type": "exist_tile",
            "position": [
              23,
              -10
            ],
            "layer_id": "2",
            "map": "sewer1",
            "tile": {
              "id": "tile-map5_5_15",
              "offset": [
                15,
                5
              ],
              "map": "tile-map5"
            }
          }
        ]
      }
    }
  },
  "-5": {
    "21": {
      "undefined_-5_21_0": {
        "id": "teleport",
        "name": "Subway/Cave",
        "icon": "icon-teleport0",
        "position": [
          2,
          2
        ],
        "map": "world1",
        "autoTrigger": "hover"
      }
    }
  }
}