/**
 * Dice cuantos números primos hay entre 1 y el valor indicado
 */

function comprobar(){

var numero = document.getElementById("numero");

var mensaje= document.getElementById("mensaje");

var array= new Array();
var contador =0;

	if (numero.value >1) {
        for (var i = 1; i <= numero.value; i++) {
            if (numero.value%i==0) {
                var primo=false;
            }

            for (var j = 2; j < i; j++) {
                if (i%j==0) {
                    var esPrimo=false;
                };
            };

            if (esPrimo) {
                contador++;
            }
            esPrimo=true;
        };
        
        mensaje.innerHTML= "Hay "+contador+" números primos entre 1 y "+numero.value;
     }else{
     	mensaje.innerHTML= "Valor no válido";
     }

}


function declararVariables(){
    var enviar = document.getElementById("enviar");
    enviar.addEventListener("click", comprobar);
}

document.addEventListener("DOMContentLoaded", declararVariables);
