Vue.component('hpScrollItem', {
  props: ['item', 'hpScroll'],
  template: [
        '<li :class="getType" v-if="item" @animationend="afterAnimate">{{ item.value }}</li>',
      ].join(''),
  methods: {
    afterAnimate: function () {
      this.hpScroll.shift()
    }
  },
  computed: {
    getType: function () {
      let data = {}
      data[this.item.type] = true

      return data
    },
  }
})