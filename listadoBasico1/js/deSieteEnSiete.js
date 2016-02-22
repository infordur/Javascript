/**
 * Imprime los números del 100-0 de 7 en 7
 */
function sieteEnSiete(){
	var mensaje= document.getElementById("mensaje");
	var cadena="";
	for (var i = 100; i >= 0; i-=7) {
		cadena+=i+" ";
	}
	mensaje.innerHTML=cadena;
}

document.addEventListener("DOMContentLoaded", sieteEnSiete);