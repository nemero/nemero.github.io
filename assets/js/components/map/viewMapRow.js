Vue.component('viewMapRow', {
  props: ['row', 'row_id', 'zone', 'viewport'],
  template: ['<div class="view-map-row" style="display: none;">',
              '<view-map-tile v-for="(col , col_id) in parseInt(viewport[0])" :key="col_id" :row="row" :row_id="row_id" :col="col" :col_id="col_id" :zone="zone"></view-map-tile>',
            '</div>'
    ].join("")
})