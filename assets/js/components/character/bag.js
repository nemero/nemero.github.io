Vue.component('characterBag', {
  props: ['item', 'config'],
  data: function() {
    return {
      cant_equip: false
    }
  },
  template: [
        '<span class="game-icon" :class="infoItem" @click="useItem(item)" @animationend="cant_equip = false" :style="getIcon" @mouseover="setTooltip" @mouseleave="unsetTooltip">',
          // '<div class="tooltip">',
          //   '<ul>',
          //     '<li><b>{{ getOption(item, "name", "") }}</b></li>',
          //     '<li>{{ getOption(item, "level", "Level: ") }}</li>',
          //     '<li>{{ getOption(item, "damage", "Damage: ") }}</li>',
          //     '<li>{{ getOption(item, "strength", "Strength: ") }}</li>',
          //     '<li>{{ getOption(item, "stamina", "Stamina: ") }}</li>',
          //     '<li>{{ getOption(item, "agility", "Agility: ") }}</li>',
          //     '<li>{{ getOption(item, "defence", "Defence: ") }}</li>',
          //     '<li>{{ getOption(item, "health", "Health: ") }}</li>',
          //     '<li>{{ getOption(item, "text", "Note: ") }}</li>',
          //     '<li>{{ getOption(item, "price", "Price: ") }}</li>',
          //     '<li>{{ item }}</li>',
          //   '</ul>',
          // '</div>',
          '<span class="name"><b>{{ getOption(item, "name", "") }}</b></span>',
          '<span class="level">{{ getOption(item, "level", "lvl: ") }}</span>',
        '</span>'
      ].join(''),
      
  methods: {
    useItem: function (id) {
      // load item from db
      var bag_item = config.db.items[id]

      if (bag_item && bag_item.level > config.character.level) {
        this.cant_equip = true
        return
      }

      if (bag_item && bag_item.type == "weapon") {
    	  config.character.activeEquipment.weapon = id 
      }

      if (bag_item && bag_item.type == "gear" && bag_item.class) {
        config.character.activeEquipment[bag_item.class] = id
      }

      if (bag_item && bag_item.type == "consumable" && bag_item.class) {
        if (config.character.health == config.character.max_health) {
          this.cant_equip = true
          return
        }
        
        if (bag_item.class == "potion") {
          if (config.character.health + bag_item.health > config.character.max_health) {
            config.character.health = config.character.max_health
          } else {
            config.character.health += bag_item.health
          }
        }

        // remove item after using
        config.character.bag.splice(config.character.bag.indexOf(this.item), 1)
      }
    },
    getOption(id, option, label) {
      let item = config.db.items[id]
      if (item && item[option]) {
        return label + item[option]
      }
    },
    setTooltip: function () {
      let item = config.db.items[this.item]
      Vue.set(config, 'tooltip', item)
    },
    unsetTooltip: function () {
      Vue.delete(config, 'tooltip')
    }
  },
  computed: {
    infoItem: function () {
      let html = config.db.items[this.item]
      let data = {}

      if (!html) {
        return data
      }

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
      console.log(this.item)
      if (obj && obj.icon) {
        data['background'] =  'url(' + obj.icon + ') center center/cover'
      }

      return data
    },
  }
})