/**
 * Muestra lo 100 primeros números y un salto de línea en los múltiplos de 7 o que el número acabe en 7
 */

function porLineasDos(){
	var cadena = "0,";
	document.write("<h1>Por lineas 2</h1>")
	for (var i = 1; i < 101; i++) {
		cadena+=i+",";
		if(i%7==0 || i.toString().substr(-1)==7){
			cadena+="</br>";
		}
	};

	document.write(cadena);
	document.close();
 }

document.addEventListener("DOMContentLoaded", porLineasDos);
