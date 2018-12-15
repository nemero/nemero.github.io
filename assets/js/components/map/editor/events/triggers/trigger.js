Vue.component('eventTrigger', {
  props: ['trigger', 'config'],
  template: [
      '<div>',
        '<event-trigger-hide-event-tile v-if="trigger.type == \'hide_event_tile\'" :trigger="trigger" :config="config"></event-trigger-hide-event-tile>',
        '<event-trigger-show-event-tile v-if="trigger.type == \'show_event_tile\'" :trigger="trigger" :config="config"></event-trigger-show-event-tile>',
        '<event-trigger-replace-tile v-if="trigger.type == \'replace_tile\'" :trigger="trigger" :config="config"></event-trigger-replace-tile>',
      '</div>'
      ].join(''),
  methods: {
  },
  computed: {
  	
  }
})