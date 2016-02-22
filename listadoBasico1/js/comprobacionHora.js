/**
 * Comprueba una hora introducida y la muestra 1 segundo después
 */

function comprobar(){
var horas = document.getElementById("horas").value;
var minutos= document.getElementById("minutos").value;
var segundos = document.getElementById("segundos").value;
var mensaje = document.getElementById("mensaje");

var error=comprobarDatos(horas,minutos,segundos);

if(!error){
	mensaje.innerHTML = mostrarHora(horas,minutos,segundos);
}

}


/**
 * Formatea la hora y la devuelve
 * @param horas 	Hora introducida
 * @param minutos   Minutos introducidos
 * @param segundos  Segundos introducidos
 * @return Una cadena con los valores nuevos
 */
function mostrarHora(horas,minutos,segundos){
	var comSeg=parseInt(segundos);
	var comMin=parseInt(minutos);

	if((comSeg++)==60){
		++minutos;
		segundos=0;
	}
	if((comMin++)==60){
		++horas;
		minutos=0;
	}

	return "Hora: "+horas+" minutos: "+minutos+" segundos: "+segundos;
}


/**
 * Comprueba si los datos son válidos
 * @param  minutos minutos introducidos
 * @param  segundos segundos introducidos
 * @return true si ha encontrado algún error false si no.
 */
function comprobarDatos(horas,minutos,segundos){
	var mensajeHoras = document.getElementById("mensajeHoras");
	var mensajeMinutos = document.getElementById("mensajeMinutos");
	var mensajeSegundos = document.getElementById("mensajeSegundos");
	var fgError= false;

	if(horas.length ==0){
		mensajeHoras.innerHTML = "Rellene el campo";
		fgError=true;
	}else if(horas <0){
		mensajeHoras.innerHTML = "Valor no válido";
		fgError=true;
	}
	
	if(minutos.length ==0){
		mensajeMinutos.innerHTML = "Rellene el campo";
		fgError=true;
	}else if(minutos <0 || minutos>60){
		mensajeMinutos.innerHTML = "Valor no válido";
		fgError=true;
	}
	if(segundos.length==0){
		mensajeSegundos.innerHTML = "Rellene el campo";
		fgError=true;
	}
	else if(segundos<0 || segundos>60){
		mensajeSegundos.innerHTML = "Valor no válido";
		fgError=true;
	}

	return fgError;
}

function declararVariables(){
	var enviar = document.getElementById("enviar");
	enviar.addEventListener("click", comprobar);
}

document.addEventListener("DOMContentLoaded", declararVariables);