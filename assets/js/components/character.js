Vue.component('character', {
  props: ['config'],
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
        
        '<ul>',
        '<li>Defence: {{ config.character.defence }}</li>',
        '<li>Stamina: {{ config.character.stamina }}</li>',
        '<li>Agility: {{ config.character.agility }}</li>',
        '<li>Strength: {{ config.character.strength }}</li>',
        '<li>EXP: {{ config.character.experience }}</li>',
        '<li>Map position: {{ config.character.position }}</li>',
        '<li>Resssrepecter: {{ config.character.dies }}</li>',
        '</ul>',
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
    moveAction: function (e) {
        let position = config.character.position
        let previous_pos = [...position]
        let new_position = [...position]

        if ([37, 38, 39, 40].indexOf(e.keyCode) >= 0) {
          pauseEvent(e);
        }

        if (37 == e.keyCode) {
          new_position[0] = parseInt(new_position[0] - 1)
        }
        if (39 == e.keyCode) {
          new_position[0] = parseInt(new_position[0] + 1)
        }
        if (38 == e.keyCode) {
          new_position[1] = parseInt(new_position[1] - 1)
        }
        if (40 == e.keyCode) {
          new_position[1] = parseInt(new_position[1] + 1)
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
          if (tile.map == "tile-map3") {
            return
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