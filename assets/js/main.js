function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function pauseEvent(e){
    if(e.stopPropagation) e.stopPropagation();
    if(e.preventDefault) e.preventDefault();
    e.cancelBubble=true;
    e.returnValue=false;
    return false;
}

var app = new Vue({
  	el: '#play',
  	data: {
    	config: config,
    	dragging: false,
	    x: 'no',
	    y: 'no',
	    prevX: 0,
	    prevY: 0,
  	},
    methods: {
	    startDrag() {
	      	this.dragging = true;
	      	this.x = this.y = 0;
	    },
	    stopDrag() {
	      this.dragging = false;
	      this.x = this.y = 'no';
	    },
	    doDrag(event) {
	    	//let e = window.event;
			//pauseEvent(e);
	      if (this.dragging) {
	        if (this.x == "no" || this.x == 0) {
	        	this.prevX = event.clientX
	        }

	        if (this.y == "no" || this.y == 0) {
	        	this.prevY = event.clientY
	        }

	        this.x = event.clientX;
	        this.y = event.clientY;

	        if (this.x - this.prevX < -6) {
	        	Vue.set(config.mapOffset, 0, parseInt(config.mapOffset[0]) + 1)
	        	this.prevX = event.clientX
	        }
	        if (this.x - this.prevX > 6) {
	        	this.prevX = event.clientX
	        	Vue.set(config.mapOffset, 0, parseInt(config.mapOffset[0]) - 1)
	        }

	        if (this.y - this.prevY < -6) {
	        	Vue.set(config.mapOffset, 1, parseInt(config.mapOffset[1]) + 1)
	        	this.prevY = event.clientY
	        }
	        if (this.y - this.prevY > 6) {
	        	Vue.set(config.mapOffset, 1, parseInt(config.mapOffset[1]) - 1)
	        	this.prevY = event.clientY
	        }
	      }
	    },
	},
	mounted() {
	    window.addEventListener('mouseup', this.stopDrag);
	}
})