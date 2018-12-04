Vue.component('target', {
  props: ['config'],
  template: [
      '<div v-if="config.character.activeTarget">',
        '<div class="target-box">',
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
            '<hp-scroll :enemy="config.character.activeTarget"></hp-scroll>',
          '</div>',
        '</div>',

        '<ul class="select-enemy">',
          '<li>Target: {{ getTarget }}</li>',
        '</ul>',

        '<debuff v-for="debuff in config.character.activeTarget.debuffs" :debuff="debuff"></debuff>',
      '</div>'
      ].join(''),
  created: function () {
    window.addEventListener('keydown', this.keyDown)
  },
  methods: {
    getOption(option, label) {
      let item = config.character.activeTarget
      if (item && item[option]) {
        return label + item[option]
      }
    },
    getHP: function () {
      let item = config.character.activeTarget
      if (item && item['health']) {
        let parent = config.db.enemies[item.id]

        return '' + item.health + '/' + parent.health
      }
    },
    keyDown: function(e) {
        if (e.keyCode == 9) {
          e.preventDefault()
          
          // select next alive enemy
          let enemies = config.activeEnemies
          let item = config.character.activeTarget
          let first_enemy = null

          // select first enemy if selected nothing yet
          if (!item) {
            for (enemy_id in enemies) {
              let enemy = enemies[enemy_id]

              if (enemy.health > 0) {
                config.character.activeTarget = enemy
                break
              }
            }

            return
          }

          let current_idx = item.object_idx
          let next_enemy = null
          let select_next_enemy = false
          let select_first_enemy = false

          for (enemy_id in enemies) {
            let enemy = enemies[enemy_id]
            
            if (!select_first_enemy && enemy.health > 0) {
              first_enemy = enemy
              select_first_enemy = true
            }

            if (select_next_enemy && enemy.health > 0) {
              next_enemy = enemy
              break
            }

            // found current enemy
            if (enemy.object_idx == current_idx) {
              select_next_enemy = true
            }
          }

          if (!next_enemy && first_enemy) {
            next_enemy = first_enemy
          }

          config.character.activeTarget = next_enemy;
        }
    },
  },
  computed: {
    getLeftHP: function() {
      let item = config.character.activeTarget
      let data = {}
      if (item && item['health']) {
        let parent = config.db.enemies[item.id]
        let percent = Math.round(item.health*100/parent.health)
        data['width'] = percent + '%'
      }

      data['color'] = 'black'
      return data
    },
    isSelected: function () {
      if (config.character.activeTarget) {
        return true
      } else {
        return false
      }
    },
    getTarget: function () {
      if (config.character.activeTarget && config.character.activeTarget.activeTarget) {
        return config.character.activeTarget.activeTarget.name
      } else {
        return false
      }
    },
    typeAbility: function () {
      let html = config.db.abilities[this.ability]
      //console.log(html, this.ability)
      let data = {}
      data['cant_use'] = this.cant_use
      data[html.type] = true
      data[html.icon] = true // showing icon class
      return data
    },
    getAvatar: function() {
      let target = config.character.activeTarget
      let data = {}

      if (target.avatar) {
        data['background'] =  'url(' + target.avatar + ') center center/cover'
      }

      return data
    },
    takeDamageHeal: function () {
      //console.log(this.previousHP)
      if (this.previousHP == 0) {
        this.previousHP = config.character.activeTarget.health
      }

      if (this.previousHP !== config.character.activeTarget.health) {
        let differentHP = config.character.activeTarget.health - this.previousHP
        this.previousHP = config.character.activeTarget.health

        let type = "damage"
        if (differentHP < 0) {
          type = "damage"
        }

        if (differentHP > 0) {
          type = "healing"
        }
        // hpscroller 
        config.character.activeTarget.hpScroll.push({
          type: type,
          value: differentHP
        })
      }
    }
  }
})