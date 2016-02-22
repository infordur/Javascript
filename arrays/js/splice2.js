function init(){
	var mensaje=document.getElementById("mensaje");
	arr = ["a", 1, "b", 2];

	mensaje.innerHTML+="</br><label>Array inicial: </label></br>";
	for (var i = 0; i < arr.length; i++) {
		mensaje.innerHTML+=arr[i]+" ";
	};

	mensaje.innerHTML+="</br><label>Array filtrado sin valores numéricos: </label></br>";
	mensaje.innerHTML+=filterNumericInPlace(arr);

}

function filterNumericInPlace(arr){
	for (var i = 0; i < arr.length; i++) {
		if(!isNaN(arr[i])){
			arr.splice(arr[i],1);
		}
	};
	return arr.join(" ");
}

document.addEventListener("DOMContentLoaded", init);