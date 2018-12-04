Vue.component('tileDetail', {
  props: ['tile', 'config'],
  template: ['<div class="tile-detail" @click="selectTile(tile)">',
              '{{ tile }} {{ infoTile }}',
            '</div>'
    ].join(""),
  methods: {
    selectTile: function (tile) {
      // type tyle
      if (tile.type == "enemies") {
        let counter = 0
        config.activeEnemies = []
        for (enemy_idx in tile.enemies) {
          let enemy = config.db.enemies[tile.enemies[enemy_idx]]

          // indexing creating enemies 
          enemy['object_idx'] = counter
          config.activeEnemies.push(JSON.parse(JSON.stringify(enemy)))
          counter += 1
        }
      }
    },
  },
  computed: {
    infoTile: function () {
      // type tyle
      let html = ''
      if (this.tile.type == "enemies") {
        html += 'Enemies: ' + this.tile.enemies.length
        for (enemy_idx in this.tile.enemies) {
          let enemy = config.db.enemies[this.tile.enemies[enemy_idx]]
          html += ' Name: ' + enemy.name + ', hp: ' + enemy.health + ', damage: ' + enemy.damage 
        }
      }

      return html
    }
  }
})