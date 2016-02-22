$( document ).ready(function() {
	$("a").click(function(evento){
		//aquí el código que se debe ejecutar al hacer clic
		alert("Has pulsado el enlace...Ahora serás enviado a DesarrolloWeb.com");
		evento.preventDefault();
	});
	
});


