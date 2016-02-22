function init(){
	var mensaje=document.getElementById("mensaje");
	var nombres = ["Manolo","Rafael","Maria","Pedro","Javier"];

	mensaje.innerHTML+="<label>Array recorrido con forEach: </label></br>";
	nombres.forEach(mostrarNombres);
}

/**
 * Callback para forEach
 * @param array Array que se desea buscar
 */
function mostrarNombres(array){
	mensaje.innerHTML+=array+" ";
}
    
document.addEventListener("DOMContentLoaded", init);