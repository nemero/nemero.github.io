Vue.component('activeEnemies', {
  props: ['enemy', 'config'],
  data: function () {
    return {
      previousHP: 0
    }
  },
  template: [
      '<div class="ui-list-enemies-item" v-if="enemy.health > 0">',
        '<ul class="select-enemy" @click="selectEnemy" :class="isActive">',
          '<li>{{ enemy.name }}</li>',
          '<li>HP: {{ enemy.health }}</li>',
          '<li>Target: {{ getTarget }}</li>',
        '</ul>',
        '<debuff v-for="debuff in enemy.debuffs" :debuff="debuff"></debuff>',
        '<div class="">{{ takeDamageHeal }}',
          '<hp-scroll class="hp-changes-up" :enemy="enemy"></hp-scroll>',
        '</div>',
      '</div>'
      ].join(''),
  methods: {
    selectEnemy: function () {
        this.config.character.activeTarget = this.enemy
    },
  },
  computed: {
    isActive: function () {
      let data = {}

      data['is_active'] = false
      if (config.character.activeTarget && config.character.activeTarget.object_idx == this.enemy.object_idx) {
        data['is_active'] = true  
      } 

      return data
    },
    getTarget: function () {
      if (this.enemy.activeTarget) {
        return this.enemy.activeTarget.name
      } else {
        return false
      }
    },
    takeDamageHeal: function () {
      //console.log(this.previousHP)
      if (this.previousHP == 0) {
        this.previousHP = this.enemy.health
      }

      if (this.previousHP !== this.enemy.health) {
        let differentHP = this.enemy.health - this.previousHP
        this.previousHP = this.enemy.health

        let type = "damage"
        if (differentHP < 0) {
          type = "damage"
        }

        if (differentHP > 0) {
          type = "healing"
        }
        // hpscroller 
        this.enemy.hpScroll.push({
          type: type,
          value: differentHP
        })
      }
    }
  }
})