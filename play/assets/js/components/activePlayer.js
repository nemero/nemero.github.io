Vue.component('activePlayer', {
  props: ['character'],
  data: function () {
    return {
      previousHP: 0,
    }
  },
  template: [
      '<div class="ui-list-enemies-item" @click="selectPlayer" v-if="character.health > 0">',
        '<span class="enemy-model" :class="activecharacterClass"></span>',
        '<ul class="select-player" :class="isActive">',
          '<li>{{ character.name }}</li>',
          '<li>HP: {{ character.health }}</li>',
          '<li>Target: {{ getTarget }}</li>',
        '</ul>',
        '<div class="debuffs-box">',
          '<character-buff v-for="buff in character.buffs" :buff="buff"></character-buff>',
          '<character-debuff v-for="debuff in character.debuffs" :debuff="debuff"></character-debuff>',
        '</div>',
        '<div class="">{{ takeDamageHeal }}',
          '<hp-scroll class="hp-changes-up" :enemy="character"></hp-scroll>',
        '</div>',
      '</div>'
      ].join(''),
  methods: {
    selectPlayer: function () {
        this.character.activeTarget = this.character
    }
  },
  computed: {
    isActive: function () {
      let data = {}

      data['is_active'] = false
      if (this.character.activeTarget && this.character.activeTarget.object_idx == this.character.object_idx) {
        data['is_active'] = true  
      } 

      return data
    },
    getTarget: function () {
      if (this.character.activeTarget) {
        return this.character.activeTarget.name
      } else {
        return false
      }
    },
    takeDamageHeal: function () {
      //console.log(this.previousHP)
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
    activecharacterClass: function () {
      let data = {}
      if (this.character.model) {
        data['icon-' + this.character.model + '-right'] = true
      } else {
        data['icon-player-right'] = true
      }

      return data
    }
  }
})