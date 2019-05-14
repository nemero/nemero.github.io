Vue.component('viewMapClear', {
  props: [],
  template: ['<span>',
  				'<input type="button" name="clear_map" @click="clearMap" value="Clear Map"/>',
  				//'<input type="button" name="Clear Map" @click="clearMap" />'
    '</span>'].join(""),
  methods: {
  	clearMap: function () {
  		config.map = {}
  	},
  },
})