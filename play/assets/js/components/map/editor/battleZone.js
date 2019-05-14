Vue.component('battleZone', {
  props: ['config'],
  data: function () {
    return {
      collapse: false,
      selected_enemy_id: null
    }
  },
  template: ['<div class="box">',
        // '<h5 @click="collapse = collapse ? false : true">Cell Npc`s</h5>',
        // '<div v-show="collapse">',
          '<label>{{ config.activeBattleCell.id }}:</label> ',
          '<div class="field-row">',
            '<label>Percent proc:</label> ',
            '<input type="number" v-model.number="config.activeBattleCell.percent" />',
          '</div>',

          '<div class="field-row">',
            '<label>Max:</label> ',
            '<input type="number" v-model.number="config.activeBattleCell.max" />',
          '</div>',

          '<div class="field-row">',
            '<label>Min:</label> ',
            '<input type="number" v-model.number="config.activeBattleCell.min" />',
          '</div>',

          '<div class="field-row">',
            '<label>Select Enemy:</label> ',
            '<select v-model="selected_enemy_id">',
              '<option value="" selected="selected">---</option>',
              '<option v-for="enemy in config.db.enemies" :value="enemy.id">{{ enemy.id }}</option>',
            '</select>',
            '<input @click="addEnemy" type="button" value="+"/>',
          '</div>',

          '<battle-enemies v-for="(enemy, idx) in getEnemies" :enemy="enemy" :idx="idx" :enemies="getEnemies"></battle-enemies>',
        // '</div>',
    '</div>'
  ].join(""),
  methods: {
    addEnemy: function () {
      if (!this.selected_enemy_id) {
        return
      }

      if (!config.activeBattleCell.enemies) {
        Vue.set(config.activeBattleCell, "enemies", [])
      }

      config.activeBattleCell.enemies.push({
        id: this.selected_enemy_id
      })
    },
  },
  computed: {
    getEnemies: function () {
      return config.activeBattleCell && config.activeBattleCell.enemies ? config.activeBattleCell.enemies : []
    }
  }
})