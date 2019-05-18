Vue.component('mainMenu', {
  props: ['config'],
  template: [
      '<div>',
        '<ul class="menu">',
          //'<li @click="startNewGame">Start New Game</li>',
          '<li @click="continueGame">Continue Game</li>',
          '<li @click="saveGame">Save Game</li>',
          '<li @click="loadGame" v-if="isAvailable()">Load Game</li>',
          '<li @click="moveUi">Move UI: {{ config.moveUi }}</li>',
          '<li @click="changeMapScale">Map Scaling {{ config.map_scale }}</li>',
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
        let character = config.characters[config.character[0]]
        if (config.db.map[config.db.map.activeMap].layerEvents[character.position[1]] && config.db.map[config.db.map.activeMap].layerEvents[character.position[1]][character.position[0]]) {
          Vue.delete(config.db.map[config.db.map.activeMap].layerEvents[character.position[1]][character.position[0]], character.id)
        }
        Vue.set(config.db.map, "activeMap", map)
      }

      let characters = getCookie("characters")
      let players = getCookie("player")
      if (players && characters) {
        characters = JSON.parse(characters)
        Vue.set(config, "characters", characters)

        //console.log(JSON.parse(player)[0], characters)
        players = JSON.parse(players)
        player = characters[players[0]]
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
        Vue.set(config, "character", players)
      }

      let control = getCookie("control")
      if (control) {
        Vue.set(config, "moveUi", control)
      }

      config.activeUI = "world"
    },
    saveGame: function () {
      let characters = JSON.stringify(config.characters)
      let player = JSON.stringify(config.character)
      let map = config.db.map.activeMap
      let control = config.moveUi
      let date = new Date(new Date().getTime() + 60 * 3600000 * 1000);

      document.cookie = "player=" + player + "; path=/; expires=" + date.toUTCString();
      document.cookie = "characters=" + characters + "; path=/; expires=" + date.toUTCString();
      document.cookie = "map=" + map + "; path=/; expires=" + date.toUTCString();
      document.cookie = "control=" + control + "; path=/; expires=" + date.toUTCString();

      alert("game saved.")
      this.continueGame()
    },
    moveUi: function () {
      config.moveUi = config.moveUi ? false : true
    },
    changeMapScale: function () {
      if (config.map_scale < 1.4) {
        config.map_scale += 0.1
      } else {
        config.map_scale = 0.8
      }

      let onResize = function (e) {
        if (config.db.map.viewport) {
          let w = 48*config.map_scale
          let h = 48*config.map_scale
          var width = window.innerWidth
            || document.documentElement.clientWidth
            || document.body.clientWidth;

          var height = window.innerHeight
            || document.documentElement.clientHeight
            || document.body.clientHeight;

          let map_canvas = document.getElementById("map")

          map_canvas.width = width
          map_canvas.height = height
          let rows = Math.trunc(height/h)
          let cols = Math.trunc(width/w)
          Vue.set(config.db.map.viewport, 0, cols + 1)
          Vue.set(config.db.map.viewport, 1, rows + 1)
        }
      }

      // update rescale & rendering actions
      window.addEventListener('resize', onResize);
      onResize();
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