/**
 * Muestra una piramide
 */

function piramide(){
	var cadena = "";
	var valor="";
	document.write("<h1>Piramide</h1>");
	for (var i = 1; i <10; i++) {
    	for (var j = 1; j <= i; j++) {
    		cadena += i;
        };
        cadena += "</br>"; 
    };
    document.write(cadena);
    document.close();
 }


document.addEventListener("DOMContentLoaded", piramide);

