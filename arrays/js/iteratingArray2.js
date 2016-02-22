function init(){
	var mensaje=document.getElementById("mensaje");
	arr = ["a", 1, "b", 2];

	mensaje.innerHTML="<label>Array inicial:</label></br>";
	for (var i = 0; i < arr.length; i++) {
		mensaje.innerHTML+=arr[i]+" ";
	};

	arr = filterNumeric(arr);

	mensaje.innerHTML+="</br><label>Array filtrado sólo con valores numéricos:</label></br>";
	for (var i = 0; i < arr.length; i++) {
		mensaje.innerHTML+=arr[i]+" ";
	};
}

function filterNumeric(array){
	var nuevoArray=[];
	for (var i = 0; i < array.length; i++) {
		if(!isNaN(array[i])){
			nuevoArray.push(array[i]);
		}
	};

	return nuevoArray;
}


document.addEventListener("DOMContentLoaded", init);