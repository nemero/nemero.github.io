Vue.component('character', {
  props: ['config'],
  data: function () {
    return {
      isShowStats: false,
    }
  },
  template: [
      '<div>',
        '<div class="target-box union">',
          '<span class="avatar" :style="getAvatar">',
            '<span class="level">{{ getOption("level", "") }}</span>',
          '</span>',

          '<div>',
            '<div class="name">{{ getOption("name", "") }}</div>',
            '<span class="hp-bar">',
              '<span class="hp-text">{{ getHP() }}</span>',
              '<span class="hp-left" :style="getLeftHP"></span>',
              '<span class="hp-left-border"></span>',
            '</span>',
            '<span class="mp-bar"></span>',
          '</div>',

          '<div class="">{{ takeDamageHeal }}',
            '<hp-scroll :enemy="config.character"></hp-scroll>',
          '</div>',
        '</div>',
        
        '<buff v-for="buff in config.character.buffs" :buff="buff"></buff>',
        
        '<div class="character-stats">',
          '<span @click="showStats()">Show/Hide Stats</span>',
          '<ul v-show="isShowStats">',
            '<li>Defence: {{ config.character.defence }}</li>',
            '<li>Stamina: {{ config.character.stamina }}</li>',
            '<li>Agility: {{ config.character.agility }}</li>',
            '<li>Strength: {{ config.character.strength }}</li>',
            '<li>EXP: {{ config.character.experience }}</li>',
            '<li>Map position: {{ config.character.position }}</li>',
            '<li>Resssrepecter: {{ config.character.dies }}</li>',
            '<li>Active equipment</li>',
            '<li>Head: {{ config.character.activeEquipment.head }}</li>',
            '<li>Neck: {{ config.character.activeEquipment.neck }}</li>',
            '<li>Shoulders: {{ config.character.activeEquipment.shoulders }}</li>',
            '<li>Cloak: {{ config.character.activeEquipment.cloak }}</li>',
            '<li>Chest: {{ config.character.activeEquipment.chest }}</li>',
            '<li>Hands: {{ config.character.activeEquipment.hands }}</li>',
            '<li>Legs: {{ config.character.activeEquipment.legs }}</li>',
            '<li>Boots: {{ config.character.activeEquipment.boots }}</li>',
            '<li>Ring L: {{ config.character.activeEquipment.ring1 }}</li>',
            '<li>Ring R: {{ config.character.activeEquipment.ring2 }}</li>',
            '<li>Weapon: {{ config.character.activeEquipment.weapon }}</li>',
          '</ul>',
        '</div>',
      '</div>'
	  	].join(''),
  created: function () {
    window.addEventListener('keydown', this.moveAction)

    // load character position
    let npc_list = config.db.map[config.db.map.activeMap].layerEvents
    for (row_idx in npc_list) {
      for (col_idx in npc_list[row_idx]) {
        let npc = npc_list[row_idx][col_idx]

        if (npc[config.character.id]) {
          Vue.set(config.character.position, 0, parseInt(col_idx))
          Vue.set(config.character.position, 1, parseInt(row_idx))
        }
      }
    }
  },
  methods: {
    showStats: function () {
      if (this.isShowStats) {
        this.isShowStats = false
      } else {
        this.isShowStats = true
      }
    },
    moveAction: function (e) {
        // Todo: refactor with movePlayer virwMapTile component
        let position = config.character.position
        let previous_pos = [...position]
        let new_position = [...position]

        if ([37, 38, 39, 40].indexOf(e.keyCode) >= 0) {
          pauseEvent(e);
        }

        let directions = []
        if (37 == e.keyCode) {
          new_position[0] = parseInt(new_position[0] - 1)
          directions.push("left")
        }
        if (39 == e.keyCode) {
          new_position[0] = parseInt(new_position[0] + 1)
          directions.push("right")
        }
        if (38 == e.keyCode) {
          new_position[1] = parseInt(new_position[1] - 1)
          directions.push("up")
        }
        if (40 == e.keyCode) {
          new_position[1] = parseInt(new_position[1] + 1)
          directions.push("down")
        }
        
        // check if can character move on new position
        let cell_tiles = config.db.map[config.db.map.activeMap].map
        // user cant move on not exist tiles
        if (!cell_tiles[new_position[1]] || !cell_tiles[new_position[1]][new_position[0]]) {
          return
        }

        //let cant_move = true
        for (tile_idx in cell_tiles[new_position[1]][new_position[0]]) {
          let tile = cell_tiles[new_position[1]][new_position[0]][tile_idx]

          //let exclude_list = ['tile-map3']
          if (tile.map == "tile-map3" || (config.db.map.stop_tiles[tile.map] && config.db.map.stop_tiles[tile.map].indexOf(tile.id) >= 0)) {
            return
          }
        }

        // check direction from current postition
        for (tile_idx in cell_tiles[position[1]][position[0]]) {
          let tile = cell_tiles[position[1]][position[0]][tile_idx]

          // checking available direction 
          if (config.db.map.directions_tiles[tile.map] && config.db.map.directions_tiles[tile.map][tile.id]) {
            let can_move = true
            for (idx in directions) {
              let direction = directions[idx]
              if (!config.db.map.directions_tiles[tile.map][tile.id][direction]) {
                return // we cant move 
              }

            }
          }
        }        

        // check direction to new postition
        for (tile_idx in cell_tiles[new_position[1]][new_position[0]]) {
          let tile = cell_tiles[new_position[1]][new_position[0]][tile_idx]

          // checking available direction 
          if (config.db.map.directions_tiles[tile.map] && config.db.map.directions_tiles[tile.map][tile.id]) {
            let can_move = true
            for (idx in directions) {
              let direction = directions[idx]
              let new_direction = ""
              if (direction == "left") {
                new_direction = "right"
                if (!config.db.map.directions_tiles[tile.map][tile.id][new_direction]) {
                  return // we cant move 
                }
              }

              if (direction == "right") {
                new_direction = "left"
                if (!config.db.map.directions_tiles[tile.map][tile.id][new_direction]) {
                  return // we cant move 
                }
              }

              if (direction == "up") {
                new_direction = "down"
                if (!config.db.map.directions_tiles[tile.map][tile.id][new_direction]) {
                  return // we cant move 
                }
              }

              if (direction == "down") {
                new_direction = "up"
                if (!config.db.map.directions_tiles[tile.map][tile.id][new_direction]) {
                  return // we cant move 
                }
              }
            }
          }
        }

        if (37 == e.keyCode) {
          Vue.set(position, 0, parseInt(position[0] - 1))
        }
        if (39 == e.keyCode) {
          Vue.set(position, 0, parseInt(position[0] + 1))
        }
        if (38 == e.keyCode) {
          Vue.set(position, 1, parseInt(position[1] - 1))
        }
        if (40 == e.keyCode) {
          Vue.set(position, 1, parseInt(position[1] + 1))
        }

        this.changedCharacterPostiton(previous_pos)
    },
    getOption: function (option, label) {
      let item = config.character
      if (item && item[option]) {
        return label + item[option]
      }
    },
    getHP: function () {
      let player = config.character
      let stamina = 0
      let strength = 0
      let agility = 0
      let defence = config.character.base_defence

      stamina += config.character.activeEquipmentStats.stamina + config.character.activeBuffStats.stamina
      strength += config.character.activeEquipmentStats.strength + config.character.activeBuffStats.strength
      agility += config.character.activeEquipmentStats.agility + config.character.activeBuffStats.agility
      defence += config.character.activeEquipmentStats.defence + config.character.activeBuffStats.defence

      config.character.stamina = stamina
      config.character.strength = strength
      config.character.agility = agility
      config.character.defence = defence

      config.character.max_health = config.character.base_health + ((config.character.level - 1) * config.level.up.health) + stamina
      if (config.character.max_health < config.character.health) {
        config.character.health = config.character.max_health
      }

      return '' + player.health + '/' + player.max_health
    },
    changedCharacterPostiton: function (previous_pos) {
      let position = config.character.position

      if (!config.db.map[config.db.map.activeMap].layerEvents[position[1]]) {
        Vue.set(config.db.map[config.db.map.activeMap].layerEvents, position[1], {})  
      }
      if (!config.db.map[config.db.map.activeMap].layerEvents[position[1]][position[0]]) {
        Vue.set(config.db.map[config.db.map.activeMap].layerEvents[position[1]], position[0], {})  
      }

      //console.log(previous_pos, position)
      if (config.db.map[config.db.map.activeMap].layerEvents[previous_pos[1]] && config.db.map[config.db.map.activeMap].layerEvents[previous_pos[1]][previous_pos[0]]) {
        Vue.delete(config.db.map[config.db.map.activeMap].layerEvents[previous_pos[1]][previous_pos[0]], config.character.id)  
      }

      Vue.set(config.db.map[config.db.map.activeMap].layerEvents[position[1]][position[0]], config.character.id, {
              id: "7",
              player_id: config.character.id,
              name: "Player Kokoko",
              type: "player",
      })
    }
  },
  computed: {
    getLeftHP: function() {
      let player = config.character
      let data = {}

      let percent = Math.round(player.health*100/player.max_health)
      data['width'] = percent + '%'

      return data
    },
    getAvatar: function() {
      let player = config.character
      let data = {}

      let avatar = player.avatar
      data['background'] =  'url(' + avatar + ') center center/cover'

      return data
    },
    takeDamageHeal: function () {
      //console.log(this.previousHP)
      if (this.previousHP == 0) {
        this.previousHP = config.character.health
      }

      if (this.previousHP !== config.character.health) {
        let differentHP = config.character.health - this.previousHP
        this.previousHP = config.character.health

        let type = "damage"
        if (differentHP < 0) {
          type = "damage"
        }

        if (differentHP > 0) {
          type = "healing"
        }
        // hpscroller 
        config.character.hpScroll.push({
          type: type,
          value: differentHP
        })
      }
    }
  }
})