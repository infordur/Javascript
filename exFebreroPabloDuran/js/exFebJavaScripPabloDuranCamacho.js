document.addEventListener('DOMContentLoaded', function() {
	//Variables
	var nombre=document.getElementById("nombre");
	var apellido1=document.getElementById("apellido1");
	var apellido2=document.getElementById("apellido2");
	var dni=document.getElementById("dni");
	var sexo=document.getElementById("sexo");
	var checkbox=document.getElementById("checkbox");
	var datosUsuario=document.getElementById("datosUsuario");
	var lista=document.getElementById("lista");
	var btnEnviar=document.getElementById("enviar");
	var btnLimpiar=document.getElementById("limpiar");

	var errorNombre=document.getElementById("errorNombre");
	var errorApellido1=document.getElementById("errorApellido1");
	var errorApellido2=document.getElementById("errorApellido2");
	var errorDni=document.getElementById("errorDni");
	var errorCheckbox=document.getElementById("errorCheckbox");


	//Clase Usuario
	function Usuario(nombre,apellido1,apellido2,dni,sexo){
		this.nombre=nombre;
		this.apellido1=apellido1;
		this.apellido2=apellido2;
		this.dni=dni;
		this.sexo=sexo;
	}

	//Crea un usuario si los datos están bien, sino muestra un mensaje.
	function crearUsuario(){
		var compNombre=validarNombre(nombre.value,errorNombre);
		var compApellido1=validarApellidos(apellido1.value,errorApellido1);
		var compApellido2=validarApellidos(apellido2.value,errorApellido2);
		var compDni=validarDNI(dni.value,errorDni);
		var compCheckbox=validarCheckbox(errorCheckbox);

		if(compNombre && compApellido1 && compApellido2 && compDni && compCheckbox){
			var usuario= new Usuario(nombre.value,apellido1.value,apellido2.value,dni.value,sexo.value);
			usuario.mostrar();
			usuario.crearListItem();
			document.cookie="Nombre="+usuario.nombre+";expires="+tiempoCookie(2);
			document.cookie="Apellido1="+usuario.apellido1+";expires="+tiempoCookie(2);
			document.cookie="Apellido2="+usuario.apellido2+";expires="+tiempoCookie(2);
			document.cookie="DNI="+usuario.dni+";expires="+tiempoCookie(2);
			document.cookie="Sexo="+usuario.sexo+";expires="+tiempoCookie(2);
		}else{
			datosUsuario.innerHTML="El usuario no se ha podido crear";
		}
	}

	//Muestra la información de un usuario en un div
	Usuario.prototype.mostrar=function(){
		document.getElementById("datosUsuario").innerHTML="Nombre: "+this.nombre+"<br/>Apellido1: "+this.apellido1+" </br>Apellido2: "+this.apellido2+" <br/>DNI: "+this.dni+"<br/>Sexo: "+this.sexo;
	}

	//Crea <li> en un <ul> con la información del usuario
	Usuario.prototype.crearListItem=function(){
		var elemento=document.createElement("li");
		var contenido=document.createTextNode("Nombre: "+this.nombre+", Apellido1: "+this.apellido1+", Apellido2: "+this.apellido2+", DNI: "+this.dni+" Sexo: "+this.sexo);
		elemento.appendChild(contenido);

		lista.appendChild(elemento);
	}

	//convierte el tiempo a dias
	function tiempoCookie(tiempo){
		var fecha=new Date();
		fecha.setTime(fecha.getTime()+(tiempo)*24*60*60*1000);
		return fecha.toUTCString();
	}

	//Valida el nombre de un usuario
	function validarNombre(texto,campoError){
		var bandera=true;
		var patron=/^[\wáéíóúñÁÉÍÓÚÑ_-]{4,}$/;
		var mensajeError="";

		if(texto.trim().length==0){
			mensajeError="Mínimo 4 caracteres";
			bandera=false;
		}else if(!patron.test(texto)){
			mensajeError="Nombre no válido";
			bandera=false;
		}
		mostrarError(mensajeError,campoError);
		return bandera;
	}

	//Valida los apellidos de un usuario
	function validarApellidos(texto,campoError){
		var bandera=true;
		var mensajeError="";

		if(texto.trim().length==0){
			mensajeError="Mínimo 4 caracteres";
			bandera=false;
		}
		mostrarError(mensajeError,campoError);
		return bandera;
	}

	//Valida en DNI de un usuario
	function validarDNI(texto,campoError){
		var patron=/^[0-9]{8}[A-z]{1}$/;
		var bandera=true;
		var mensajeError="";
		if(texto.trim().length==0){
			mensajeError="Rellene el campo";
			bandera=false;
		}else if(!patron.test(texto)){
			mensajeError="DNI no válido, ej:12345678Z";
			bandera=false;
		}
		mostrarError(mensajeError,campoError);
		return bandera;
	}

	//Comprueba que el checkbox ha sido marcado
	function validarCheckbox(campoError){
		var bandera=true;
		var mensajeError="";

		if(checkbox.checked==false){
			mensajeError="Acepte las condiciones";
			bandera=false;
		}
		mostrarError(mensajeError,campoError);
		return bandera;
	}

	//Muestra un error en función del error pasado por parámetro o lo elimina.
	function mostrarError(mensajeError,campoError){
		if(mensajeError!=""){
			campoError.innerHTML=mensajeError;
		}else{
			campoError.innerHTML="";
		}
	}

	//Limpia todos los campos del formulario, mensajes de error y cookies.
	function limpiarCampos(){
		nombre.value="";
		apellido1.value="";
		apellido2.value="";
		dni.value="";
		checkbox.checked=false;

		errorNombre.innerHTML="";
		errorApellido1.innerHTML="";
		errorApellido2.innerHTML="";
		errorDni.innerHTML="";
		errorCheckbox.innerHTML="";
		datosUsuario.innerHTML="";

		document.cookie="Nombre="+""+";expires="+tiempoCookie(-2);
		document.cookie="Apellido1="+""+";expires="+tiempoCookie(-2);
		document.cookie="Apellido2="+""+";expires="+tiempoCookie(-2);
		document.cookie="DNI="+""+";expires="+tiempoCookie(-2);
		document.cookie="Sexo="+""+";expires="+tiempoCookie(-2);
	}


	nombre.addEventListener('blur', function() {
		validarNombre(nombre.value,errorNombre);
	});

	apellido1.addEventListener('blur', function() {
		validarApellidos(apellido1.value,errorApellido1);
	});

	apellido2.addEventListener('blur', function() {
		validarApellidos(apellido2.value,errorApellido2);
	});

	dni.addEventListener('blur', function() {
		validarDNI(dni.value,errorDni);
	});

	checkbox.addEventListener('blur', function() {
		validarCheckbox(errorCheckbox);
	});

	btnEnviar.addEventListener('click', function() {
		crearUsuario();
	});

	btnLimpiar.addEventListener('click', function() {
		limpiarCampos();
	});
});