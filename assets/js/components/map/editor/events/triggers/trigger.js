Vue.component('eventTrigger', {
  props: ['trigger', 'config'],
  template: [
      '<div>',
        '<event-trigger-hide-event :trigger="trigger" :config="config"></event-trigger-hide-event>',
        '<event-trigger-show-event :trigger="trigger" :config="config"></event-trigger-show-event>',
        '<event-trigger-replace-tile :trigger="trigger" :config="config"></event-trigger-replace-tile>',
      '</div>'
      ].join(''),
  methods: {
  },
  computed: {
  	
  }
})