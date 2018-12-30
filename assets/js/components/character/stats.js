Vue.component('characterStats', {
  props: ['character'],
  data: function () {
    return {
      isShowStats: false,
    }
  },
  template: [
      '<div>',
        '<div class="character-stats">',
          '<span @click="showStats()">Show/Hide Stats</span>',
          '<ul v-show="isShowStats">',
            '<li>Money: {{ character.money }}</li>',
          	'<li>{{ getEquipment() }}</li>',
            '<li>Defence: {{ character.defence }}</li>',
            '<li>Stamina: {{ character.stamina }}</li>',
            '<li>Agility: {{ character.agility }}</li>',
            '<li>Strength: {{ character.strength }}</li>',
            '<li>EXP: {{ character.experience }}</li>',
            '<li>Map position: {{ character.position }}</li>',
            '<li>Resssrepecter: {{ character.dies }}</li>',
            '<li>Active equipment</li>',
            '<li>Head: {{ character.activeEquipment.head }}</li>',
            '<li>Neck: {{ character.activeEquipment.neck }}</li>',
            '<li>Shoulders: {{ character.activeEquipment.shoulders }}</li>',
            '<li>Cloak: {{ character.activeEquipment.cloak }}</li>',
            '<li>Chest: {{ character.activeEquipment.chest }}</li>',
            '<li>Hands: {{ character.activeEquipment.hands }}</li>',
            '<li>Legs: {{ character.activeEquipment.legs }}</li>',
            '<li>Boots: {{ character.activeEquipment.boots }}</li>',
            '<li>Ring L: {{ character.activeEquipment.ring1 }}</li>',
            '<li>Ring R: {{ character.activeEquipment.ring2 }}</li>',
            '<li>Weapon: {{ character.activeEquipment.weapon }}</li>',
          '</ul>',
        '</div>',
      '</div>'
	  	].join(''),
  methods: {
  	showStats: function () {
      if (this.isShowStats) {
        this.isShowStats = false
      } else {
        this.isShowStats = true
      }
    },

    getEquipment: function () {
    	let equipments = this.character.activeEquipment
    	let buffs = this.character.buffs // activeBuffs TODO: refactor
    	let debuff = this.character.debuff // activeDebuff TODO: refactor

    	// base stats
    	let stamina = 0 // each stat can have default value depended on race or class hero
	    let strength = 0
	    let agility = 0
	    let defence = this.character.base_defence

	    // stats of equipment wears or wears of equip ..
	    for (wear_id in this.character.activeEquipment) {
        if (this.character.activeEquipment[wear_id]) {
          let wear = config.db.items[this.character.activeEquipment[wear_id]]
          if (!wear) {
            continue
          }

          if (wear.stamina) {
            stamina += wear.stamina
          }

          if (wear.strength) {
            strength += wear.strength
          }

          if (wear.agility) {
            agility += wear.agility
          }

          if (wear.defence) {
            defence += wear.defence
          }
        }
      }

      // calculatiog stats by buffs debuffs
      for (buff_idx in this.character.buffs) {
        let buff = this.character.buffs[buff_idx]
        
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

      for (debuff_idx in this.character.debuffs) {
        let debuff = this.character.debuffs[debuff_idx]
        
        if (!debuff) {
          continue
        }

        debuff = config.db.abilities[debuff.id]
        if (debuff.stamina) {
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

      this.character.stamina = stamina
      this.character.strength = strength
      this.character.agility = agility
      this.character.defence = defence

      //return this.character.activeEquipment
    },

  }
})