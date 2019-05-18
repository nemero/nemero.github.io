var db_map_cave1_actions = {
  "3": {
    "4": {
      "undefined_4_4_0": {
        "id": "teleport",
        "name": "Subway/Cave",
        "icon": "icon-teleport0",
        "autoTrigger": "hover",
        "position": [
          2,
          12
        ],
        "map": "world1"
      }
    }
  },
  "4": {
    "2": {
      "undefined_4_2_0": {
        "id": "enemies",
        "name": "Enemies",
        "icon": "icon-battle0",
        "tile_icon": "icon-fly0",
        "autoTrigger": "13",
        "cooldown": 20,
        "enemies": [
          "fly1"
        ],
        "hidden": false,
        "seller": {
          "sword0": 55,
          "sword1": 155,
          "monomate": 15
        },
        "interactions": {
          "dialog_1": {
            "id": "dialog_1",
            "type": "dialog",
            "text": "I bear!",
            "choices": [
              {
                "answer": "give me russian vodka!",
                "type": "dialog",
                "next": "dialog_2"
              },
              {
                "answer": "i want your $ byustra!",
                "type": "attack"
              },
              {
                "answer": "I will boom you!!! meowmeowfuker!",
                "type": "dialog",
                "next": "dialog_3"
              }
            ]
          },
          "dialog_2": {
            "id": "dialog_2",
            "type": "dialog",
            "text": "10 cash!",
            "choices": [
              {
                "answer": "I take it!",
                "type": "attack"
              },
              {
                "answer": "Yes take 10 cash! (auto trade vodka on 10 cash)",
                "type": "auto_trade",
                "take": [
                  "vodka0"
                ],
                "give": [
                  10
                ],
                "next": "dialog_4"
              },
              {
                "answer": "paka! (bye)",
                "type": "exit"
              },
              {
                "answer": "Let see that you can sell.",
                "type": "trade",
                "next": "dialog_4"
              }
            ]
          },
          "dialog_3": {
            "id": "dialog_3",
            "type": "dialog",
            "text": "Oh you crazy fakir! lets try!",
            "choices": [
              {
                "answer": "(attack)",
                "type": "attack"
              }
            ]
          },
          "dialog_4": {
            "id": "dialog_4",
            "type": "dialog",
            "text": "something else?",
            "choices": [
              {
                "answer": "Yes",
                "type": "dialog",
                "next": "dialog_1"
              },
              {
                "answer": "No, Thanks!",
                "type": "exit"
              }
            ]
          }
        },
        "default_interaction_id": "dialog_1"
      }
    },
    "6": {
      "undefined_4_6_0": {
        "id": "enemies",
        "name": "Enemies",
        "icon": "icon-paper0",
        "tile_icon": "icon-paper0",
        "cooldown": 20,
        "enemies": [
          "fly1"
        ],
        "hidden": false,
        "autoTrigger": "hover",
        "interactions": {
          "dialog_1": {
            "id": "dialog_1",
            "type": "dialog",
            "text": "На земле лежит неприметная записка запачканная красными пятнами, кажется это похоже на следы от кетчупа.",
            "choices": [
              {
                "type": "auto_trade",
                "answer": "Подобрать записку.",
                "state": [
                  "cave_quest1_taked"
                ],
                "take": [
                  "paper_cave0",
                ]
              },
              {
                "type": "exit",
                "answer": "УБЕГАТЬ! ПАМАГИТЕ!"
              }
            ],
            "conditions": []
          }
        },
        "default_interaction_id": "dialog_1",
        "conditions": [
          {
            "type": "world_state",
            "not": [
              "cave_quest1_taked"
            ]
          }
        ],
        "position": []
      }
    }
  },
  "5": {
    "1": {
      "undefined_5_1_0": {
        "id": "enemies",
        "name": "Enemies",
        "icon": "icon-battle0",
        "tile_icon": "icon-angry_bear1",
        "cooldown": 20,
        "autoTrigger": "hover",
        "enemies": [
          "bear1"
        ],
        "hidden": "",
        "interactions": {
          "start": {
            "id": "start",
            "type": "dialog",
            "text": "ARRRGGG ;( Ti cho nastupaesh na hvost!!?!!",
            "choices": [
              {
                "type": "attack",
                "answer": "a ny tikay medved paka cel!"
              },
              {
                "type": "exit",
                "answer": "paka!"
              },
              {
                "type": "attack",
                "answer": "very temno nichego ne see!"
              }
            ]
          }
        },
        "default_interaction_id": "start"
      }
    }
  },
  "6": {
    "5": {
      "player0": {
        "id": "player",
        "name": "Player",
        "direction": "down",
        "player_id": "player0",
        "icon": "icon-player1",
        "tile_icon": "icon-player1"
      }
    }
  }
}