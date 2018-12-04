Vue.component('character', {
  props: ['config'],
  data: function () {
    return {
      previousHP: 0
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
        
        '<ul>',
        '<li>Defence: {{ config.character.defence }}</li>',
        '<li>Stamina: {{ config.character.stamina }}</li>',
        '<li>Agility: {{ config.character.agility }}</li>',
        '<li>Strength: {{ config.character.strength }}</li>',
        '<li>EXP: {{ config.character.experience }}</li>',
        '</ul>',
      '</div>'
	  	].join(''),
  methods: {
    getOption(option, label) {
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