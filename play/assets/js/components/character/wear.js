Vue.component('characterWear', {
  props: ['type', 'character'],
  data: function() {
    return {
      cant_equip: false
    }
  },
  template: [
        '<span class="game-icon" :class="infoItem" @click="removeItem(type)" :style="getIcon" @mouseover="setTooltip" @mouseleave="unsetTooltip">',
          '<span class="name"><b>{{ getOption(item, "name", "") }}</b></span>',
          '<span class="level">{{ getOption(item, "level", "lvl: ") }}</span>',
        '</span>'
      ].join(''),
      
  methods: {
    removeItem: function (id) {
      // load item from db
      var bag_item = config.db.items[this.item]

      if (bag_item) {
        // put wear in bag and remove from hero
        this.character.bag.push(this.item)
        this.character.activeEquipment[this.type] = null
        return
      }
      return

      if (bag_item && bag_item.type == "weapon") {
    	  this.character.activeEquipment.weapon = id 
      }

      if (bag_item && bag_item.type == "gear" && bag_item.class) {
        this.character.activeEquipment[bag_item.class] = id
      }

      if (bag_item && bag_item.type == "consumable" && bag_item.class) {
        if (bag_item.class == "potion") {
          if ((bag_item.health && this.character.health == this.character.max_health)
            || (bag_item.mp && this.character.mp == this.character.max_mp)
          ) {
            this.cant_equip = true
            return
          }

          if (bag_item.health) {
            if (this.character.health + bag_item.health > this.character.max_health) {
              this.character.health = this.character.max_health
            } else {
              this.character.health += bag_item.health
            }
          }

          if (bag_item.mp) {
            if (this.character.mp + bag_item.mp > this.character.max_mp) {
              this.character.mp = this.character.max_mp
            } else {
              this.character.mp += bag_item.mp
            }
          }
        }

        // remove item after using
        this.character.bag.splice(this.character.bag.indexOf(this.item), 1)
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
        data['equipped'] = this.character.activeEquipment.weapon == this.item ? true : false
      }
      if (html.type == "gear") {
        data['equipped'] = this.character.activeEquipment[html.class] == this.item ? true : false
      }

      return data
    },
    getIcon: function() {
      let obj = config.db.items[this.item]
      let data = {}

      if (obj && obj.icon) {
        data['background'] =  'url(' + obj.icon + ') center center/cover'
      }

      return data
    },
    item: function () {
      return this.character.activeEquipment[this.type]
    }
  }
})