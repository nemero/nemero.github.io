var db_map_cave1_actions = {
  "3": {
    "4": {
      "undefined_4_4_0": {
        "id": "teleport",
        "name": "Subway/Cave",
        "icon": "icon-teleport0",
        "autoTrigger": "hover",
        "position": [
          5,
          3
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
          "monomate": 15,
        }, 
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
  "5": {
    "1": {
      "undefined_5_1_0": {
        "id": "enemies",
        "name": "Enemies",
        "icon": "icon-battle0",
        "tile_icon": "icon-angry_bear1",
        "cooldown": 20,
        "autoTrigger": "13",
        "enemies": [
          "bear1"
        ],
        "hidden": ""
      }
    }
  },
  "6": {
    "5": {
      "player0": {
        "id": "player",
        "name": "Player",
        "player_id": "player0",
        "icon": "icon-player0",
        "tile_icon": "icon-player0"
      }
    }
  }
}