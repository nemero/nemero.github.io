Vue.component('characterTarget', {
  props: ['character'],
  template: [
      '<div v-if="character.activeTarget">',
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
            '<hp-scroll :enemy="character.activeTarget"></hp-scroll>',
          '</div>',
        '</div>',

        '<ul class="select-enemy">',
          '<li>Target: {{ getTarget }}</li>',
        '</ul>',

        '<character-buff v-for="buff in character.activeTarget.buffs" :buff="buff"></character-buff>',
        '<character-debuff v-for="debuff in character.activeTarget.debuffs" :debuff="debuff"></character-debuff>',
      '</div>'
      ].join(''),
  created: function () {
    window.addEventListener('keydown', this.keyDown)
  },
  methods: {
    getOption(option, label) {
      let item = this.character.activeTarget
      if (item && item[option]) {
        return label + item[option]
      }
    },
    getHP: function () {
      let item = this.character.activeTarget
      if (item && item['health']) {
        let parent = config.db.enemies[item.id]

        return '' + item.health + '/' + parent.health
      }
    },
    keyDown: function(e) {
        if (e.keyCode == 9) {
          e.preventDefault()
          
          // select next alive enemy
          let enemies = config.activeEnemies // TODO: refactor for enemies for current character
          let item = this.character.activeTarget
          let first_enemy = null

          // select first enemy if selected nothing yet
          if (!item) {
            for (enemy_id in enemies) {
              let enemy = enemies[enemy_id]

              if (enemy.health > 0) {
                this.character.activeTarget = enemy
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

          this.character.activeTarget = next_enemy;
        }
    },
  },
  computed: {
    getLeftHP: function() {
      let item = this.character.activeTarget
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
      if (this.character.activeTarget) {
        return true
      } else {
        return false
      }
    },
    getTarget: function () {
      if (this.character.activeTarget && this.character.activeTarget.activeTarget) {
        return this.character.activeTarget.activeTarget.name
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
      let target = this.character.activeTarget
      let data = {}

      if (target.avatar) {
        data['background'] =  'url(' + target.avatar + ') center center/cover'
      }

      return data
    },
    takeDamageHeal: function () {
      //console.log(this.previousHP)
      if (this.previousHP == 0) {
        this.previousHP = this.character.activeTarget.health
      }

      if (this.previousHP !== this.character.activeTarget.health) {
        let differentHP = this.character.activeTarget.health - this.previousHP
        this.previousHP = this.character.activeTarget.health

        let type = "damage"
        if (differentHP < 0) {
          type = "damage"
        }

        if (differentHP > 0) {
          type = "healing"
        }
        // hpscroller 
        this.character.activeTarget.hpScroll.push({
          type: type,
          value: differentHP
        })
      }
    }
  }
})