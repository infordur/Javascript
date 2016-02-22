/**
 * Comprueba si el número es primo
 */

function comprobar(){

var numero = document.getElementById("numero");

var mensaje= document.getElementById("mensaje");

	if (numero.value == 1 || numero.value == 2) {
		mensaje.innerHTML=numero.value + " es primo";
	}
	for (var i=2;i<numero.value;i++) {
		if (numero.value % i == 0) {
			var primo=true;
			mensaje.innerHTML=" no es primo.  Es divisible por " + i + ".";
			break;
		}
		if (numero.value % i != 0){
			var primo=false;
		}
	}
	if (primo == false){
	 mensaje.innerHTML="es primo";
	}
}


function declararVariables(){
	var enviar = document.getElementById("enviar");
	enviar.addEventListener("click", comprobar);
}

document.addEventListener("DOMContentLoaded", declararVariables);

