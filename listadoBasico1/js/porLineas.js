/**
 * Muestra lo 100 primeros números y un salto de línea en los múltiplos de 7
 */

function porLineas(){
	var cadena = "0,";
	document.write("<h1>Por lineas</h1>")
	for (var i = 1; i < 101; i++) {
		cadena+=i+",";
		if(i%7==0){
			cadena+="</br>";
		}
	};

	document.write(cadena);
	document.close();
 }

document.addEventListener("DOMContentLoaded", porLineas);
