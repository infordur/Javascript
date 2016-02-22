document.addEventListener('DOMContentLoaded', function() {

	function mostrarInformacion(evento){
		switch(evento.type){
			case 'click':
				var x=evento.screenX;
				var y=evento.screenY;
				document.getElementById("clk").innerHTML="Has hecho click en: X->"+x+" Y->"+y;
				break;
			case 'dblclick':
				var x=evento.screenX;
				var y=evento.screenY;
				document.getElementById("dbclk").innerHTML="Has hecho DOBLE click en: X->"+x+" Y->"+y;
				break;
			case 'mousedown':
				document.getElementById("msdown").innerHTML="Has pulsado una tecla del ratón";
				break;
			case 'mouseout':
				document.getElementById("msout").innerHTML="Has salido del area";
				break;
			case 'mouseover':
				document.getElementById("msover").innerHTML="Has entrado en el area";
				break;

			case 'mouseup':
				document.getElementById("msup").innerHTML="Has soltado un boton del raton";
				break;

			case 'mousemove':
				var x=evento.screenX;
				var y=evento.screenY;
				document.getElementById("msmove").innerHTML="Estas en la posición: X-> "+x+"Y-> "+y;
				break;
		}
	}





	document.addEventListener('click',mostrarInformacion);
	document.addEventListener('dblclick',mostrarInformacion);
	document.addEventListener('mousedown',mostrarInformacion);
	document.getElementById('msout').addEventListener('mouseout',mostrarInformacion);
	document.getElementById('msover').addEventListener('mouseover',mostrarInformacion);
	document.addEventListener('mouseup',mostrarInformacion);
	document.addEventListener('mousemove',mostrarInformacion);


















});