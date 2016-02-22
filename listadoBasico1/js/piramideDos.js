/**
 * Muestra una piramide
 */

function piramide(){
	var cadena = "";
	document.write("<h1>Piramide 2</h1>")
	for (var i = 1; i <11; i++) {
        for (var j = 1; j < i; j++) {
           cadena += j;
        };
        cadena += "</br>"; 
    };
    document.write(cadena);
    document.close();
 }

document.addEventListener("DOMContentLoaded", piramide);
