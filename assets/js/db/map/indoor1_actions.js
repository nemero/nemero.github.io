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
                "type": "trade",
                "answer": "I hochu buy chonibud",
                "conditions": [
                  {
                    "type": "world_state",
                    "has": [
                      "quest_1_done"
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
                "next": "dialog_3"
              },
              {
                "type": "rest",
                "answer": "nada rest! (10 cash)",
                "cost": 10,
                "next": "dialog_2"
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
          "quest_1_progress_help": {
            "id": "quest_1_progress_help",
            "type": "dialog",
            "text": "По дороге на север есть маяк, он обитает там. Под маяком расположены казематы, если не найдешь его в холе, наверняка найдешь его в казематах.\nОн не особо сговорчив, но может тебе получится убедить его отвести тебя к персоне.",
            "choices": [
              {
                "type": "exit",
                "answer": "Yasna Paka!"
              }
            ]
          },
          "quest_1": {
            "id": "quest_1",
            "type": "dialog",
            "text": "Я раньше не видел тебя здесь, на тебе доспехи, а на севере сейчас не безопасно. Не удобно просить, но я заплачу и у меня тут магазин, сможешь купить если что нибудь захочешь. \nНужна помощь, сможешь поговоришь с big bob в маяке на севере от сюда? Нужно по проведывать некую персону и по интересоваться хорошо ли с ним обращаются и все, ну как?",
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
                "answer": "HARASHO!!!!",
                "conditions": []
              },
              {
                "type": "exit",
                "answer": "NIT PAKA!!!"
              }
            ]
          },
          "quest_1_progress": {
            "id": "quest_1_progress",
            "type": "dialog",
            "text": "Есть новости о персоне?",
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
                    "type": "items",
                    "items": [
                      "paper0"
                    ]
                  }
                ],
                "answer": "Я побывал в казематах, но в темнице не оказалось никакой персоны, я нашел только какую-то записку..",
                "next": "quest_1_done"
              },
              {
                "type": "exit",
                "answer": "NIT PAKA!!"
              },
              {
                "type": "dialog",
                "answer": "А где найти не коего big bob?",
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
                "next": "quest_1_progress_help"
              }
            ]
          },
          "quest_1_done": {
            "id": "quest_1_done",
            "type": "dialog",
            "text": "Ох что-то произошло! Можешь дать мне эту записку? Да и как я обещала вот твоя награда.",
            "choices": [
              {
                "answer": "(отдать записку)",
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
            "text": "Хмм, похоже на какой-то шифр, я знаю одно существо которое может нам помочь расшифровать это, он проживает справа от дома, возле него находится маленький фонтан. Сможешь пойти и узнать что ни будь про эту записку? Скажи ему что от Kavavi",
            "reward": [
              "monomate",
              4
            ],
            "choices": [
              {
                "type": "exit",
                "state": [
                  "quest_2_progress"
                ],
                "answer": "OK!!!!"
              },
              {
                "type": "exit",
                "answer": "YASNA PAKA!!"
              }
            ],
            "conditions": [
              {
                "type": "world_state",
                "has": [
                  "quest_1_done"
                ],
                "not": [
                  "quest_2_progress"
                ]
              }
            ]
          },
          "quest_2_progress": {
            "id": "quest_2_progress",
            "type": "dialog",
            "text": "Ну как узнал что ни будь о содержимом записки?",
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
                "answer": "NICHO NYASNA PAKA!!!!"
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