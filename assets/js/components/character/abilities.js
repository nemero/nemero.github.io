Vue.component('characterAbilities', {
  props: ['ability', 'config', 'cooldowns'],
  template: [
      '<span class="game-icon" :class="typeAbility" @click="useAbility(ability)" @animationend="cant_use = false" :style="getIcon">',
            '<div class="tooltip">',
              '<ul>',
                '<li><b>{{ getOption(ability, "name", "") }}</b></li>',
                '<li>{{ getOption(ability, "level", "Level: ") }}</li>',
                '<li>{{ getOption(ability, "damage", "Damage: ") }}</li>',
                '<li>{{ getOption(ability, "heal", "Heal: ") }}</li>',
                '<li>{{ getCooldown(ability) }}</li>',
              '</ul>',
            '</div>',
            '<span class="bind">{{ getBind() }}</span>',
            '<span class="label">{{ getOption(ability, "damage", "") }} {{ getOption(ability, "heal", "") }}</span>',
            '<span class="level">{{ getOption(ability, "level", "lvl: ") }}</span>',
            '<span class="cooldown" v-if="getCooldownLeft(ability) !== 0">{{ getCooldownLeft(ability) }}</span>',
          '</span>'
      ].join(''),
  created: function () {
    window.addEventListener('keydown', this.testest)
  },
  data: function() {
    return {
      cant_use: false,
    }
  },
  methods: {
    testest: function(e) {
        let key = e.key // char
        let ability_item = config.db.abilities[this.ability]
        let key_binding = config.character.keyBindings[this.ability]

        if (key_binding && key_binding.key == e.keyCode) {
          this.useAbility(this.ability)
        }
    },
    getBind: function () {
      let bindings = config.character.keyBindings
      let value = ''
      if (bindings[this.ability]) {
        let bind = bindings[this.ability]
        value = String.fromCharCode(bind.key)
      }

      return value
    },
    getOption: function (id, option, label) {
      let item = config.db.abilities[id]

      // for attack ability got active weapon damage + strength
      if (id == "attack") {
        if (config.character.activeEquipment.weapon) {
          item = config.db.items[config.character.activeEquipment.weapon]
        } else {
          return label + "-"
        }
      }

      if (item && option == "damage" && item[option]) {
        let damage = item[option] + config.character.strength
        return label + damage
      }

      if (item && item[option]) {
        return label + item[option]
      }
    },
    useAbility: function (item) {
      let ability_item = config.db.abilities[item]
      let character_level = config.character.level
      let strength = config.character.strength
      let critical_damage = getRandomArbitrary(1, 100) <= config.character.agility ? 2 : 1
      let active_enemy = config.character.activeTarget

      // if cant use ability
      if (ability_item.level > character_level || (config.character.cooldown[item] && config.character.cooldown[item] > 0) ) {
        this.cant_use = true
        return false
      }

      // apply/refresh buff
      if (ability_item.type == "damage_dot") {
        if (!active_enemy) {
          this.cant_use = true
          return false
        }

        this.enemyDamageDot(ability_item, active_enemy)
      }

      // aoe damage
      if (ability_item.type == "damage_aoe") {
        if (!active_enemy) {
          this.cant_use = true
          return false
        }

        this.enemyDamageAoe(ability_item)
      }

      // default attack
      if (ability_item.id == "attack") {
        if (!active_enemy) {
          this.cant_use = true
          return false
        }

        let bag_item = config.db.items[config.character.activeEquipment.weapon]
        damage = (bag_item.damage + strength) * critical_damage
        this.kick(damage, active_enemy)
      }

      // default heal
      if (ability_item.type == "heal") {
        let heal = ability_item.heal
        if (config.character.health + heal > config.character.max_health) {
          config.character.health = config.character.max_health
        } else {
          config.character.health += heal
        }
      }

      // applying buff ability
      this.characterUseBuff(ability_item)      

      // character use damage ability
      if (ability_item.type == "damage" && ability_item.id != "attack") {
        let damage = (ability_item.damage + strength) * critical_damage
        this.kick(damage, active_enemy)
      }

      // cooldown for enemies debuffs buffs
      this.enemyTick()

      // buff controll ticks
      this.characterBuffsTick()

      // IMPORTANT PLACE: tick step
      config.step += 1 

      // player cooldown controll
      this.characterCooldownTick(ability_item)

      // check is enemy down & get loot if down
      this.enemyDownCheck()

      // attack enemies to targets
      this.enemyAttack()
    },
    kick: function (damage, target) {
      if (target && target.health > 0) {
        let enemy_defence = target.defence
        let reduction_damage = Math.round((damage/100)*enemy_defence)
        target.health -= damage - reduction_damage
        logger('Enemy damage: ' + (damage - reduction_damage) + ', absorbed ' + reduction_damage)
      }
    },
    characterCooldownTick: function(ability_item) {
      // set cooldown for current ability
      let cooldown = ability_item.cooldown
      Vue.set(config.character.cooldown, ability_item.id, cooldown)

      // time left one point for all active cooldowns
      for (cooldown_id in config.character.cooldown) {
        let cooldown_left = config.character.cooldown[cooldown_id]
        if (cooldown_left > 0) {
          config.character.cooldown[cooldown_id] -= 1
        }
      }
    },
    characterUseBuff: function (ability_item) {
      // apply base effect for heal buf
      if (ability_item.type == "heal_buff") {
        let heal = ability_item.heal
        if (config.character.health + heal > config.character.max_health) {
          config.character.health = config.character.max_health
        } else {
          config.character.health += heal
        }
      }

      // apply/refresh buff
      if (ability_item.type == "buff" || ability_item.type == "heal_buff") {
        if (!config.character.buffs[ability_item.id]) {
          Vue.set(config.character.buffs, ability_item.id, {
            id: ability_item.id, 
            time: ability_item.time
          })
        } else {
          config.character.buffs[ability_item.id]["time"] = ability_item.time
        }
      }
    },
    characterBuffsTick: function () {
      for (buff_idx in config.character.buffs) {
        let buff = config.character.buffs[buff_idx]
        
        if (buff && buff.time > 0) {
          buff.time -= 1

          // call extra property of buffs
          let ability = config.db.abilities[buff.id]
          if (ability.type == "heal_buff") {
            if (config.character.health + ability.heal_tick < config.character.max_health) {
              config.character.health += ability.heal_tick
            } else {
              config.character.health = config.character.max_health
            }
          }
        }

        if (buff && buff.time <= 0) {
          config.character.buffs[buff_idx] = null
        }
      }
    },
    enemyDamageDot: function (ability_item, active_enemy) {
      let critical_damage = getRandomArbitrary(1, 100) <= config.character.agility ? 2 : 1

      if (!active_enemy.debuffs[ability_item.id]) {
        Vue.set(config.activeEnemies[active_enemy.object_idx].debuffs, ability_item.id, {
          id: ability_item.id, 
          time: ability_item.time
        })

        let damage = (ability_item.damage) * critical_damage
        this.kick(damage, active_enemy)
      } else {
        config.activeEnemies[active_enemy.object_idx].debuffs[ability_item.id]["time"] = ability_item.time

        let damage = (ability_item.damage) * critical_damage
        this.kick(damage, active_enemy)
      }
    },
    enemyDamageAoe: function (ability_item) {
      let count = ability_item.damage_count - 1
      let strength = config.character.strength
      let critical_damage = getRandomArbitrary(1, 100) <= config.character.agility ? 2 : 1
      let active_enemy = config.character.activeTarget
      let damage_tick = ability_item.damage_aoe + Math.trunc((ability_item.strength_scaling/100) * strength) // 0.2 * 4 -> 4 + 0.8 = 4.8
      let damage = damage_tick * critical_damage

      // damage active target
      let damage_target = ability_item.damage_aoe + ability_item.damage + Math.trunc((ability_item.strength_scaling/100) * strength) // 0.2 * 4 -> 4 + 0.8 = 4.8
      let damage_target_final = damage_target * critical_damage
      this.kick(damage_target_final, config.character.activeTarget)
      
      // damage other active targets
      for (enemy_idx in config.activeEnemies) {
        let enemy = config.activeEnemies[enemy_idx]
        if (enemy == active_enemy) {
          continue
        }

        if (count == 0) {
          break
        }

        this.kick(damage, enemy)
        count--;
      }
    },
    enemyDownCheck: function () {
      let all_enemies_down = true
      for (enemy_idx in config.activeEnemies) {
        let enemy = config.activeEnemies[enemy_idx]

        // check is enemy down
        if (enemy && !enemy.dead && enemy.health <= 0) {
          let exp = enemy.experience
          
          logger('Enemy ' + enemy.name + ' is down, you got ' + exp + ' experience.')
          
          // roll items from emeny
          let items = config.db.loot[enemy.id]['items']
          let loot = []
          for (item in items) {
            let percent = items[item]
            if (getRandomArbitrary(0, 100) >= 100 - percent) {
              loot.push(item)
              config.character.bag.push(item)
            }
          }

          config.character.experience += exp
          //config.character.cooldown = {}
          if (enemy == config.character.activeTarget) {
            config.character.activeTarget = null
          }
          Vue.set(enemy, 'dead', true)

          // calculate level
          if (config.character.level < Math.trunc(config.character.experience/config.level.experience)) {
            config.character.level = Math.trunc(config.character.experience/config.level.experience)
            config.character.max_health = config.character.base_health + ((config.character.level - 1) * config.level.up.health) + config.character.stamina
            config.character.health = config.character.max_health
          }
        }

        if (enemy.dead !== true) {
          all_enemies_down = false
        }
      }

      // todo refact
      //console.log(all_enemies_down)
      if (all_enemies_down) {
        let layers = config.db.map[config.db.map.activeMap].layerEvents[config.character.position[1]][config.character.position[0]]
        for (layer_idx in layers) {
          let layer = layers[layer_idx]
          if (layer.id == "enemies" && layer.cooldown) {
            // remove first enemies layer
            Vue.set(layer, "cooldown_left", config.step + layer.cooldown)
            break
          }
        }
      }
    },
    enemyAttack: function () {
      for (enemy_idx in config.activeEnemies) {
        let enemy = config.activeEnemies[enemy_idx]

        if (!enemy || enemy.dead) {
          continue;
        }

        if (!enemy.activeTarget) {
          enemy.activeTarget = config.character
        }

        let target = enemy.activeTarget
        // check enemy is live after attack
        if (target && target.health > 0) {
          // beat from enemy by hero
          let damage = enemy.damage
          let hero_defence = target.defence
          let reduction_damage = Math.round((damage/100) * hero_defence)
          target.health -= damage - reduction_damage
          logger('Take damage: ' + (damage - reduction_damage) + ', absorbed ' + reduction_damage)

          if (target.health <= 0) {
            logger('Hero is OWN! PZZZZZ RESURRECT! VIUUVIUU... ')
            target.health = target.max_health
            config.character.dies++
          }
        } 
      }
    },
    enemyTick: function () {
      for (enemy_idx in config.activeEnemies) {
        let enemy = config.activeEnemies[enemy_idx]
        for (debuff_idx in enemy.debuffs) {
          let debuff = enemy.debuffs[debuff_idx]
          if (debuff.time > 0) {
            // execute debuff
            let ability_item = config.db.abilities[debuff_idx]
            if (ability_item.type == "damage_dot") {
              let critical_damage = getRandomArbitrary(1, 100) <= config.character.agility ? 2 : 1
              let scaling = ability_item.strength_scaling ? ability_item.strength_scaling : 0
              let strength = config.character.strength
              // recalculate character stats
              let damage_tick = ability_item.damage_tick + Math.trunc((scaling/100) * strength) // 0.2 * 4 -> 4 + 0.8 = 4.8
              //console.log(scaling, strength, damage_tick)
              let damage = (damage_tick) * critical_damage
              this.kick(damage, enemy)
            }
            debuff.time -= 1  
          } else {
            debuff = null
          }
        }
        
      }
    },
    getCooldown: function (item) {
      let cooldown = 0
      if (config.character.cooldown[item] !== undefined) {
        cooldown = config.character.cooldown[item]
      }
      //if (config.character.cooldown[item] !== undefined/* && config.character.cooldown[item] > 0*/) {
        return "Cooldown: " + cooldown + '/' + (config.db.abilities[item].cooldown - 1)
      //}
    },
    getCooldownLeft: function (item) {
      let cooldown = 0
      if (config.character.cooldown[item] !== undefined) {
        cooldown = config.character.cooldown[item]
      }
      //if (config.character.cooldown[item] !== undefined/* && config.character.cooldown[item] > 0*/) {
        return cooldown
      //}
    }
  },

  computed: {
    typeAbility: function () {
      let html = config.db.abilities[this.ability]
      //console.log(html, this.ability)
      let data = {}
      data['cant_use'] = this.cant_use
      data[html.type] = true
      data[html.icon] = true // showing icon class
      return data
    },
    getIcon: function() {
      let obj = config.db.abilities[this.ability]
      let data = {}
      data['background'] =  'url(' + obj.icon + ') center center/cover'

      return data
    },
  },
})