Vue.component('tile-map', {
  props: ['map'],
  template: ['<option :value="map">',
  			'{{ map.id }}',
    '</option>'].join(""),
})