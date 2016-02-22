$(document).ready(function() {
	var mensaje = $("#mensaje");

	$("p").bind("click mouseenter mouseleave",function(evento){
		switch(evento.type){
			case "click":
				mensaje.html("Has hecho click en el parrafo "+ $(this).text());
				break;
			case "mouseenter":
				mensaje.html("Has entrado en el parrafo "+ $(this).text());
				break;
			case "mouseleave":
				mensaje.html("Has salido del parrafo "+ $(this).text());
				break;
		}
	})
});