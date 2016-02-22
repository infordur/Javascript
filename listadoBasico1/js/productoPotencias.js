/**
 * Calcula el producto de las potencias de 2 entre 0 y 10
 */
function productoPotencias(){
	var producto=1;
	document.write("<h1>Producto potencias</h1>");
	for (var i = 0; i < 11; i++) {
		producto*=Math.pow(2,i);
	}
	document.write(producto);
}

document.addEventListener("DOMContentLoaded", productoPotencias);
