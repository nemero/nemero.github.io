Vue.component('characterDebuff', {
  props: ['debuff'],
  template: [
      '<span class="game-icon game-icon-small" :style="getIcon" v-if="debuff && debuff.time > 0">',
        '<div class="tooltip">',
          '<ul>',
            '<li><b>{{ getOption("name", "") }}</b></li>',
            '<li>{{ getOption("level", "Level: ") }}</li>',
            '<li>{{ getOption("damage_tick", "Damage Tick: ") }}</li>',
            '<li>{{ getOption("heal_tick", "Heal Tick: ") }}</li>',
          '</ul>',
        '</div>',
        '<span class="cooldown">{{ debuff.time }}</span>',
      '</span>'
      ].join(''),
  methods: {
  	getOption: function (field, word) {
  		let obj = config.db.abilities[this.debuff.id]
  		let value = obj[field]

  		if (value) {
  			return word + value 
  		}
  	},
  },
  computed: {
    getIcon: function() {
    	let obj = config.db.abilities[this.debuff.id]
      let data = {}
      data['background'] =  'url(' + obj.icon + ') center center/cover'

      return data
    },
  },
})