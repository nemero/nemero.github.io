Vue.component('character', {
  props: ['character'],
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
            '<hp-scroll :enemy="character"></hp-scroll>',
          '</div>',
        '</div>',
        
        '<character-buff v-for="buff in character.buffs" :buff="buff"></character-buff>',
        '<character-debuff v-for="debuff in character.debuffs" :debuff="debuff"></character-debuff>',
        
        '<character-control :character="character"></character-control>',
        '<character-stats :character="character"></character-stats>',
      '</div>'
	  	].join(''),
  methods: {
    getOption: function (option, label) {
      let item = this.character
      if (item && item[option]) {
        return label + item[option]
      }
    },
    getHP: function () {
      let player = this.character

      player.max_health = player.base_health + ((player.level - 1) * config.level.up.health) + player.stamina
      if (player.max_health < player.health) {
        player.health = player.max_health
      }

      return '' + player.health + '/' + player.max_health
    },
  },
  computed: {
    getLeftHP: function() {
      let player = this.character
      let data = {}

      let percent = Math.round(player.health*100/player.max_health)
      data['width'] = percent + '%'

      return data
    },
    getAvatar: function() {
      let player = this.character
      let data = {}

      let avatar = player.avatar
      data['background'] =  'url(' + avatar + ') center center/cover'

      return data
    },
    takeDamageHeal: function () {
      if (this.previousHP == 0) {
        this.previousHP = this.character.health
      }

      if (this.previousHP !== this.character.health) {
        let differentHP = this.character.health - this.previousHP
        this.previousHP = this.character.health

        let type = "damage"
        if (differentHP < 0) {
          type = "damage"
        }

        if (differentHP > 0) {
          type = "healing"
        }
        // hpscroller 
        this.character.hpScroll.push({
          type: type,
          value: differentHP
        })
      }
    }
  }
})