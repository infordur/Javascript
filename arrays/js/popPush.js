function init(){
	var mensaje=document.getElementById("mensaje");
	var styles =["Jazz","Blues"];
	mensaje.innerHTML="<label>Array inicial:</label></br>";
	for (var i = 0; i < styles.length; i++) {
		mensaje.innerHTML+=styles[i]+" ";
	};
	mensaje.innerHTML+="</br><label>Añadir 'Rock'n Roll':</label></br>";
	styles.push("Rock'n Roll");
	for (var i = 0; i < styles.length; i++) {
		mensaje.innerHTML+=styles[i]+" ";
	};

	mensaje.innerHTML+="</br><label>Cambiar penúltimo elemento por Clasic: </label></br>";
	styles[styles.length-2]="Clasic";
	for (var i = 0; i < styles.length; i++) {
		mensaje.innerHTML+=styles[i]+" ";
	};
	mensaje.innerHTML+="</br><label>Eliminar y mostrar el último elemento: </label></br>";
	mensaje.innerHTML+=styles.pop();

	mensaje.innerHTML+="</br><label>Array final: </label></br>";
	for (var i = 0; i < styles.length; i++) {
		mensaje.innerHTML+=styles[i]+" ";
	};
}



document.addEventListener("DOMContentLoaded", init);