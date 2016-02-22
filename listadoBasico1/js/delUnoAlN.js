/**
 * Muestra la secuencia de números desde el 1 hasta el valor introducido
 */

function secuencia(){
	var numero = document.getElementById("numero").value;
	var mensaje = document.getElementById("mensaje");

	var error=comprobarDatos(numero);

	if(!error){
		mensaje.innerHTML = generarSecuencia(numero);
	}
	else{
		mensaje.innerHTML = "";
	}

}

/**
 * Genera una secuencia de números desde 1 hasta el valor introducidos
 * @param numero Valor introducido por teclado
 * @return cadena con los valores concatenados
 */
function generarSecuencia(numero){
	var cadena="";
	for (var i = 1; i <= numero; i++) {
		cadena+=i;
	};
	return cadena;
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
	}else if(numero<1){
		mensajeNumero.innerHTML = "Valor inválido";
		fgError=true;
	}else{
		mensajeNumero.innerHTML = "";
	}

	return fgError;
}

function declararVariables(){
	var enviar = document.getElementById("enviar");
	enviar.addEventListener("click", secuencia);
}

document.addEventListener("DOMContentLoaded", declararVariables);