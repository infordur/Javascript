/**
 * Muestra la media de una serie de números positivos cuando se introduce un número negativo
 */
var suma=0;
var cantNum=0;
var mediaN=0;

function media(){
var numero = document.getElementById("numero").value;
var mensaje = document.getElementById("mensaje");

var error=comprobarDatos(numero);

if(!error){
	if(numero>=0){
		suma+=parseInt(numero);
		cantNum++;
	}else{
		mediaN=suma/cantNum;
		mensaje.innerHTML= mediaN;
	}
}
else{
	mensaje.innerHTML = "";
}

}

/**
 * Comprueba si los datos son válidos
 * @param  numero Valor introducido por teclado
 * @return true si ha encontrado algún error false si no.
 */
function comprobarDatos(numero){
	var mensajeNumero = document.getElementById("mensajeNumero");
	var fgError= false;

	if(numero.length ==0){
		mensajeNumero.innerHTML = "Rellene el campo";
		fgError=true;
	}else{
		mensajeNumero.innerHTML = "";
	}

	return fgError;
}

function declararVariables(){
	var enviar = document.getElementById("enviar");
	enviar.addEventListener("click", media);
}

document.addEventListener("DOMContentLoaded", declararVariables);