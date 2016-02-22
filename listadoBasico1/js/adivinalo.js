
var numeroAdivinar= Math.floor(Math.random()*(100-0+1)+0);

function comprobar(){
	var numero = document.getElementById("numero").value;
	comprobarDatos(numero,numeroAdivinar);


}

function comprobarDatos(numero,numeroAdivinar){
	var mensajeNumero = document.getElementById("mensajeNumero");
	var ventanaNueva;
	if(numero.length ==0){
		mensajeNumero.innerHTML = "Rellene el campo";
	}else if(numero>numeroAdivinar){
		mensajeNumero.innerHTML = "<label>El número que buscas es más PEQUEÑO.</label>";
	}else if(numero<numeroAdivinar){
		mensajeNumero.innerHTML = "<label>El número que buscas es más GRANDE.</label>";
	}else if(numero==numeroAdivinar){
		ventanaNueva = window.open("","Resultado","toolbar=yes","location=no","resizable=no","height=100");
		ventanaNueva.document.write("¡Has Ganado!");

		ventanaNueva.document.close();
		volverAJugar();
	}

}

function volverAJugar(){
	var mensaje;
	var aceptar;
	var rechazar;

	document.getElementById("mensajeNumero").remove();
	document.getElementById("enviar").remove();
	document.getElementById("numero").remove();

	mensaje = document.createElement("label");
	mensaje.innerHTML = "¿Volver a jugar?";
	document.body.appendChild(mensaje);

	aceptar= document.createElement("a");
	aceptar.innerHTML = "Si";
	aceptar.setAttribute("class","btn btn-primary");
	aceptar.setAttribute("onclick","location.href='./adivinalo.html'");
	document.body.appendChild(aceptar);

	rechazar= document.createElement("a");
	rechazar.innerHTML = "No";
	rechazar.setAttribute("class","btn btn-primary");
	rechazar.setAttribute("onclick","location.href='../index.html'");
	document.body.appendChild(rechazar);


}


function declararVariables(){
	var enviar = document.getElementById("enviar");
	enviar.addEventListener("click", comprobar);
}

document.addEventListener("DOMContentLoaded", declararVariables);