var db_map_indoor1_actions = {
  "3": {
    "3": {
      "undefined_3_3_0": {
        "id": "enemies",
        "name": "Enemies",
        "icon": "icon-battle0",
        "tile_icon": "icon-vendor0",
        "cooldown": "",
        "enemies": [
          "fly"
        ],
        "hidden": false,
        "seller": {
          "monomate": 15,
          "sword03": 80,
          "knife0": 30,
          "sword02": 65
        },
        "interactions": {
          "dialog_1": {
            "id": "dialog_1",
            "type": "dialog",
            "text": "Privet!",
            "choices": [
              {
                "type": "dialog",
                "answer": "where I can find big bob?",
                "conditions": [
                  {
                    "type": "world_state",
                    "has": [
                      "quest_1_progress"
                    ]
                  }
                ],
                "next": "quest_1"
              },
              {
                "type": "trade",
                "answer": "I hochu buy chonibud",
                "conditions": [
                  {
                    "type": "world_state",
                    "has": [
                      "quest_2_done"
                    ]
                  }
                ],
                "next": "dialog_2"
              },
              {
                "type": "exit",
                "answer": "Paka!"
              },
              {
                "type": "dialog",
                "answer": "ti cho here delaesh?",
                "next": "dialog_3",
                "conditions": [
                  {
                    "type": "world_state",
                    "has": [
                      "quest_1_done"
                    ]
                  }
                ]
              },
              {
                "type": "rest",
                "answer": "nada rest! (10 cash)",
                "cost": 10,
                "next": "dialog_2"
              },
              {
                "type": "dialog",
                "answer": "give me many! (requirement >20 strenght)",
                "conditions": [
                  {
                    "type": "strenght",
                    "compare": "more",
                    "value": 20
                  }
                ],
                "next": "quest_1",
                "change": 40,
                "extra_next": "dialog_2"
              }
            ]
          },
          "dialog_2": {
            "id": "dialog_2",
            "type": "dialog",
            "text": "Paka?",
            "choices": [
              {
                "type": "dialog",
                "answer": "Nipoka!",
                "next": "dialog_1"
              },
              {
                "type": "exit",
                "answer": "Paka!"
              }
            ]
          },
          "dialog_3": {
            "id": "dialog_3",
            "type": "dialog",
            "text": "Ni tvoe delo!",
            "choices": [
              {
                "type": "attack",
                "answer": "ARRRGGHH!!!!"
              }
            ]
          },
          "quest_1": {
            "id": "quest_1",
            "type": "dialog",
            "text": "can you help? need talk with big bob in subway tower? need dude in dungeon.",
            "reward": [
              "vodka0",
              10
            ],
            "conditions": [
              {
                "type": "world_state",
                "not": [
                  "quest_1_progress"
                ]
              }
            ],
            "choices": [
              {
                "type": "dialog",
                "state": [
                  "quest_1_progress"
                ],
                "answer": "havasho ;)",
                "conditions": []
              },
              {
                "type": "exit",
                "answer": "nit paka!!"
              }
            ]
          },
          "quest_1_progress": {
            "id": "quest_1_progress",
            "type": "dialog",
            "text": "Any news with Big bob?",
            "conditions": [
              {
                "type": "world_state",
                "has": [
                  "quest_1_progress"
                ],
                "not": [
                  "quest_1_done"
                ]
              }
            ],
            "choices": [
              {
                "type": "dialog",
                "conditions": [
                  {
                    "type": "world_state",
                    "has": [
                      "quest_1_progress_decide"
                    ]
                  }
                ],
                "answer": "Big bob not enter me in dungeon..",
                "next": "quest_1_2"
              },
              {
                "type": "dialog",
                "conditions": [
                  {
                    "type": "world_state",
                    "has": [
                      "quest_1_progress_accept"
                    ]
                  },
                  {
                    "type": "items",
                    "items": [
                      "paper0"
                    ]
                  }
                ],
                "answer": "I didn found dude but there lay a note",
                "next": "quest_1_done"
              },
              {
                "type": "exit",
                "answer": "yasna paka!!"
              }
            ]
          },
          "quest_1_done": {
            "id": "quest_1_done",
            "type": "dialog",
            "text": "so sorry to hear it! give reward!",
            "choices": [
              {
                "answer": "(take reward)",
                "type": "auto_trade",
                "state": [
                  "quest_1_done"
                ],
                "take": [
                  "vodka0",
                  10
                ],
                "give": [
                  "paper0"
                ],
                "next": "quest_2"
              }
            ]
          },
          "quest_2": {
            "id": "quest_2",
            "type": "dialog",
            "text": "the paper contain chiper, I know man who can help us with it, he arriwed in left house",
            "reward": [
              "monomate",
              4
            ],
            "choices": [
              {
                "type": "quest",
                "state": [
                  "quest_2_progress"
                ],
                "answer": "I try ;)"
              },
              {
                "type": "exit",
                "answer": "yasna paka!!"
              }
            ]
          },
          "quest_2_progress": {
            "id": "quest_2_progress",
            "type": "dialog",
            "text": "Any news about note?",
            "conditions": [
              {
                "type": "world_state",
                "has": [
                  "quest_2_progress"
                ],
                "not": [
                  "quest_2_done"
                ]
              }
            ],
            "choices": [
              {
                "type": "dialog",
                "conditions": [
                  {
                    "type": "world_state",
                    "has": [
                      "quest_2_progress_accept"
                    ]
                  }
                ],
                "answer": "Very strange!",
                "next": "quest_2_done"
              },
              {
                "type": "exit",
                "answer": "yasna paka!!"
              }
            ]
          },
          "quest_2_done": {
            "id": "quest_2_done",
            "type": "dialog",
            "text": "Oh great hear it! It all what I can give you! Also you can buy any what you want in my shop!",
            "choices": [
              {
                "answer": "(take reward)",
                "type": "auto_trade",
                "state": [
                  "quest_2_done"
                ],
                "take": [
                  "monomate",
                  4
                ],
                "next": "dialog_1"
              }
            ]
          }
        },
        "default_interaction_id": "dialog_1",
        "autoTrigger": "13"
      }
    }
  },
  "6": {
    "5": {
      "undefined_6_5_0": {
        "id": "teleport",
        "name": "Subway/Cave",
        "icon": "icon-teleport0",
        "position": [
          4,
          10
        ],
        "map": "city1",
        "autoTrigger": "hover"
      }
    }
  }
}