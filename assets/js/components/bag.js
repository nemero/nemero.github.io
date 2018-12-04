Vue.component('bag', {
  props: ['item', 'config'],
  data: function() {
    return {
      cant_equip: false
    }
  },
  template: [
          '<span class="game-icon" :class="infoItem" @click="useItem(item)" @animationend="cant_equip = false" :style="getIcon">',
          '<div class="tooltip">',
            '<ul>',
              '<li><b>{{ getOption(item, "name", "") }}</b></li>',
              '<li>{{ getOption(item, "level", "Level: ") }}</li>',
              '<li>{{ getOption(item, "damage", "Damage: ") }}</li>',
              '<li>{{ getOption(item, "strength", "Strength: ") }}</li>',
              '<li>{{ getOption(item, "stamina", "Stamina: ") }}</li>',
              '<li>{{ getOption(item, "agility", "Agility: ") }}</li>',
              '<li>{{ getOption(item, "defence", "Defence: ") }}</li>',
              '<li>{{ getOption(item, "price", "Price: ") }}</li>',
            '</ul>',
          '</div>',
          '<span class="name"><b>{{ getOption(item, "name", "") }}</b></span>',
          '<span class="level">{{ getOption(item, "level", "lvl: ") }}</span>',
        '</span>'
      ].join(''),
      
  methods: {
    useItem: function (id) {
      // load item from db
      var bag_item = config.db.items[id]

      if (bag_item && bag_item.type == "weapon") {
        if (bag_item.level <= config.character.level) {
      	  config.character.activeEquipment.weapon = id 
        } else {
          // animate box
          this.cant_equip = true
        }
      }

      if (bag_item && bag_item.type == "gear" && bag_item.class) {
        if (bag_item.level <= config.character.level) {
          config.character.activeEquipment[bag_item.class] = id
        } else {
          // animate box
          this.cant_equip = true
        }
      }

      let stamina = 0
      let strength = 0
      let agility = 0
      let defence = 0
      for (wear_id in config.character.activeEquipment) {
        if (config.character.activeEquipment[wear_id]) {
          let wear = config.db.items[config.character.activeEquipment[wear_id]]
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

      config.character.activeEquipmentStats.stamina = stamina
      config.character.activeEquipmentStats.strength = strength
      config.character.activeEquipmentStats.agility = agility
      config.character.activeEquipmentStats.defence = defence
    },
    getOption(id, option, label) {
      let item = config.db.items[id]
      if (item && item[option]) {
        return label + item[option]
      }
    }
  },

  computed: {
    infoItem: function () {
      let html = config.db.items[this.item]
      let data = {}

      if (html.quality) {
        data[html.quality] = true
      }
      
      data['cant_equip'] = this.cant_equip
      data[html.icon] = true // showing icon class
      if (html.type == "weapon") {
        data['equipped'] = config.character.activeEquipment.weapon == this.item ? true : false
      }
      if (html.type == "gear") {
        data['equipped'] = config.character.activeEquipment[html.class] == this.item ? true : false
      }

      return data
    },
    getIcon: function() {
      let obj = config.db.items[this.item]
      let data = {}
      data['background'] =  'url(' + obj.icon + ') center center/cover'

      return data
    },
  }
})