/**
 * Muestra cuantos 0s hay en una secuencia hasta encontrar un 2
 */
function comprobar(){
var numero = document.getElementById("numero").value;
var mensaje = document.getElementById("mensaje");

var error=comprobarDatos(numero);

if(!error){
	mensaje.innerHTML = comprobarSecuencia(numero);
}
else{
	mensaje.innerHTML = "";
}

}

/**
 * Comprueba una secuencia de 0s y muestra cuandos hay antes de un 2
 * @param numero secuencia introducida por teclado
 * @return Mensaje de error en caso de que la secuencia no sea válida o la cantidad de 0s si es válida
 */
function comprobarSecuencia(numero){
	var secuenciaF = numero.split("").indexOf("2");
	if(secuenciaF==-1){
		return "Secuencia no válida";
	}
	else{
		return secuenciaF;			
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
	}else if(numero <0){
		mensajeNumero.innerHTML = "Valor no válido";
		fgError=true;
	}else{
		mensajeNumero.innerHTML = "";
	}

	return fgError;
}

function declararVariables(){
	var enviar = document.getElementById("enviar");
	enviar.addEventListener("click", comprobar);
}

document.addEventListener("DOMContentLoaded", declararVariables);