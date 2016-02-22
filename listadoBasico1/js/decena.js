/**
 * Dice cuantos decimales tiene un dígito
 */

function comprobar(){
	var numero = document.getElementById("numero").value.split(".");
	var num= document.getElementById("numero").value;

	var mensaje = document.getElementById("mensaje");
	var mensaje2 = document.getElementById("mensaje2");

	if(num=>0 && num<10){
		var digitos = numero[1].length;

		if(numero.length-1==0){
			mensaje.innerHTML = numero+" no tiene decimales";
		}else{
			mensaje.innerHTML = "</br>"+numero+" tiene "+ digitos +" decimales</br>";
			mensaje2.innerHTML = "Número invertido: "+numero.reverse();
		}
	}
	else{
		mensaje.innerHTML = "el número no es válido";
	}

}

function declararVariables(){
	var enviar = document.getElementById("enviar");
	enviar.addEventListener("click", comprobar);
}

document.addEventListener("DOMContentLoaded", declararVariables);

