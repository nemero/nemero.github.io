function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

var app = new Vue({
  	el: '#play',
  	data: {
    	config: config,
  	},
    methods: {
      
    }
})