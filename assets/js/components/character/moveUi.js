Vue.component('moveUi', {
  props: ['config'],
  template: [
      '<div class="move-control">',
        '<div class="move-up" @click="move(\'up\')">UP</div>',
        '<div class="move-down" @click="move(\'down\')">DOWN</div>',
        '<div class="move-left" @click="move(\'left\')">LEFT</div>',
        '<div class="move-right" @click="move(\'right\')">RIGHT</div>',
      '</div>'
	  	].join(''),
  methods: {
    move: function (direction) {
      Vue.set(config, "executeEvent", {
        id: "move",
        position: config.character.position,
        player_id: config.character.id,
        directions: [direction]
      })
    },
  }
})