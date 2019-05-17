var db_map_world1_actions = {
  "1": {
    "2": {
      "undefined_1_2_0": {
        "id": "teleport",
        "name": "Subway/Cave",
        "icon": "icon-teleport0",
        "position": [
          21,
          -6
        ],
        "map": "sewer1",
        "autoTrigger": "hover"
      }
    }
  },
  "3": {
    "6": {
      "undefined_3_6_0": {
        "id": "enemies",
        "name": "Enemies",
        "icon": "icon-battle0",
        "tile_icon": "icon-angry_bear1",
        "cooldown": 20,
        "enemies": [
          "bear0"
        ],
        "hidden": "",
        "autoTrigger": "13"
      }
    }
  },
  "5": {
    "4": {
      "undefined_5_4_0": {
        "id": "enemies",
        "name": "Enemies",
        "icon": "icon-battle0",
        "tile_icon": "icon-wolf1",
        "cooldown": 20,
        "enemies": [
          "wolf",
          "wolf",
          "wolf1"
        ],
        "hidden": "",
        "autoTrigger": "hover",
        "interactions": {
          "start": {
            "id": "start",
            "type": "dialog",
            "text": "Ya tebya eat!",
            "choices": [
              {
                "type": "exit",
                "answer": "paka!"
              },
              {
                "type": "attack",
                "answer": "a nu try!"
              }
            ]
          }
        },
        "default_interaction_id": "start"
      }
    }
  },
  "6": {
    "8": {
      "undefined_6_8_0": {
        "id": "enemies",
        "name": "Enemies",
        "icon": "icon-battle0",
        "tile_icon": "icon-boss2",
        "cooldown": 20,
        "enemies": [
          "boss2"
        ],
        "hidden": "",
        "autoTrigger": "hover",
        "interactions": {
          "start": {
            "id": "start",
            "type": "dialog",
            "text": "Moya krushit!!!",
            "choices": [
              {
                "type": "attack",
                "answer": "Net moya!"
              },
              {
                "type": "exit",
                "answer": "PAKA!"
              }
            ]
          }
        },
        "default_interaction_id": "start"
      }
    }
  },
  "7": {
    "7": {
      "undefined_7_7_0": {
        "id": "enemies",
        "name": "Enemies",
        "icon": "icon-battle0",
        "tile_icon": "icon-zombie1",
        "cooldown": 20,
        "enemies": [
          "zomby",
          "zomby",
          "zomby",
          "zomby",
          "zomby",
          "zomby",
          "zomby"
        ],
        "hidden": "",
        "autoTrigger": "hover",
        "interactions": {
          "start": {
            "id": "start",
            "type": "dialog",
            "text": "OOOOOAAAAAAAAAAAAAAA...",
            "choices": [
              {
                "type": "exit",
                "answer": "UAAA!!!"
              },
              {
                "type": "attack",
                "answer": "KIAAAAAA!!!!"
              }
            ]
          }
        },
        "default_interaction_id": "start"
      }
    }
  },
  "10": {
    "-6": {
      "undefined_10_-6_0": {
        "id": "enemies",
        "name": "Enemies",
        "icon": "icon-battle0",
        "tile_icon": "icon-battle0",
        "cooldown": 20,
        "enemies": [
          "scorpion_small",
          "scorpion_small",
          "scorpion",
          "worm"
        ],
        "hidden": false,
        "autoTrigger": "hover",
        "position": []
      }
    }
  },
  "11": {
    "2": {
      "undefined_11_2_0": {
        "id": "teleport",
        "name": "Subway/Cave",
        "icon": "icon-teleport0",
        "position": [
          4,
          4
        ],
        "map": "cave1",
        "autoTrigger": "hover"
      }
    }
  },
  "13": {
    "-2": {
      "undefined_13_-2_0": {
        "id": "teleport",
        "name": "Subway/Cave",
        "icon": "icon-teleport0",
        "position": [
          8,
          15
        ],
        "map": "city1",
        "autoTrigger": "hover"
      }
    },
    "-3": {
      "undefined_13_-3_0": {
        "id": "teleport",
        "name": "Subway/Cave",
        "icon": "icon-teleport0",
        "position": [
          7,
          15
        ],
        "map": "city1",
        "autoTrigger": "hover"
      }
    }
  }
}