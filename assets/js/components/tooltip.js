Vue.component('tooltip', {
  props: ['config'],
  template: [
      '<div>',
        '<span style="display: none;">{{ config.tooltip }}</span>',
        '<ul v-for="(item, idx) in config.tooltip">',
          '<li>{{ idx }}: {{ item }}</li>',
        '</ul>',
      '</div>'
	  	].join(''),
  methods: {

  }
})