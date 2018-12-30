Vue.component('activeTrade', {
	props: ['seller'],
  template: [
      '<div class="">',
        '<span class="money">Cash: {{ getCharacter.money }}</span>',
       	
        '<div class="flex flex-top">',
          '<trade-character :character="getCharacter"></trade-character>',

          '<div class="seller">',
            '<div>Seller: </div>',
            '<trade-seller v-for="(price, idx) in seller" :price="price" :idx="idx"></trade-seller>',
          '</div>',
        '</div>',

        '<span class="pointer" @click="finish">1. Back</span>',
      '</div>'
      ].join(''),
  methods: {
    finish: function () {
      config.activeUI = "dialog"
    }
  },
  computed: {
    getCharacter: function () {
      return config.character
    }
  }
})

Vue.component('tradeSeller', {
  props: ['price', "idx"],
  template: [
        '<span class="game-icon" :class="infoItem" @click="buyItem" @animationend="cant_equip = false" :style="getIcon">',
          '<div class="tooltip">',
            '<ul>',
              '<li><b>{{ getOption("name", "") }}</b></li>',
              '<li>{{ getOption("level", "Level: ") }}</li>',
              '<li>{{ getOption("damage", "Damage: ") }}</li>',
              '<li>{{ getOption("strength", "Strength: ") }}</li>',
              '<li>{{ getOption("stamina", "Stamina: ") }}</li>',
              '<li>{{ getOption("agility", "Agility: ") }}</li>',
              '<li>{{ getOption("defence", "Defence: ") }}</li>',
              '<li>Price {{ price }}</li>',
              '<li>{{ getOption("text", "Note: ") }}</li>',
              '<li>{{ idx }}</li>',
            '</ul>',
          '</div>',
          '<span class="name"><b>{{ getOption("name", "") }}</b></span>',
          '<span class="level">{{ getOption("level", "Lvl:") }}</span>',
          '<span class="price">Price: {{ price }}</span>',
        '</span>'
      ].join(''),
  methods: {
    buyItem: function () {
      let item = config.db.items[this.idx]
      if (item && config.character.money - this.price >= 0) {
        config.character.money -= this.price
        config.character.bag.push(this.idx)
      }
    },
    getOption(option, label) {
      let item = config.db.items[this.idx]
      if (item && item[option]) {
        return label + item[option]
      }
    }
  },
  computed: {
    getItem: function () {
      let item = config.db.items[this.idx]
      if (item) {
        return item
      }
    },
    getIcon: function() {
      let obj = config.db.items[this.idx]
      let data = {}

      if (obj && obj.icon) {
        data['background'] =  'url(' + obj.icon + ') center center/cover'
      }

      return data
    },
    infoItem: function () {
      let html = config.db.items[this.idx]
      let data = {}

      if (!html) {
        return data
      }

      if (html.quality) {
        data[html.quality] = true
      }

      return data
    },
  }
})

Vue.component('tradeCharacter', {
  props: ['character'],
  template: [
      '<div class="bag">',
        '<div>You: </div>',
        '<sell-item v-for="(item_id, idx) in character.bag" :item_id="item_id" :idx="idx"></sell-item>',
      '</div>'
      ].join(''),
})

Vue.component('sellItem', {
  props: ['item_id', "idx"],
  template: [
        '<span class="game-icon" :class="infoItem" @click="sellItem" @animationend="cant_equip = false" :style="getIcon">',
          '<div class="tooltip">',
            '<ul>',
              '<li><b>{{ getOption("name", "") }}</b></li>',
              '<li>{{ getOption("level", "Level: ") }}</li>',
              '<li>{{ getOption("damage", "Damage: ") }}</li>',
              '<li>{{ getOption("strength", "Strength: ") }}</li>',
              '<li>{{ getOption("stamina", "Stamina: ") }}</li>',
              '<li>{{ getOption("agility", "Agility: ") }}</li>',
              '<li>{{ getOption("defence", "Defence: ") }}</li>',
              '<li>{{ getOption("price", "Price: ") }}</li>',
              '<li>{{ getOption("text", "Note: ") }}</li>',
              '<li>{{ item_id }}</li>',
            '</ul>',
          '</div>',
          '<span class="name"><b>{{ getOption("name", "") }}</b></span>',
          '<span class="level">{{ getOption("level", "Lvl:") }}</span>',
          '<span class="price">{{ getOption("price", "Price: ") }}</span>',
        '</span>'
      ].join(''),
  methods: {
    sellItem: function () {
      let item = config.db.items[this.item_id]
      if (item && item.price) {
        config.character.money += item.price
        config.character.bag.splice(this.idx, 1)
      }
    },
    getOption(option, label) {
      let item = config.db.items[this.item_id]
      if (item && item[option]) {
        return label + item[option]
      }
    }
  },
  computed: {
    getItem: function () {
      let item = config.db.items[this.item_id]
      if (item) {
        return item
      }
    },
    getIcon: function() {
      let obj = config.db.items[this.item_id]
      let data = {}

      if (obj && obj.icon) {
        data['background'] =  'url(' + obj.icon + ') center center/cover'
      }

      return data
    },
    infoItem: function () {
      let html = config.db.items[this.item_id]
      let data = {}

      if (!html) {
        return data
      }

      if (html.quality) {
        data[html.quality] = true
      }

      return data
    },
  }
})