Vue.component('viewMapRow', {
  props: ['row', 'row_id', 'config'],
  template: ['<div class="view-map-row">',
              '<view-map-tile v-for="(col , col_id) in parseInt(config.width)" :row="row" :row_id="row_id" :col="col" :col_id="col_id" :config="config"></view-map-tile><br />',
            '</div>'
    ].join("")
})