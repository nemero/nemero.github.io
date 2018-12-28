Vue.component('abilities', {
  props: ['abilities'],
  data: function () {
  	return {
  		ability_id: null,
  		create_ability_id: null,
  	}
  },
  template: ['<div class="abilities">',
        '<div class="field-row">',
          '<label>Select Ability:</label> ',
          '<select v-model="ability_id">',
            '<option v-for="ability in abilities" :value="ability.id">{{ ability.id }} - {{ ability.name }}</option>',
          '</select>',
          '<input type="button" @click="removeAbility()" value="-" />', 
        '</div>',

        '<div class="field-row">',
          '<label>Create Ability:</label> ',
          '<input type="text" v-model="create_ability_id" placeholder="unique id"/>',
          '<input type="button" @click="createAbility()" value="+" />',
        '</div>',

        '<active-ability :ability="abilities[ability_id]" :abilities="abilities" v-if="abilities[ability_id]"></active-ability>',

      	'<div class="flex">',
      		'<textarea rows="5" cols="30">{{ abilities }}</textarea>',
      	'</div>',
    '</div>'
  ].join(""),
  methods: {
    createAbility: function () {
      if (this.create_ability_id && !this.abilities[this.create_ability_id]) {
        Vue.set(this.abilities, this.create_ability_id, {
          id: this.create_ability_id,
          name: this.create_ability_id
        })

        this.ability_id = this.create_ability_id
      }
    },
    removeAbility: function () {
      if (this.ability_id) {
        Vue.delete(this.abilities, this.ability_id)
      }
    }
  },
})

Vue.component('activeAbility', {
  props: ['ability', 'abilities'],
  template: ['<div class="ability flex flex-top">',
      '<div>',
        '<h4>Item:</h4> ',
        '<div class="field-row">',
          '<label>Id:</label> ',
          //'<input type="text" v-model="enemy.id" />',
          '<span>{{ ability.id }}</span>',
        '</div>',

        '<div class="field-row">',
          '<label>Name:</label> ',
          '<input type="text" v-model="ability.name" />',
        '</div>',

        '<div class="field-row">',
          '<label>Type:</label> ',
          '<select v-model="ability.type">',
            '<option v-for="type in getAbilityTypes" :value="type">{{ type }}</option>',
          '</select>',
        '</div>',

        '<div class="tiles-map">',
          '<div class="field-row">',
            '<label>Icon: </label> ',
            '<input type="text" v-model="ability.icon" />',
          '</div>',
          '<span class="layer-event" style="zoom: 3; border: 0.2px solid #cecece;" :style="getIconStyle"></span>',
        '</div>',

        '<div class="field-row">',
          '<label>Level:</label> ',
          '<input type="number" v-model.number="ability.level" />',
        '</div>',

        '<div class="field-row">',
          '<label>Cooldown:</label> ',
          '<input type="number" v-model.number="ability.cooldown" />',
        '</div>',

        '<div class="field-row">',
          '<label>Heal:</label> ',
          '<input type="number" v-model.number="ability.heal" />',
        '</div>',

        '<div class="field-row">',
          '<label>Damage:</label> ',
          '<input type="number" v-model.number="ability.damage" />',
        '</div>',

        '<div class="field-row" v-if="ability.type != \'damage\' && ability.type != \'heal\' && ability.type != \'escape\'">',
          '<label>Time:</label> ',
          '<input type="number" v-model.number="ability.time" />',
        '</div>',

        '<div class="field-row" v-if="ability.type == \'heal_buff\'">',
          '<label>Heal Tick:</label> ',
          '<input type="number" v-model.number="ability.heal_tick" />',
        '</div>',

        '<div class="field-row" v-if="ability.type == \'damage_dot\'">',
          '<label>Damage Tick:</label> ',
          '<input type="number" v-model.number="ability.damage_tick" />',
        '</div>',

        '<div class="field-row" v-if="ability.type == \'damage_dot\' || ability.type == \'damage\' || ability.type == \'damage_aoe\'">',
          '<label>Strength Scaling:</label> ',
          '<input type="number" v-model.number="ability.strength_scaling" />',
        '</div>',

        '<div v-if="ability.type == \'damage_aoe\'">',
          '<div class="field-row">',
            '<label>Damage Aoe:</label> ',
            '<input type="number" v-model.number="ability.damage_aoe" />',
          '</div>',

          '<div class="field-row">',
            '<label>Damage Count:</label> ',
            '<input type="number" v-model.number="ability.damage_count" />',
          '</div>',
        '</div>',

        '<div v-if="ability.type == \'buff\' || ability.type == \'debuff\'">',
          '<div class="field-row">',
            '<label>Stamina:</label> ',
            '<input type="number" v-model.number="ability.stamina" />',
          '</div>',

          '<div class="field-row">',
            '<label>Strength:</label> ',
            '<input type="number" v-model.number="ability.strength" />',
          '</div>',

          '<div class="field-row">',
            '<label>Agility:</label> ',
            '<input type="number" v-model.number="ability.agility" />',
          '</div>',

          '<div class="field-row">',
            '<label>Defence:</label> ',
            '<input type="number" v-model.number="ability.defence" />',
          '</div>',
        '</div>',

        '<div class="field-row" v-if="ability.type == \'escape\'">',
          '<label>Chance:</label> ',
          '<input type="number" v-model.number="ability.chance" />',
        '</div>',
      '</div>',
    '</div>'
  ].join(""),
  computed: {
    getAbilityTypes: function () {
      return ["damage", "damage_dot", "damage_aoe", "heal", "heal_buff", "buff", "debuff", "escape"]
    },
    getIconStyle: function () {
      let data = {}
      if (this.ability.icon) {
        data['background-image'] = 'url(' + this.ability.icon + ')'
      }

      return data
    },
  }
})