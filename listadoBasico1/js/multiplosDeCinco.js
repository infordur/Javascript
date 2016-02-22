/**
 * Comprueba si el número es múltiplo de 5
 */

function comprobar(){

var numeros = document.getElementsByName("numero");

var mensaje= document.getElementsByName("mensaje");

	for (var i = numeros.length - 1; i >= 0; i--) {
		if(numeros[i].value%5==0){
			mensaje[i].innerHTML = "es múltiplo de 5";
		}
		else{
			mensaje[i].innerHTML = " ";
		}
	};
}

function declararVariables(){
	var enviar = document.getElementById("enviar");
	enviar.addEventListener("click", comprobar);
}

document.addEventListener("DOMContentLoaded", declararVariables);