var db_map_city1_actions = {
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
        "icon": "icon-battle0",
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