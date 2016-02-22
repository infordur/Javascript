function init(){
   var mensaje=document.getElementById("mensaje");
	objetoMolon=0;
	var obj = {
		className: 'open menu'
	}

	mensaje.innerHTML+="</br><label>Objeto al principio: </label></br>";
	mensaje.innerHTML+= obj.className;
	
	mensaje.innerHTML+="</br><label>Quitamos 'open': </label></br>";
	// obj.className='open menu new
	mensaje.innerHTML+=removeClass(obj, 'open');
	
	mensaje.innerHTML+="</br><label>Quiramos 'blabla': </label></br>";
	//removeClass(obj, 'blabla');  // no changes (class already exists)
	mensaje.innerHTML+=removeClass(obj, 'blabla');

}

/**
 * Elimina un elemento del className del objeto
 * @param obj Objeto al que queremos eliminar
 * @param cls Elemento que queremos eliminar
 */
function removeClass(obj, cls){
	var objeto= obj.className.split(" ");

	for (var i = 0; i < objeto.length; i++) {
		if(objeto[i]===cls){
			objeto.splice(i,1);
		}
	};
	return objeto.join(" ");

}

document.addEventListener("DOMContentLoaded", init);