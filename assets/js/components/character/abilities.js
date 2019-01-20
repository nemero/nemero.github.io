Vue.component('characterAbilities', {
  props: ['ability', 'config', 'cooldowns'],
  template: [
      '<span class="game-icon" :class="typeAbility" @click="useAbility(ability, config.character)" @animationend="cant_use = false" :style="getIcon" @mouseover="setTooltip" @mouseleave="unsetTooltip">',
            // '<div class="tooltip">',
            //   '<ul>',
            //     '<li><b>{{ getOption(ability, "name", "") }}</b></li>',
            //     '<li>{{ getOption(ability, "level", "Level: ") }}</li>',
            //     '<li>{{ getOption(ability, "damage", "Damage: ") }}</li>',
            //     '<li>{{ getOption(ability, "heal", "Heal: ") }}</li>',
            //     '<li>{{ getCooldown(ability) }}</li>',
            //   '</ul>',
            // '</div>',
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

        if (config.activeUI != "battle") {
          return
        }
        if (key_binding && key_binding.key == e.keyCode) {
          this.useAbility(this.ability, config.character)
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
    useAbility: function (item, enemy) {
      let ability_item = config.db.abilities[item]
      let character_level = enemy.level
      let strength = enemy.strength
      let critical_damage = getRandomArbitrary(1, 100) <= enemy.agility ? 2 : 1

      // try run
      if (ability_item.type == "escape") {
        let is_success = getRandomArbitrary(1, 100) <= ability_item.chance ? true : false
        if (is_success) {
          // remove active enemies & targets
          enemy.activeTarget = null
          config.activeEnemies = []
          config.activeUI = "world"
          
          // change map
          // config.db.map.activeMap = config.prevMap
          // Vue.set(config.character.position, 0, config.prevPosition[0])
          // Vue.set(config.character.position, 1, config.prevPosition[1])

          return
        }

        this.cant_use = true
      }


      // if cant use ability
      if (ability_item.level > character_level || (enemy.cooldown[item] && enemy.cooldown[item] > 0) ) {
        this.cant_use = true
        return false
      }

      // apply/refresh buff
      if (ability_item.type == "damage_dot") {
        if (!enemy.activeTarget) {
          this.cant_use = true
          return false
        }

        this.damageDot(ability_item, enemy)
      }

      // aoe damage
      if (ability_item.type == "damage_aoe") {
        if (!enemy.activeTarget) {
          this.cant_use = true
          return false
        }

        this.enemyDamageAoe(ability_item, enemy)
      }

      // default attack
      if (ability_item.id == "attack") {
        if (!enemy.activeTarget) {
          this.cant_use = true
          return false
        }

        let bag_item = config.db.items[enemy.activeEquipment.weapon]
        damage = (bag_item.damage + strength) * critical_damage
        this.kick(damage, enemy.activeTarget)
      }

      // default heal
      if (ability_item.type == "heal") {
        let heal = ability_item.heal
        if (enemy.health + heal > enemy.max_health) {
          enemy.health = enemy.max_health
        } else {
          enemy.health += heal
        }
      }

      // applying buff ability
      this.useBuff(ability_item, enemy)
      this.useDebuff(ability_item, enemy)

      // character use damage ability
      if (ability_item.type == "damage" && ability_item.id != "attack") {
        let damage = (ability_item.damage + strength) * critical_damage
        this.kick(damage, enemy.activeTarget)
      }

      // buff controll ticks
      this.buffsTick(enemy)
      // debuff controll ticks
      this.debuffsTick(enemy)

      // IMPORTANT PLACE: tick step
      config.step += 1 

      // cooldown controll
      this.cooldownTick(ability_item, enemy)

      // enemies buff/debuf tick
      this.enemiesTick()
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
    cooldownTick: function(ability_item, enemy) {
      // set cooldown for current ability
      let cooldown = ability_item.cooldown
      Vue.set(enemy.cooldown, ability_item.id, cooldown)

      // time left one point for all active cooldowns
      for (cooldown_id in enemy.cooldown) {
        let cooldown_left = enemy.cooldown[cooldown_id]
        if (cooldown_left > 0) {
          enemy.cooldown[cooldown_id] -= 1
        }
      }
    },
    useBuff: function (ability_item, enemy) {
      // apply base effect for heal buf
      if (ability_item.type == "heal_buff") {
        let heal = ability_item.heal
        if (enemy.health + heal > enemy.max_health) {
          enemy.health = enemy.max_health
        } else {
          enemy.health += heal
        }
      }

      // apply/refresh buff
      if (ability_item.type == "buff" || ability_item.type == "heal_buff") {
        if (!enemy.buffs[ability_item.id]) {
          Vue.set(enemy.buffs, ability_item.id, {
            id: ability_item.id, 
            time: ability_item.time
          })
        } else {
          enemy.buffs[ability_item.id]["time"] = ability_item.time
        }
      }
    },
    useDebuff: function (ability_item, enemy) {
      // apply/refresh debuff
      if (ability_item.type == "debuff") {
        if (!enemy.activeTarget.debuffs[ability_item.id]) {
          Vue.set(enemy.activeTarget.debuffs, ability_item.id, {
            id: ability_item.id, 
            time: ability_item.time
          })
        } else {
          enemy.activeTarget.debuffs[ability_item.id]["time"] = ability_item.time
        }
      }
    },
    buffsTick: function (enemy) {
      for (buff_idx in enemy.buffs) {
        let buff = enemy.buffs[buff_idx]
        
        if (buff && buff.time > 0) {
          buff.time -= 1

          // call extra property of buffs
          let ability = config.db.abilities[buff.id]
          if (ability.type == "heal_buff") {
            if (enemy.health + ability.heal_tick < enemy.max_health) {
              enemy.health += ability.heal_tick
            } else {
              enemy.health = enemy.max_health
            }
          }
        }

        if (buff && buff.time <= 0) {
          enemy.buffs[buff_idx] = null
        }
      }
    },
    debuffsTick: function (enemy) {
      for (debuff_idx in enemy.debuffs) {
        let debuff = enemy.debuffs[debuff_idx]

        if (debuff && debuff.time > 0) {
          debuff.time -= 1  

          // execute debuff
          let ability_item = config.db.abilities[debuff_idx]
          if (ability_item.type == "damage_dot") {
            let critical_damage = getRandomArbitrary(1, 100) <= enemy.agility ? 2 : 1
            let scaling = ability_item.strength_scaling ? ability_item.strength_scaling : 0
            let strength = enemy.strength ? enemy.strength : 0
            // recalculate character stats
            let damage_tick = ability_item.damage_tick + Math.trunc((scaling/100) * strength) // 0.2 * 4 -> 4 + 0.8 = 4.8
            //console.log(scaling, strength, damage_tick)
            let damage = (damage_tick) * critical_damage
            this.kick(damage, enemy)
          }
        } 

        if (debuff && debuff.time <= 0) {
          enemy.debuffs[debuff_idx] = null
        }
      }
    },
    damageDot: function (ability_item, enemy) {
      let critical_damage = getRandomArbitrary(1, 100) <= enemy.agility ? 2 : 1
      let damage = 0

      if (!enemy.activeTarget.debuffs[ability_item.id]) {
        Vue.set(enemy.activeTarget.debuffs, ability_item.id, {
          id: ability_item.id, 
          time: ability_item.time
        })

        damage = (ability_item.damage) * critical_damage
      } else {
        enemy.activeTarget.debuffs[ability_item.id]["time"] = ability_item.time
        damage = (ability_item.damage) * critical_damage
      }
      
      this.kick(damage, enemy.activeTarget)
    },
    enemyDamageAoe: function (ability_item, npc) {
      let count = ability_item.damage_count - 1
      let strength = npc.strength
      let critical_damage = getRandomArbitrary(1, 100) <= npc.agility ? 2 : 1
      let active_enemy = npc.activeTarget
      let damage_tick = ability_item.damage_aoe + Math.trunc((ability_item.strength_scaling/100) * strength) // 0.2 * 4 -> 4 + 0.8 = 4.8
      let damage = damage_tick * critical_damage

      // damage active target
      let damage_target = ability_item.damage_aoe + ability_item.damage + Math.trunc((ability_item.strength_scaling/100) * strength) // 0.2 * 4 -> 4 + 0.8 = 4.8
      let damage_target_final = damage_target * critical_damage
      this.kick(damage_target_final, npc.activeTarget)
      
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
          
          // roll items from enemy
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
      if (all_enemies_down) {
        // bug: checking only player position, need also check direction player cell
        // TODO: add enemies position in battle mode
        let layers = config.db.map[config.db.map.activeMap].layerEvents[config.character.position[1]][config.character.position[0]]
        for (layer_idx in layers) {
          let layer = layers[layer_idx]
          if (layer.id == "enemies" && layer.cooldown) {
            // set cooldown for first enemies layer
            Vue.set(layer, "cooldown_left", config.step + layer.cooldown)
            break
          }

          if (layer.id == "enemies" && !layer.cooldown) {
            // remove first enemies layer
            Vue.delete(layers, layer_idx)
            break
          }
        }

        // change map
        config.activeUI = "world"
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
          // default ability autoattack
          let ability_item = {
            id: "attack"
          }

          if (!enemy.max_health) {
            let max_health = config.db.enemies[enemy.id].health
            Vue.set(enemy, "max_health", max_health)
          }

          // beat from enemy by hero
          // select ability
          if (enemy.script) {
            // detect current phase
            let phases = []
            for (phase in enemy.script) {
              phases.push(parseInt(phase))
            }

            for (idx in phases.sort().reverse()) {
              let one_percent = (enemy.max_health/100) // 
              let phase = phases[idx]

              // select active phase
              if (enemy.health > one_percent * phase) {
                // get rotation
                let rotation = enemy.script[phase]
                if (!enemy.script_idx || enemy.script_idx >= rotation.length) {
                  Vue.set(enemy, "script_idx", 0)
                }

                ability_item = config.db.abilities[rotation[enemy.script_idx]]
                Vue.set(enemy, "script_idx", enemy.script_idx + 1)
                break
              }
            }
          }

          let critical_damage = getRandomArbitrary(1, 100) <= enemy.agility ? 2 : 1
          let damage = 0
          let strength = enemy.strength ? enemy.strength : 0

          if (ability_item.type == "damage" && ability_item.id != "attack") {
            damage = (ability_item.damage + strength) * critical_damage
            this.kick(damage, target)
          }

          // default attack
          if (ability_item.id == "attack") {
            damage = (enemy.damage + strength) * critical_damage
            this.kick(damage, target)
          }

          // aoe damage
          if (ability_item.type == "damage_aoe") {
            // not need now
            //this.enemyDamageAoe(ability_item, enemy)
          }

          // apply/refresh buff
          if (ability_item.type == "damage_dot") {
            this.damageDot(ability_item, enemy)
          }

          // default heal
          if (ability_item.type == "heal") {
            let heal = ability_item.heal
            if (enemy.health + heal > enemy.max_health) {
              enemy.health = enemy.max_health
            } else {
              enemy.health += heal
            }
          }

          // applying buff ability
          this.useBuff(ability_item, enemy)
          this.useDebuff(ability_item, enemy)

          // buff controll ticks
          //this.buffsTick(enemy)
          //this.debuffsTick(enemy) 
          
          //console.log(ability_item.id, ability_item.type)
          if (target.health <= 0) {
            logger('Hero is OWN! PZZZZZ RESURRECT! VIUUVIUU... ')
            config.activeUI = "game-over"
            //target.health = target.max_health
            //config.character.dies++
          }
        } 
      }
    },
    enemiesTick: function () {
      for (enemy_idx in config.activeEnemies) {
        let enemy = config.activeEnemies[enemy_idx]
        // buff controll ticks
        this.buffsTick(enemy)
        this.debuffsTick(enemy) 
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
    },
    setTooltip: function () {
      let ability_item = config.db.abilities[this.ability]
      Vue.set(config, 'tooltip', ability_item)
    },
    unsetTooltip: function () {
      Vue.delete(config, 'tooltip')
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