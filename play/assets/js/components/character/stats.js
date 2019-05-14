Vue.component('characterStats', {
  props: ['character'],
  template: [
      '<div>',
        '<div class="character-stats" v-show="isShow()">',
          '<span class="button" @click="showStats()">Close</span>',
          '<div class="hero-box">',
            '<div class="hero-gear">',
              '<h3>Active equipment</h3>',
              '<div>',
                '<span class="hero-head">',
                  '<character-wear type="head" :character="character"></character-wear>',
                '</span>',
                
                '<div>',                
                  '<span class="hero-shoulder">',
                    '<character-wear type="shoulder" :character="character"></character-wear>',
                  '</span>',
                  '<span class="hero-neck">',
                    '<character-wear type="neck" :character="character"></character-wear>',
                  '</span>',
                '</div>',

                '<div>',
                  '<span class="hero-cloak">',
                    '<character-wear type="cloak" :character="character"></character-wear>',
                  '</span>',
                  '<span class="hero-chest">',
                    '<character-wear type="chest" :character="character"></character-wear>',
                  '</span>',
                '</div>',
                
                '<div>',
                  '<span class="hero-ring1">',
                    '<character-wear type="ring1" :character="character"></character-wear>',
                  '</span>',
                  '<span class="hero-hands">',
                    '<character-wear type="hands" :character="character"></character-wear>',
                  '</span>',
                  '<span class="hero-ring2">',
                    '<character-wear type="ring2" :character="character"></character-wear>',
                  '</span>',
                '</div>',

                '<div class="align-center">',
                  '<span class="hero-legs">',
                    '<character-wear type="legs" :character="character"></character-wear>',
                  '</span>',
                  '<span class="hero-boots">',
                    '<character-wear type="boots" :character="character"></character-wear>',
                  '</span>',
                '</div>',


                '<span class="hero-weapon">',
                  '<character-wear type="weapon" :character="character"></character-wear>',
                '</span>',
              '</div>',
            '</div>',

            '<ul class="hero-info">',
              '<li>Money: {{ character.money }}</li>',
              '<li>{{ getEquipment() }}</li>',
              '<li>Defence: {{ character.defence }}</li>',
              '<li>Stamina: {{ character.stamina }}</li>',
              '<li>Agility: {{ character.agility }}</li>',
              '<li>Strength: {{ character.strength }}</li>',
              '<li>Intellect: {{ character.intellect }}</li>',
              '<li>EXP: {{ character.experience }}</li>',
              '<li>Map position: {{ character.position }}</li>',
              '<li>Resssrepecter: {{ character.dies }}</li>',
            '</ul>',
          '</div>',
        '</div>',
      '</div>'
	  	].join(''),
  methods: {
  	showStats: function () {
      if (config.heroUi) {
        config.heroUi = false
      } else {
        config.heroUi = true
      }
    },
    isShow: function () {
      return config.heroUi
    },

    getEquipment: function () {
    	let equipments = this.character.activeEquipment
    	let buffs = this.character.buffs // activeBuffs TODO: refactor
    	let debuff = this.character.debuff // activeDebuff TODO: refactor

    	// base stats
    	let stamina = 0 // each stat can have default value depended on race or class hero
	    let strength = 0
	    let agility = 0
      let intellect = 0
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

          if (wear.intellect) {
            intellect += wear.intellect
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
        
        if (buff.intellect) {
          intellect += buff.intellect
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
        
        if (debuff.intellect) {
          intellect += debuff.intellect
        }
      }

      this.character.stamina = stamina
      this.character.strength = strength
      this.character.agility = agility
      this.character.defence = defence
      this.character.intellect = intellect

      //return this.character.activeEquipment
    },

  }
})