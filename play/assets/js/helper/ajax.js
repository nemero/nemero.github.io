function ajaxSubmit(method, action, data, callback) {
  	// ajax post json
  	var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance 
  	xmlhttp.open(method, action);
  	xmlhttp.setRequestHeader("Content-Type", "application/json");
  	
  	xmlhttp.onload = function() {
	    if (xmlhttp.status === 200) {
	   		// response 
		  	if (typeof callback === "function") {
			  	callback(xmlhttp.responseText)
		  	}
	    } else if (xmlhttp.status !== 200) {
	        console.log('Request failed.  Returned status of ' + xmlhttp.status);
	    }
	};

  	xmlhttp.send(data);
}