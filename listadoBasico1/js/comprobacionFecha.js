/**
 * Comprueba una fecha introducida por teclado e imprime el día si es correcta
 */

function comprobar(){
var dia = document.getElementById("dia").value;
var mes= document.getElementById("mes").value;
var anno = document.getElementById("anno").value;
var mensaje = document.getElementById("mensaje");
var diasMes;

var error=comprobarDatos(dia,anno);



if(!error){
	switch(mes){
		case "Enero":
		case "Marzo":	
		case "Mayo":
		case "Julio":
		case "Agosto":
		case "Octubre":
		case "Diciembre":
			diasMes =31;
			break;
		case "Febrero":
			diasMes = comprobarFebrero(anno);
			break;
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			diasMes = 30;
			break;
	}

	if(dia<=diasMes && dia!=0){
		mensaje.innerHTML = "Día: "+dia;
	}else{
		mensaje.innerHTML = "";
	}
}
}

/**
 * Comprueba cuantos dias tiene febrero
 */
function comprobarFebrero(anno){
	if((anno%4==0) && (anno%400!=0) || anno%400==0){
		return 29;
	}
	else{
		return 28;
	}
}

/**
 * Comprueba si los datos son válidos
 * @param  dia Dia del mes
 * @param  anno Año
 * @return true si ha encontrado algún error false si no.
 */
function comprobarDatos(dia,anno){
	var mensajeAnno = document.getElementById("mensajeAnno");
	var mensajeDia = document.getElementById("mensajeDia");
	var fgError= false;
	
	if(anno.length ==0){
		mensajeAnno.innerHTML = "Rellene el campo";
		fgError=true;
	}else if(anno <0){
		mensajeAnno.innerHTML = "Valor no válido";
		fgError=true;
	}
	if(dia.length==0){
		mensajeDia.innerHTML = "Rellene el campo";
		fgError=true;
	}
	else if(dia<=0){
		mensajeDia.innerHTML = "Valor no válido";
		fgError=true;
	}

	return fgError;
}

function declararVariables(){
	var enviar = document.getElementById("enviar");
	enviar.addEventListener("click", comprobar);
}

document.addEventListener("DOMContentLoaded", declararVariables);