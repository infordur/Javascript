function init(){
	var mensaje=document.getElementById("mensaje");
	var arr = ["Plum","Orange","Donkey","Carrot","JavaScript"];
	var rand =Math.floor(Math.random()*arr.length);
	mensaje.innerHTML="<label>Array inicial:</label></br>";
	for (var i = 0; i < arr.length; i++) {
		mensaje.innerHTML+=arr[i]+" ";
	};

	mensaje.innerHTML+="</br><label>Elemento aleatorio: </label></br>";
	mensaje.innerHTML+=arr[rand];
}



document.addEventListener("DOMContentLoaded", init);