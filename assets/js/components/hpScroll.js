Vue.component('hpScroll', {
  props: ['enemy'],
  template: [
      '<ul class="hp-changes">',
        '<hpScrollItem v-if="enemy.hpScroll" v-for="item in enemy.hpScroll" :item="item" :hpScroll="enemy.hpScroll"></hpScrollItem>',
      '</ul>'
      ].join(''),
  methods: {
  }
})