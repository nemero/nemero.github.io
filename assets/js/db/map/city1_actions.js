var db_map_city1_actions = {
  "8": {
    "8": {
      "undefined_8_8_1": {
        "id": "enemies",
        "name": "Enemies",
        "icon": "icon-speak0",
        "tile_icon": "icon-chel0",
        "cooldown": "",
        "enemies": [],
        "hidden": false,
        "interactions": {
          "dialog_1": {
            "id": "dialog_1",
            "type": "dialog",
            "text": "ЫАААААА..... ФЛЮП.. ФЛЮП..",
            "choices": [
              {
                "type": "exit",
                "answer": ".."
              },
              {
                "answer": "Слушай это ты самое оно? Можешь посмотреть эту записку? Я от Kivava",
                "next": "dialog_2",
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
                "type": "dialog"
              }
            ]
          },
          "dialog_2": {
            "id": "dialog_2",
            "type": "dialog",
            "text": "ЫЫАААААА... ",
            "choices": [
              {
                "answer": "YASNA!!!!!",
                "type": "exit",
                "state": [
                  "quest_2_progress_1"
                ]
              }
            ]
          }
        },
        "default_interaction_id": "dialog_1"
      }
    }
  },
  "9": {
    "4": {
      "undefined_9_4_0": {
        "id": "teleport",
        "name": "Subway/Cave",
        "icon": "icon-teleport0",
        "position": [
          5,
          5
        ],
        "map": "indoor1",
        "autoTrigger": "hover"
      }
    }
  },
  "13": {
    "6": {
      "undefined_13_6_0": {
        "id": "enemies",
        "name": "Enemies",
        "icon": "icon-speak0",
        "tile_icon": "",
        "cooldown": "",
        "enemies": [],
        "hidden": false,
        "autoTrigger": "13",
        "interactions": {
          "callboard": {
            "id": "callboard",
            "type": "dialog",
            "text": "Доска объявлений",
            "choices": [
              {
                "type": "exit",
                "answer": "Приемная города закрыта на реставрацию."
              },
              {
                "type": "exit",
                "answer": "В связи с беспорядками в северной части острова крайне не рекомендуется ходить к маяку без сопровождения."
              }
            ]
          }
        },
        "default_interaction_id": "callboard"
      }
    }
  },
  "16": {
    "7": {
      "undefined_16_7_0": {
        "id": "teleport",
        "name": "Subway/Cave",
        "icon": "icon-teleport0",
        "position": [
          -1,
          13
        ],
        "map": "world1",
        "autoTrigger": "hover"
      }
    },
    "8": {
      "undefined_16_8_0": {
        "id": "teleport",
        "name": "Subway/Cave",
        "icon": "icon-teleport0",
        "position": [
          -1,
          13
        ],
        "map": "world1",
        "autoTrigger": "hover"
      }
    }
  }
}