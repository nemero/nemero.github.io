Vue.component('character', {
  props: ['character'],
  data: function () {
    return {
      show_bag: true,
      logs: false,
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
            '<span class="mp-bar">',
              '<span class="mp-text">{{ getMP() }}</span>',
              '<span class="mp-left" :style="getLeftMP"></span>',
              '<span class="mp-left-border"></span>',
            '</span>',
          '</div>',

          '<div class="">{{ takeDamageHeal }}',
            '<hp-scroll :enemy="character"></hp-scroll>',
          '</div>',
        '</div>',
        
        '<character-buff v-for="buff in character.buffs" :buff="buff"></character-buff>',
        '<character-debuff v-for="debuff in character.debuffs" :debuff="debuff"></character-debuff>',
        
        '<character-control :character="character"></character-control>',
        '<character-stats :character="character"></character-stats>',

        '<span @click="showBag" class="button">Bag</span>',
        '<div class="ui-main-bag" v-show="show_bag">',
          '<character-bag v-for="item in character.bag" :item="item" :character="character"></character-bag>',
        '</div>',

        '<span @click="logs = logs ? false : true" class="button">Logs</span>',
        '<div class="ui-main-bag" v-show="logs">',
          '{{ performance }}',
        '</div>',

        '<span @click="moveUi" class="button">Move UI</span>',
        '<span @click="mainMenu" class="button">Menu</span>',
      '</div>'
	  	].join(''),
  created: function () {
    this.init()
  },
  updated: function () {
    this.init()
  },
  methods: {
    init: function () {
      if (!this.character.cooldown) {
        Vue.set(this.character, "cooldown", {})
      }
      if (!this.character.buffs) {
        Vue.set(this.character, "buffs", {})
      }
      if (!this.character.debuffs) {
        Vue.set(this.character, "debuffs", {})
      }

      if (!this.character.max_health) {
        Vue.set(this.character, "max_health", this.character.base_health + ((this.character.level - 1) * config.level.up.health) + this.character.stamina)
      }

      if (!this.character.max_mp) {
        Vue.set(this.character, "max_mp", this.character.base_mp + ((this.character.level - 1) * config.level.up.mp) + this.character.intellect)
      }
    },
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
    getMP: function () {
      let player = this.character

      player.max_mp = player.base_mp + ((player.level - 1) * config.level.up.mp) + player.intellect
      if (player.max_mp < player.mp) {
        player.mp = player.max_mp
      }

      return '' + player.mp + '/' + player.max_mp
    },
    showBag: function () {
      if (this.show_bag) {
        this.show_bag = false
      } else {
        this.show_bag = true
      }
    },
    moveUi: function () {
      config.moveUi = config.moveUi ? false : true
    },
    mainMenu: function () {
      config.previousUI = config.activeUI
      config.activeUI = "game-menu"
    }
  },
  computed: {
    getLeftHP: function() {
      let player = this.character
      let data = {}

      let percent = Math.round(player.health*100/player.max_health)
      data['width'] = percent + '%'

      return data
    },
    getLeftMP: function() {
      let player = this.character
      let data = {}

      let percent = Math.round(player.mp*100/player.max_mp)
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
    },
    performance: function () {
      return config.performance
    }
  }
})