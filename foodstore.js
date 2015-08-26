var xmlHttp = createXmlHttpRequestObjext();
//setup http request
function createXmlHttpRequestObjext() {
	var xmlHttp;

	if(window.ActiveXObject) {  /// if IE
		try {
			xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
		}catch(e){
			xmlHttp = false;
		}
	} else {
		try {
			xmlHttp = new XMLHttpRequest();
		}catch(e){
			xmlHttp = false;
		}
	}

	if(!xmlHttp)
		alert("Can't create that object");
	else
		return xmlHttp;
}

function process(){
	if(xmlHttp.readyState==4 || xmlHttp.readyState==0){ //if async ready
		food = encodeURIComponent(document.getElementById('userInput').value); //get value
		xmlHttp.open("GET", "foodstore.php?food="+food,true); //with get send food, async true
		xml.onreadystatechange = handleServerResponse;
		xmlHttp.send(null); //send get requ
	} else {
		setTimeout('process()',1000); //recall process each second
	}
}