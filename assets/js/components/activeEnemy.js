Vue.component('activeEnemy', {
  props: ['enemy', 'config'],
  data: function () {
    return {
      previousHP: 0,
    }
  },
  template: [
      '<div class="ui-list-enemies-item" @click="selectEnemy" v-if="enemy.health > 0">',
        '<span class="enemy-model" :class="activeEnemyClass"></span>',
        '<ul class="select-enemy" :class="isActive">',
          '<li>{{ enemy.name }}</li>',
          '<li>HP: {{ enemy.health }}</li>',
          '<li>Target: {{ getTarget }} {{ getStats() }}</li>',
        '</ul>',
        '<character-buff v-for="buff in enemy.buffs" :buff="buff"></character-buff>',
        '<character-debuff v-for="debuff in enemy.debuffs" :debuff="debuff"></character-debuff>',
        '<div class="">{{ takeDamageHeal }}',
          '<hp-scroll class="hp-changes-up" :enemy="enemy"></hp-scroll>',
        '</div>',
      '</div>'
      ].join(''),
  methods: {
    selectEnemy: function () {
        this.config.character.activeTarget = this.enemy
    },
    getStats: function () {
      let buffs = this.enemy.buffs // activeBuffs TODO: refactor
      let debuff = this.enemy.debuff // activeDebuff TODO: refactor
      // init missed stats
      if (this.enemy.stamina == undefined) {
        Vue.set(this.enemy, "stamina", 0)
      }
      if (this.enemy.strength == undefined) {
        Vue.set(this.enemy, "strength", 0)
      }
      if (this.enemy.agility == undefined) {
        Vue.set(this.enemy, "agility", 0)
      }
      if (this.enemy.defence == undefined) {
        Vue.set(this.enemy, "defence", 0)
      }

      // base stats
      if (this.enemy.max_health == undefined) {
        Vue.set(this.enemy, "max_health", this.enemy.health)
      }
      if (this.enemy.base_health == undefined) {
        Vue.set(this.enemy, "base_health", this.enemy.health)
      }

      if (this.enemy.base_stamina == undefined) {
        Vue.set(this.enemy, "base_stamina", this.enemy.stamina)
      }
      if (this.enemy.base_strength == undefined) {
        Vue.set(this.enemy, "base_strength", this.enemy.strength)
      }
      if (this.enemy.base_agility == undefined) {
        Vue.set(this.enemy, "base_agility", this.enemy.agility)
      }
      if (this.enemy.base_defence == undefined) {
        Vue.set(this.enemy, "base_defence", this.enemy.defence)
      }

      let stamina = this.enemy.stamina ? this.enemy.base_stamina : 0
      let strength = this.enemy.strength ? this.enemy.base_strength : 0
      let agility = this.enemy.agility ? this.enemy.base_agility : 0
      let defence = this.enemy.defence ? this.enemy.base_defence : 0

      // calculatiog stats by buffs debuffs
      for (buff_idx in this.enemy.buffs) {
        let buff = this.enemy.buffs[buff_idx]
        
        if (!buff) {
          continue
        }

        buff = config.db.abilities[buff.id]
        if (buff.stamina) {
          stamina += buff.stamina
        }

        if (buff.strength) {
          strength += buff.strength
        }

        if (buff.agility) {
          agility += buff.agility
        }

        if (buff.defence) {
          defence += buff.defence
        }
        
      }

      for (debuff_idx in this.enemy.debuffs) {
        let debuff = this.enemy.debuffs[debuff_idx]
        
        if (!debuff) {
          continue
        }

        debuff = config.db.abilities[debuff.id]
        if (debuff.stamina) {
          console.log(debuff.stamina)
          stamina += debuff.stamina
        }

        if (debuff.strength) {
          strength += debuff.strength
        }

        if (debuff.agility) {
          agility += debuff.agility
        }

        if (debuff.defence) {
          defence += debuff.defence
        }
        
      }

      this.enemy.stamina = stamina
      this.enemy.strength = strength
      this.enemy.agility = agility
      this.enemy.defence = defence
      this.enemy.max_health = this.enemy.base_health + this.enemy.stamina

      //return this.character.activeEquipment
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
    },
    activeEnemyClass: function () {
      let data = {}
      if (this.enemy.model) {
        data[this.enemy.model] = true
      } else {
        data['icon-angry_bear1'] = true
      }

      return data
    }
  }
})