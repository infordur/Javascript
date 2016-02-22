$(document).ready(function() {
	var diff, last;
	$("html").mousemove(function(evento){
		$("#mousemove").html(" pageX :"+ evento.pageX + " pageY"+ evento.pageY + " (haz click para ver el atributo currentTarget) ");

	});

	$( "#mousemove" ).click(function( event ) {
		 if ( last ) {
		    diff = event.timeStamp - last;
		    $( "#timestamp" ).append( "Con timeStamp vemos el tiempo transcurrido entre eventos: " + diff + " ms </br>" );
		  } else {
		    $( "#timestamp" ).append( "Haz click de nuevo para ver el atributo timeStamp.</br>" );
		  }
		  last = event.timeStamp;

		  if( event.currentTarget === this ){
		  	$("#currentTarget").html("Con currentTarget comprobamos el tipo de elemento que ejecuto el evento, ejemplo: </br>Recogemos el parrafo superior y mostramos su contenido html: "+ $(this).html());
		  }
	});


});