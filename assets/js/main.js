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
function scaleCanvas(canvas, context, width, height) {
  // assume the device pixel ratio is 1 if the browser doesn't specify it
  const devicePixelRatio = window.devicePixelRatio || 1;

  // determine the 'backing store ratio' of the canvas context
  const backingStoreRatio = (
    context.webkitBackingStorePixelRatio ||
    context.mozBackingStorePixelRatio ||
    context.msBackingStorePixelRatio ||
    context.oBackingStorePixelRatio ||
    context.backingStorePixelRatio || 1
  );

  // determine the actual ratio we want to draw at
  const ratio = devicePixelRatio / backingStoreRatio;

  if (devicePixelRatio !== backingStoreRatio) {
    // set the 'real' canvas size to the higher width/height
    canvas.width = width * ratio;
    canvas.height = height * ratio;

    // ...then scale it back down with CSS
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
  }
  else {
    // this is a normal 1:1 device; just scale it simply
    canvas.width = width;
    canvas.height = height;
    canvas.style.width = '';
    canvas.style.height = '';
  }

  // scale the drawing context so everything will work at the higher ratio
  context.scale(ratio, ratio);
}

function run() {

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
	    	// if (config.holdKeys.indexOf('key16') >= 0) {
	     //  		this.dragging = true;
	     //  		this.x = this.y = 0;
	     //  	}
	    },
	    stopDrag() {
	      	//this.dragging = false;
	      	//this.x = this.y = 'no';
	    },
	    doDrag(event) {
	    	//let e = window.event;
			//pauseEvent(e);
	      if (this.dragging && config.holdKeys.indexOf('key16') >= 0) {
	        if (this.x == "no" || this.x == 0) {
	        	this.prevX = event.clientX
	        }

	        if (this.y == "no" || this.y == 0) {
	        	this.prevY = event.clientY
	        }

	        this.x = event.clientX;
	        this.y = event.clientY;

	        if (this.x - this.prevX < -4) {
	        	Vue.set(config.mapOffset, 0, parseInt(config.mapOffset[0]) + 1)
	        	this.prevX = event.clientX
	        }
	        if (this.x - this.prevX > 4) {
	        	this.prevX = event.clientX
	        	Vue.set(config.mapOffset, 0, parseInt(config.mapOffset[0]) - 1)
	        }

	        if (this.y - this.prevY < -4) {
	        	Vue.set(config.mapOffset, 1, parseInt(config.mapOffset[1]) + 1)
	        	this.prevY = event.clientY
	        }
	        if (this.y - this.prevY > 4) {
	        	Vue.set(config.mapOffset, 1, parseInt(config.mapOffset[1]) - 1)
	        	this.prevY = event.clientY
	        }
	      }
	    },
	    changeTheme: function () {
	    	if (config.theme) {
	    		config.theme = ""
	    	} else {
	    		config.theme = "black"
	    	}
	    },
	    keyDown: function (e) {
	    	if (config.holdKeys.indexOf('key' + e.keyCode) < 0) {
	    		config.holdKeys.push('key' + e.keyCode)
	    	}

	    	if (config.holdKeys.indexOf('key16') >= 0) {
	      		this.dragging = true;
	      		this.x = this.y = 0;
	      	}
	    },
	    keyUp: function (e) {
	    	if (config.holdKeys.indexOf('key' + e.keyCode) >= 0) {
	    		config.holdKeys.splice(config.holdKeys.indexOf('key' + e.keyCode), 1);
	    	}

			if (config.holdKeys.indexOf('key16') >= 0) {
	      		this.dragging = false;
	      		this.x = this.y = 'no';
	      	}
	    },
	    onResize: function (e) {
	    	if (config.db.map.viewport) {
	    			let w = 48
			    	let h = 48
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
	},
	computed: {
		getTheme: function () {
			let data = {}
			if (config.theme) {
				data[config.theme] = true
			}
			for (key in config.holdKeys) {
				data[config.holdKeys[key]] = true
			}

			data[config.activeUI] = true

			return data
		},
		getGameUI: function () {
			let data = {}
			data['active-ui-' + config.activeUI] = true

			return data
		},
	},
	mounted() {
	    window.addEventListener('mouseup', this.stopDrag);
	    window.addEventListener('keydown', this.keyDown);
	    window.addEventListener('keyup', this.keyUp);
	    window.addEventListener('resize', this.onResize);
	    this.onResize();
	}
})
}