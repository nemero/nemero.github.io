Vue.component('viewMapRow', {
  props: ['row', 'row_id', 'config', 'zone_id'],
  template: ['<div class="view-map-row">',
              '<view-map-tile v-for="(item, col_id) in row" :item="item" :row_id="row_id" :col_id="col_id" :zone_id="zone_id" :config="config"></view-map-tile>',
            '</div>'
    ].join("")
})