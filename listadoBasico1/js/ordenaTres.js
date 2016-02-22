/**
 * Ordena valores introducidos por teclado
 */

function comprobar(){
var array = new Array(document.getElementById("numero1").value,document.getElementById("numero2").value,document.getElementById("numero3").value);

var mensaje= document.getElementById("mensaje");
var mensaje2= document.getElementById("mensaje2");

mensaje.innerHTML = "Orden ascendente: "+array.sort(function(a, b){return a-b})+"</br>";
mensaje2.innerHTML = "Orden descendente: "+array.sort(function(a, b){return b-a});

}

function declararVariables(){
	var enviar = document.getElementById("enviar");
	enviar.addEventListener("click", comprobar);
}

document.addEventListener("DOMContentLoaded", declararVariables);

