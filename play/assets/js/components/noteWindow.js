Vue.component('noteWindow', {
  props: ['note'],
  template: [
      '<div>',
        '<div class="note-window" v-show="isShow()">',
          '<span class="button" @click="hideNote()">Close</span>',
          '<div class="note-box">',
            '<h3>Note</h3>',
            '<div>',
              '{{ note.text }}',
            '</div>',
          '</div>',
        '</div>',
      '</div>'
      ].join(''),
  methods: {
    hideNote: function () {
      config.noteUi = false
    },
    isShow: function () {
      return config.noteUi
    },

  },
})