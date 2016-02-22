/**
 * Cierra ventanas
 */
function ejecutar(){
	document.getElementById("cerrar").addEventListener("click", cerrarVentana);
}


/**
 * Cierra ventanas
 */
function cerrarVentana(){
	window.close();
}

document.addEventListener("DOMContentLoaded", ejecutar);
