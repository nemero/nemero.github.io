Vue.component('selectEnemy', {
  props: ['enemy', 'config'],
  template: [
      '<ul class="select-enemy" @click="selectEnemy(enemy)">',
      '<li>{{ enemy.name }}</li>',
      '<li>HP: {{ enemy.health }}</li>',
      '</ul>'
      ].join(''),
  methods: {
    selectEnemy: function (enemy) {
      	config.character.activeTarget = Object.assign({}, enemy);
    },
  }
})