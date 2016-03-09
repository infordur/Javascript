$(document).ready(function() {
	var url=$("#recurso");
	var contenido=$("#contenidos");
	var cabeceras=$("#cabeceras");
	var estado=$("#estados");
	var codigo=$("#codigo");
	var boton=$("#enviar");
 
	boton.click(function() {
		estado.text("");
		$.get(url.val(), function(data) {
			contenido.text(data);
		}).done(function() {
	    	estado.text(estado.val()+"Done\n");
	  	}).fail(function() {
	    	estado.text(estado.val()+"Error\n");
	    	contenido.text("Esa página no existe");
	  	}).always(function() {
	    	estado.text(estado.val()+"Finished\n");
	  	});
	});

	url.val(location).attr("href");
});