Vue.component('viewMap', {
  props: ['zone', 'config'],
  template: ['<div class="view-map">',
              '<span> {{ zone.name }} </span>',
              '<view-map-row v-for="(row , row_id) in zone.layer0" :row="row" :row_id="row_id" :zone_id="zone.id" :config="config"></view-map-row><br />',
            '</div>'
    ].join("")
})