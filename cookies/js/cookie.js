document.addEventListener('DOMContentLoaded', function() {


	function setCookie(cname, cvalue, exdays) {
		var d = new Date();
		d.setTime(d.getTime() + (exdays*24*60*60*1000));
		var expires = "expires="+d.toUTCString();
		document.cookie = cname + "=" + cvalue + "; " + expires;
	}

	function getCookie(cname){
	    var name = cname + "=";
	    var ca = document.cookie.split(';');

	    for(var i=0; i<ca.length; i++) {
	        var c = ca[i];
	        while (c.charAt(0)==' ') c = c.substring(1);
		        if (c.indexOf(name) == 0){
		        	return c.substring(name.length, c.length);
		        }
	    	}
	    return "";
	}



	document.getElementById("crearcookie").addEventListener("click", function(){
		setCookie("usuario","Soy una cookie",360);
	});

	document.getElementById("borrarcookie").addEventListener("click", function(){
		setCookie("usuario","Soy una cookie",-360);
		document.getElementById("resCookie").innerHTML="";
	});

	document.getElementById("mostrarcookie").addEventListener("click", function(){
		document.getElementById("resCookie").innerHTML=getCookie("usuario");
	});


	document.getElementById("crearlocal").addEventListener("click", function(){
		localStorage.setItem("usuario","Soy un localStorage");
	});

	document.getElementById("borrarlocal").addEventListener("click", function(){
		localStorage.removeItem("usuario");
		document.getElementById("reslocal").innerHTML="";
	});

	document.getElementById("mostrarlocal").addEventListener("click", function(){
		document.getElementById("reslocal").innerHTML=localStorage.getItem("usuario");
	});







});