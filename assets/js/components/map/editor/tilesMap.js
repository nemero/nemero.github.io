Vue.component('tiles-map', {
  props: ['maps', 'config'],
  template: ['<select v-model="config.activeTileMap">',
  			'<option value="" disabled selected=selected>---</option>',
  			'<tile-map v-for="map in maps" :map="map"></tile-map>',
    '</select>'].join(""),
})