function init(){
	var mensaje=document.getElementById("mensaje");
	var obj = {
		className: 'open menu'
	}

	mensaje.innerHTML+="</br><label>Objeto al principio: </label></br>";
	mensaje.innerHTML+= obj.className;
	
	mensaje.innerHTML+="</br><label>Añadimos 'new': </label></br>";
	addClass(obj, 'new'); // obj.className='open menu new
	mensaje.innerHTML+= obj.className;
	
	mensaje.innerHTML+="</br><label>Añadimos 'open': </label></br>";
	addClass(obj, 'open');  // no changes (class already exists)
	mensaje.innerHTML+= obj.className;
	
	mensaje.innerHTML+="</br><label>Añadimos 'me': </label></br>";
	addClass(obj, 'me'); // obj.className='open menu new me'
	mensaje.innerHTML+= obj.className;

	mensaje.innerHTML+="</br><label>Objeto al final: </label></br>";
	mensaje.innerHTML+= obj.className;

}

/**
 * Añade un elemento al className del objeto
 * @param obj Objeto al que queremos añadir
 * @param cls Elemento que queremos añadir
 */
function addClass(obj, cls){
	var objeto= obj.className.split(" ");

	for (var i = 0; i < objeto.length; i++) {
		if(objeto[i]===cls){
			return;
		}
	};
	obj.className+=" "+cls;

}

document.addEventListener("DOMContentLoaded", init);