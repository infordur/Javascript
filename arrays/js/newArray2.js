function init(){
	var mensaje=document.getElementById("mensaje");
	var primo = [];
	var suma=0;

	for (var i = 2; i < 100 ; i++) {
	    if (esPrimo(i)) {
	        primo.push(i);
	    }
	}

	for (var i = 0; i < primo.length; i++) {
		suma+=primo[i];
	};
	mensaje.innerHTML+="<label>La suma de los números primos hasta el 100 es:</label> "+suma;

}


/**
 * Dice si un número es primo o no
 * @param num Número a comprobar
 * @return Número primo
 */
function esPrimo(num) {
  var primo = num != 1;
	for (var i = 2; i < num; i++) {
		if (num % i === 0) {
			primo = false;
			break;
		}
	}
	return primo;
}
    
document.addEventListener("DOMContentLoaded", init);