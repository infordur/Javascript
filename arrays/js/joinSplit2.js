function init(){
	var mensaje=document.getElementById("mensaje");

	mensaje.innerHTML+="</br><label>Cameliza 'background-color' </label></br>";
	mensaje.innerHTML+= camelize("background-color");
	
	mensaje.innerHTML+="</br><label>Añadimos 'list-style-image': </label></br>";
	mensaje.innerHTML+= camelize("list-style-image");
	
}

/**
 * Cameliza una cadena
 * @param  str Cadena que se quiere camelizar
 * @return cadena camelizada
 */
function camelize(str){
	var cadena= str.split("-");
	for (var i = 0; i < cadena.length; i++) {
		if(i>0){
			cadena[i]= cadena[i].charAt(0).toUpperCase()+cadena[i].substr(1);
		}
	};
	return cadena.join("");
}

document.addEventListener("DOMContentLoaded", init);