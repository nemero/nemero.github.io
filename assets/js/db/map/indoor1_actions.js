var db_map_indoor1_actions = {
  "4": {
    "3": {
      "undefined_4_3_0": {
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