/**
 * Muestra el número en letra si no hay errores
 */

function comprobar(){
var numero = document.getElementById("numero").value;
var mensaje = document.getElementById("mensaje");

var error=comprobarDatos(numero);

if(!error){
	mensaje.innerHTML = decenas(numero);
}else{
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
	}else if(numero <0 || numero>99){
		mensajeNumero.innerHTML = "Valor no válido";
		fgError=true;
	}

	return fgError;
}

/**
 * Devuelve el texto correspondiente a las unidades
 * @param numero Numero introducido por teclado
 * @return Texto correspondiente a un número de 1 cifra
 */
function unidades(numero){

  switch(numero){
  	case 0:
  		return "CERO";
    case 1: 
    	return "UNO";
    case 2: 
    	return "DOS";
    case 3: 
    	return "TRES";
    case 4: 
    	return "CUATRO";
    case 5: 
    	return "CINCO";
    case 6: 
    	return "SEIS";
    case 7: 
    	return "SIETE";
    case 8: 
    	return "OCHO";
    case 9: 
    	return "NUEVE";
  }
}


/**
 * Devuelve el texto correspondiente a las decenas
 * @param numero Numero introducido por teclado
 * @return Texto correspondiente a un número de 2 cifras
 */

function decenas(numero){
	var decenas= Math.floor(numero/10);
	var unidad =numero - (decenas*10);

	switch(decenas){
		case 1:
			switch(unidad){
				case 0: 
					return "DIEZ";
		        case 1: 
		        	return "ONCE";
		        case 2: 
		        	return "DOCE";
		        case 3: 
		        	return "TRECE";
		        case 4: 
		        	return "CATORCE";
		        case 5: 
		        	return "QUINCE";
		        default: 
		        return "DIECI" + unidades(unidad);
			}
		case 2:
			switch(unidad){
				case 0:
					return "VEINTE";
				default:
					return "VEINTI" + unidades(unidad);
			}
		case 3:
			return decenasY("TREINTA", unidad);
		case 4:
			return decenasY("CUARENTA", unidad);
		case 5:
			return decenasY("CINCUENTA", unidad);
		case 6:
			return decenasY("SESENTA", unidad);
		case 7:
			return decenasY("SETENTA", unidad);
		case 8:
			return decenasY("OCHENTA", unidad);
		case 9:
			return decenasY("NOVENTA", unidad);
		case 0:
			return unidades(unidad);
	}
}

/**
 * Añade "Y" cuando el número lo requiere
 * @param  letras Cadena de texto correspondiente a las decenas
 * @param  unidad unidad correspondiente al número
 * @return cadena de texto con "Y"
 */
function decenasY(letras,unidad){
	if(unidad>0){
		return letras + " Y " + unidades(unidad);
	}else{
		return letras;
	}
	
}


/**
 * Multiplica los números impares hasta el 20
 */
function multiplicarImpares(){
	var resultado =1;
	var mensajeImpares = document.getElementById("mensajeImpares");
	for (var i = 1; i < 20; i=i+2) {
		resultado*=i;
	};
	mensajeImpares.innerHTML = "Multiplicación números impares: "+resultado;
}

function declararVariables(){
	var enviar = document.getElementById("enviar");
	var enviar2 = document.getElementById("enviar2");
	enviar.addEventListener("click", comprobar);
	enviar2.addEventListener("click", multiplicarImpares);
}

document.addEventListener("DOMContentLoaded", declararVariables);