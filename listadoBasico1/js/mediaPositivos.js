var suma =0;
var mediaN=0;
var cantNum=0;

/**
 * Muestra la media de una serie de números positivos
 */
function media(){
var numero = document.getElementById("numero").value;
var mensaje = document.getElementById("mensaje");

var error=comprobarDatos(numero);

if(!error){
	mensaje.innerHTML = mediaNumeros(numero);
}
else{
	mensaje.innerHTML = "";
}

}

/**
 * Calcula la media de números positivos
 * @param numero valor introducido por teclado
 * @return La media con el valor si no has introducido un 0 y en caso contrario resetea los valores y muestra un mensaje.
 */
function mediaNumeros(numero){
	if(parseInt(numero)!=0){
		suma+=parseInt(numero);
		cantNum++;
		mediaN=suma/cantNum;
		return mediaN;
	}
	else{
		suma=0;
		mediaN =0;
		cantNum =0;
		return "Fin de la media";
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
	enviar.addEventListener("click", media);
}

document.addEventListener("DOMContentLoaded", declararVariables);