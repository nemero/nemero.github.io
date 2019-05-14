Vue.component('battleZoneDefault', {
  props: ['config'],
  data: function () {
    return {
      collapse: false,
      selected_enemy_id: null
    }
  },
  template: ['<div class="box" v-if="config.battleZone && config.battleZone.zoneDefault">',
        '<h5 @click="collapse = collapse ? false : true">Default Npc`s - {{ config.battleZone.zoneDefault.percent }} %, max - {{ config.battleZone.zoneDefault.max }}, min - {{ config.battleZone.zoneDefault.min }}</h5>',
        '<div v-show="collapse">',
          '<div class="field-row">',
            '<label>Percent proc:</label> ',
            '<input type="number" v-model.number="config.battleZone.zoneDefault.percent" />',
          '</div>',

          '<div class="field-row">',
            '<label>Max:</label> ',
            '<input type="number" v-model.number="config.battleZone.zoneDefault.max" />',
          '</div>',

          '<div class="field-row">',
            '<label>Min:</label> ',
            '<input type="number" v-model.number="config.battleZone.zoneDefault.min" />',
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
        '</div>',
    '</div>'
  ].join(""),
  methods: {
    addEnemy: function () {
      if (!this.selected_enemy_id) {
        return
      }

      if (!config.battleZone.zoneDefault.enemies) {
        Vue.set(config.battleZone.zoneDefault, "enemies", [])
      }

      config.battleZone.zoneDefault.enemies.push({
        id: this.selected_enemy_id
      })
    },
  },
  computed: {
    getEnemies: function () {
      return config.battleZone.zoneDefault && config.battleZone.zoneDefault.enemies ? config.battleZone.zoneDefault.enemies : []
    }
  }
})

Vue.component('battleEnemies', {
  props: ['enemy', 'idx', 'enemies'],
  data: function () {
    return {
      collapse: false,
      selected_enemy_id: null
    }
  },
  template: ['<div class="box">',
        '<h5 @click="collapse = collapse ? false : true">{{ idx }}. {{ enemy.id }} - {{ enemy.percent }} %, max - {{ enemy.max }}, min - {{ enemy.min }}<input type="button" @click="removeEnemy" value="-" /></h5>',
        '<div v-show="collapse">',
          '<div class="field-row">',
            '<label>Percent proc:</label> ',
            '<input type="number" v-model.number="enemy.percent" />',
          '</div>',

          '<div class="field-row">',
            '<label>Max:</label> ',
            '<input type="number" v-model.number="enemy.max" />',
          '</div>',

          '<div class="field-row">',
            '<label>Min:</label> ',
            '<input type="number" v-model.number="enemy.min" />',
          '</div>',
        '</div>',
    '</div>'
  ].join(""),
  methods: {
    removeEnemy: function () {
      //console.log(this.enemies)
      this.enemies.splice(this.idx, 1)
    },
  },
  computed: {
    
  }
})