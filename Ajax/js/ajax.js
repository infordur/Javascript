document.addEventListener('DOMContentLoaded', function() {
	/*
	Ejercicio 11

	A partir de la página web proporcionada, añadir el código JavaScript necesario para que:

    1.Al cargar la página, el cuadro de texto debe mostrar por defecto la URL de la propia página.
    2.Al pulsar el botón "Mostrar Contenidos", se debe descargar mediante peticiones AJAX el contenido correspondiente a la URL introducida por el usuario. El contenido de la respuesta recibida del servidor se debe mostrar en la zona de "Contenidos del archivo".
    3.En la zona "Estados de la petición" se debe mostrar en todo momento el estado en el que se encuentra la petición (No inicializada, cargando, completada, etc.)
    4.Mostrar el contenido de todas las cabeceras de la respuesta del servidor en la zona "Cabeceras HTTP de la respuesta del servidor".
    5.Mostrar el código y texto de estado de la respuesta del servidor en la zona "Código de estado".
	 */
	var url=document.getElementById("recurso");
	var contenido=document.getElementById("contenidos");
	var cabeceras=document.getElementById("cabeceras");
	var estado=document.getElementById("estados");
	var codigo=document.getElementById("codigo");
	var boton=document.getElementById("enviar");

	var READY_STATE_UNINITIALIZED=0; 
	var READY_STATE_LOADING=1; 
	var READY_STATE_LOADED=2;
	var READY_STATE_INTERACTIVE=3; 
	var READY_STATE_COMPLETE=4;
	var estadosP=["no inicializado","cargando","cargado","interactivo","completo"];
	 
	var peticion_http;
	 
	function cargaContenido(url, metodo, funcion) {
	  peticion_http = inicializa_xhr();
	 
	  if(peticion_http) {
	    peticion_http.onreadystatechange = funcion;
	    peticion_http.open(metodo, url, true);
	    peticion_http.send(null);
	  }
	}
	 
	function inicializa_xhr() {
	    return new XMLHttpRequest();
	}
	 
	function muestraContenido() {
		mostrarEstado();
		mostrarCabeceras();
		if(peticion_http.readyState == READY_STATE_COMPLETE) {
			if(peticion_http.status == 200) {
				contenido.innerHTML=peticion_http.responseText;
			}
		}

	}

	function mostrarEstado(){
		estado.innerHTML+=peticion_http.readyState+": "+estadosP[peticion_http.readyState]+"</br>";
		codigo.innerHTML=peticion_http.status + ": " + peticion_http.statusText;
	}
	
	function mostrarCabeceras(){
		cabeceras.innerHTML = peticion_http.getAllResponseHeaders();
	}

	function limpiarCampos(){
		estado.innerHTML="";
		codigo.innerHTML="";
	}

	function descargaArchivo() {
	  cargaContenido(url.value, "GET", muestraContenido);
	}
	 
	window.onload = descargaArchivo;
 
	enviar.addEventListener('click', function() {
		limpiarCampos();
		descargaArchivo();
	});


	url.value=location.href;
	
});