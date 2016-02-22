function init(){
	var mensaje=document.getElementById("mensaje");
	arr = [ "test", 2, 1.5, false ];

	mensaje.innerHTML="<label>Array inicial:</label></br>";
	for (var i = 0; i < arr.length; i++) {
		mensaje.innerHTML+=arr[i]+" ";
	};

	mensaje.innerHTML+="</br><label>Buscar test</label></br>";
	mensaje.innerHTML+=find(arr, "test");
	mensaje.innerHTML+="</br><label>Buscar 2</label></br>";
	mensaje.innerHTML+=find(arr, 2);
	mensaje.innerHTML+="</br><label>Buscar 1.5</label></br>";
	mensaje.innerHTML+=find(arr, 1.5);
	mensaje.innerHTML+="</br><label>Buscar 0</label></br>";
	mensaje.innerHTML+=find(arr, 0);
}

/**
 * Busca un elemento en un array
 * @param  array Array en el que se busca
 * @param  value Elemento que se busca
 * @return Posición del elemento en el array si se encuentra y si no -1
 */
function find(array,value){
	for (var i = 0; i < array.length; i++) {
		if(array[i]===value){
			return i;
		}
	};
	return -1;
}


document.addEventListener("DOMContentLoaded", init);