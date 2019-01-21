var db_map_indoor1_actions = {
  "2": {
    "2": {
      "undefined_2_2_0": {
        "id": "teleport",
        "name": "Subway/Cave",
        "icon": "icon-teleport0",
        "position": [
          -22,
          3
        ],
        "map": "indoor1",
        "autoTrigger": "hover"
      }
    }
  },
  "3": {
    "3": {
      "undefined_3_3_0": {
        "id": "enemies",
        "name": "Enemies",
        "icon": "icon-speak0",
        "tile_icon": "",
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
            "text": "По дороге на север есть маяк, big bob всегда там. Это его дом и работа. Под маяком расположены казематы, если не найдешь его в холе, наверняка найдешь его в казематах.\nОн не особо сговорчив и ваще отвратительный тип, но может тебе получится убедить его не атаковать, а отвести к персоне.",
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
            "text": "Я раньше не видело вас здесь, кажется на вас есть вещи, знаете на севере сейчас очень безопасно и трудно встретить одетого незнакомца. Не удобно вас просить, но я заплачу и у меня тут магазин, но торговаться я с вами конечно не буду. \nТак вот, мне очень нужна помощь, в темнице заключена странная персона, проверь что с оной все в поряде и все, ну как? \nПостарайся не ввязываться в драку с big bob он совсем съехал с катушек в своем маяке.",
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
                    "type": "world_state",
                    "not": [
                      "quest_1_progress_10_cash_bob"
                    ]
                  },
                  {
                    "type": "items",
                    "has": [
                      "paper0"
                    ]
                  }
                ],
                "answer": "Я побывал в казематах, кажется big bob упал и выронил связку ключей, один из ключей подошел к двери, но в темнице не оказалось никакой персоны, я нашел только какую-то записку..",
                "next": "quest_1_done"
              },
              {
                "type": "exit",
                "answer": "NIT PAKA!!"
              },
              {
                "type": "dialog",
                "answer": "А где найти не коего big bob? И что за темница?",
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
              },
              {
                "type": "auto_trade",
                "answer": "Бывал я в казематах, big bob пропустил меня за 10 cash и куда то пропал, но в темнице не оказалось никакой персоны, я нашел только какую-то записку...",
                "next": "quest_1_done",
                "conditions": [
                  {
                    "type": "world_state",
                    "has": [
                      "quest_1_progress_10_cash_bob"
                    ]
                  },
                  {
                    "type": "items",
                    "has": [
                      "paper0"
                    ]
                  }
                ],
                "give": [],
                "take": [
                  10
                ]
              }
            ]
          },
          "quest_1_done": {
            "id": "quest_1_done",
            "type": "dialog",
            "text": "Ох что-же произошло! Можешь дать мне эту записку? Да и как я обещало, или не обещало, ладно вот твоя награда.",
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
                "give": [],
                "next": "quest_2"
              }
            ]
          },
          "quest_2": {
            "id": "quest_2",
            "type": "dialog",
            "text": "Хмм, похоже на какой-то шифр, я знаю одно существо которое может нам помочь расшифровать это, оно проживает справа от дома, возле небольшого фонтана, эм или в нем, оно часто там спит, вообщем ты оного сразу узнаешь. Сможешь пойти и узнать что нибудь про эту записку? Только скажи оному что от Kavavi",
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
                      "quest_2_progress_1"
                    ],
                    "not": [
                      "quest_2_done"
                    ]
                  }
                ],
                "answer": "Оно чет говорит, не понимаю, оно вообще умеет разговаривать?",
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
            "text": "Вот это да, должно быть его застали не в духе, обычно оно говорит понятно, чтоже придется разбираться самой",
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
                "next": "dialog_1",
                "give": [
                  "paper0"
                ]
              }
            ]
          }
        },
        "default_interaction_id": "dialog_1",
        "autoTrigger": "13"
      }
    },
    "-23": {
      "undefined_3_-23_0": {
        "id": "teleport",
        "name": "Subway/Cave",
        "icon": "icon-teleport0",
        "position": [
          3,
          2
        ],
        "map": "indoor1",
        "autoTrigger": "hover"
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