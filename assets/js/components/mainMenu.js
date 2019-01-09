Vue.component('mainMenu', {
  props: ['config'],
  template: [
      '<div>',
        '<ul class="menu">',
          //'<li @click="startNewGame">Start New Game</li>',
          '<li @click="continueGame">Continue Game</li>',
          '<li @click="saveGame">Save Game</li>',
          '<li @click="loadGame" v-if="isAvailable()">Load Game</li>',
        '</ul>',
      '</div>'
      ].join(''),
  created: function () {
    window.addEventListener('keydown', this.menu)
  },
  methods: {
    menu: function (e) {
      // move actions
      if ([27].indexOf(e.keyCode) >= 0) {
        // show hide menu
        if (config.activeUI != "game-menu") {
          config.previousUI = config.activeUI
          config.activeUI = "game-menu"
        } else {
          if (!config.previousUI) {
            config.activeUI = "world"
          } else {
            config.activeUI = config.previousUI
          }
        }
      }
    },
    startNewGame: function () {
      // reset config on default
      config.activeUI = "world"
    },
    continueGame: function () {
      if (!config.previousUI) {
        config.activeUI = "world"
      } else {
        config.activeUI = config.previousUI
      }
    },
    loadGame: function () {
      let map = getCookie("map")
      if (map) {
        // remove old indication position
        if (config.db.map[config.db.map.activeMap].layerEvents[config.character.position[1]] && config.db.map[config.db.map.activeMap].layerEvents[config.character.position[1]][config.character.position[0]]) {
          Vue.delete(config.db.map[config.db.map.activeMap].layerEvents[config.character.position[1]][config.character.position[0]], config.character.id)
        }
        Vue.set(config.db.map, "activeMap", map)
      }

      let player = getCookie("player")
      if (player) {
        player = JSON.parse(player)
        // render player in event layers
        if (!config.db.map[map].layerEvents[player.position[1]]) {
          Vue.set(config.db.map[map].layerEvents, player.position[1], {})  
        }
        if (!config.db.map[map].layerEvents[player.position[1]][player.position[0]]) {
          Vue.set(config.db.map[map].layerEvents[player.position[1]], player.position[0], {})  
        }
        Vue.set(config.db.map[map].layerEvents[player.position[1]][player.position[0]], player.id, {
          id: "player",
          name: "Player Kokoko",
          player_id: player.id,
          direction: "down",
          icon: "icon-player",
          tile_icon: "icon-player",
        })
        Vue.set(config, "character", player)
      }

      let control = getCookie("control")
      if (control) {
        Vue.set(config, "moveUi", control)
      }

      config.activeUI = "world"
    },
    saveGame: function () {
      let player = JSON.stringify(config.character)
      let map = config.db.map.activeMap
      let control = config.moveUi
      let date = new Date(new Date().getTime() + 60 * 100000);

      document.cookie = "player=" + player + "; path=/; expires=" + date.toUTCString();
      document.cookie = "map=" + map + "; path=/; expires=" + date.toUTCString();
      document.cookie = "control=" + control + "; path=/; expires=" + date.toUTCString();

      alert("game saved.")
      this.continueGame()
    },
    isAvailable: function () {
      let map = getCookie("map")
      if (!map) {
        return false
      }

      return true
    }
  },
})