document.addEventListener('DOMContentLoaded', function() {

	//texto.focus();

	function comprobarPatron(patron, elemento){
		return patron.test(elemento.value);
	}

	function errorElemento(elemento){
		var fgcorrecto=true;
		switch(elemento){
			case texto:
				var error=document.getElementById("textoError");
				if(!comprobarPatron(/^[A-Za-z]+$/,elemento)){
					elemento.classList.add("error");
					error.innerHTML="Rellene el campo";	
					fgcorrecto=false;
				}else{
					error.innerHTML="";
					elemento.classList.remove("error");
				}
				
				break;

			case numero:
				var error=document.getElementById("numeroError");
				if(elemento.value.length==0){
					elemento.classList.add("error");
					error.innerHTML="Rellene el campo";
					fgcorrecto=false;
				}else if(!comprobarPatron(/^\d+$/,elemento)){
					elemento.classList.add("error");
					error.innerHTML="Sólo números";
					fgcorrecto=false;
				}else{
					error.innerHTML="";
					elemento.classList.remove("error");
				}
				break;

			case telefono:
				var error=document.getElementById("telefonoError");

				if(elemento.value.length==0){
					elemento.classList.add("error");
					error.innerHTML="Rellene el campo";
					fgcorrecto=false;
				}else if(!comprobarPatron(/^[9|8|7|6]{1}([\d]{2}[-|\s]?){3}[\d]{2}$/,elemento)){
					elemento.classList.add("error");
					error.innerHTML="teléfono inválido";
					fgcorrecto=false;
				}else{
					error.innerHTML="";
					elemento.classList.remove("error");
				}
				break;

			case email:
				var error=document.getElementById("emailError");

				if(elemento.value.length==0){
					elemento.classList.add("error");
					error.innerHTML="Rellene el campo";
					fgcorrecto=false;
				}else if(!comprobarPatron(patron,elemento)){
					elemento.classList.add("error");
					error.innerHTML="email no válido";
					fgcorrecto=false;
				}else{
					error.innerHTML="";
					elemento.classList.remove("error");
				}
				break;
		
			case urlC:
				var error=document.getElementById("urlError");

				if(elemento.value.length==0){
					elemento.classList.add("error");
					error.innerHTML="Rellene el campo";
					fgcorrecto=false;
				}else if(!comprobarPatron(/^((http|https):(\/\/))?((w){3})?(\.{1})?([A-z]+(\.{1}[A-z]{2,8}){1,3})$/,elemento)){
					elemento.classList.add("error");
					error.innerHTML="url no válida";
					fgcorrecto=false;
				}else{
					error.innerHTML="";
					elemento.classList.remove("error");
				}
				break;

			case fecha:
				var error=document.getElementById("fechaError");

				if(elemento.value.length==0){
					elemento.classList.add("error");
					error.innerHTML="Rellene el campo";
					fgcorrecto=false;
				}else if(!comprobarPatron(/^[\d]{2}(\/|-){1}[\d][\d](\/|-){1}[\d]{4}$/,elemento.value.split("").reverse().join(""))){
					elemento.classList.add("error");
					error.innerHTML="Fecha no válida";
					fgcorrecto=false;
				}else{
					error.innerHTML="";
					elemento.classList.remove("error");
				}
				break;

			case cuentaBanco:
				var error=document.getElementById("bancoError");

				if(elemento.value.trim().length==0){
					elemento.classList.add("error");
					error.innerHTML="Rellene el campo";
					fgcorrecto=false;
				}else if(!comprobarPatron(/^([\d]{4}(\s|-){1}){2}[\d]{2}(\s|-){1}[\d]{10}$/,elemento)){
					elemento.classList.add("error");
					error.innerHTML="Cuenta no válida";
					fgcorrecto=false;
				}else{
					error.innerHTML="";
					elemento.classList.remove("error");
				}
				break;

			case dni:
				var error=document.getElementById("dniError");
				var letras=["T","R","W","A","G","M","Y","F","P","D","X","B","N","J","Z","S","Q","V","H","L","C","K","E"];
				var letraBuena=letras[(elemento.value.slice(0,elemento.value.length-1))%23];
				
				if(elemento.value==0){
					elemento.classList.add("error");
					error.innerHTML="Rellene el campo";
					fgcorrecto=false;
				}else if(!comprobarPatron(/^[\d]{8}[A-Z]$/,elemento)){
					elemento.classList.add("error");
					error.innerHTML="Formato no válido";
					fgcorrecto=false;
				}else if(elemento.value.slice(-1)!=letraBuena){
					elemento.classList.add("error");
					error.innerHTML="La letra no concuerda con el número";
					fgcorrecto=false;
				}else{
					error.innerHTML="";
					elemento.classList.remove("error");
				}
				break;
			case select:
				var error=document.getElementById("selectError");
				if(elemento.options[elemento.selectedIndex].value==0){
					elemento.classList.add("error");
					error.innerHTML="Seleccione una opción";
					fgcorrecto=false;
				}else{
					error.innerHTML="";
					elemento.classList.remove("error");
				}
				break;

			case radios:
				//elemento=document.getElementsByName("radios");
				var error=document.getElementById("radioError");
				var valido=0;
				for (var i = 0; i < elemento.length; i++) {
					if(elemento[i].checked){
						valido=1;
					}
				};

				if(valido==0){
					error.innerHTML="Seleccione una opción";
					elemento[0].classList.add("error");
					fgcorrecto=false;
				}else{
					error.innerHTML="";
					elemento[0].classList.remove("error");
				}
				break;

			case checkboxs:
				elemento=document.getElementsByName("checkboxs");
				var error=document.getElementById("checkboxError");
				var valido=0;
				for (var i = 0; i < elemento.length; i++) {
					if(elemento[i].checked){
						valido=1;
					}
				};

				if(valido==0){
					elemento[0].classList.add("error");
					error.innerHTML="Seleccione una opción";
					fgcorrecto=false;
				}else{
					error.innerHTML="";
					elemento[0].classList.remove("error");
				}
				break;
		}

		if(!fgcorrecto){
			elemento.focus();
		}
	}


	function validarConjunto(){
		var valido=true;
		var elemento="";

		/*if(!esValidoCheckbox(document.getElementsByName("checkboxs"))){
			valido=false;
			elemento=document.getElementsByName("checkboxs");
			var error=document.getElementById("checkboxError");
			var valido=0;
			for (var i = 0; i < elemento.length; i++) {
				if(elemento[i].checked){
					valido=1;
				}
			};

			if(valido==0){
				elemento[0].classList.add("error");
				error.innerHTML="Seleccione una opción";
			}else{
				error.innerHTML="";
				elemento[0].classList.remove("error");
			}
		}

		if(!esValidoRadio(document.getElementsByName("radios"))){
			valido=false;
			elemento=document.getElementsByName("radios");
			var error=document.getElementById("radioError");
			var valido=0;
			for (var i = 0; i < elemento.length; i++) {
				if(elemento[i].checked){
					valido=1;
				}
			};

			if(valido==0){
				error.innerHTML="Seleccione una opción";
				elemento[0].classList.add("error");
			}else{
				error.innerHTML="";
				elemento[0].classList.remove("error");
			}
		}

		if(!esValidoSelect(select)){
			valido=false;
			elemento=select;
			var error=document.getElementById("selectError");
			if(elemento.options[elemento.selectedIndex].value==""){
				elemento.classList.add("error");
				error.innerHTML="Seleccione una opción";
			}else{
				error.innerHTML="";
				elemento.classList.remove("error");
			}
		}

		*/
		//errorElemento(checkboxs);
		//errorElemento(radio);
		errorElemento(select);

		if(!comprobarPatron(/^[\d]{8}[A-Z]$/,dni)){
			valido=false;
			elemento=dni;
			errorElemento(dni);
		}

		if(!comprobarPatron(/^([\d]{4}(\s|-){1}){2}[\d]{2}(\s|-){1}[\d]{10}$/,cuentaBanco)){
			valido=false;
			elemento=cuentaBanco;
			errorElemento(cuentaBanco);
		}

		if(!comprobarPatron(/^[\d]{2}(\/|-){1}[\d][\d](\/|-){1}[\d]{4}$/,fecha)){
			valido=false;
			elemento=fecha;
			errorElemento(fecha);
		}
	
		if(!comprobarPatron(/^((http|https):(\/\/))?((w){3})?(\.{1})?([A-z]+(\.{1}[A-z]{2,8}){1,3})$/,urlC)){
			valido=false;
			elemento=urlC;
			errorElemento(urlC);
		}


		if(!comprobarPatron(/^[\w]+@{1}[\w]+\.{1}[a-z]{3}$/,email)){
			valido=false;
			elemento=email;
			errorElemento(email);
		}

		if(!comprobarPatron(/^[9|8|7|6]{1}([\d]{2}[-|\s]?){3}[\d]{2}$/,telefono)){
			valido=false;
			elemento=telefono;
			errorElemento(telefono);
		}

		if(!comprobarPatron(/^\d+$/,numero)){
			valido=false;
			elemento=numero;
			errorElemento(numero);
		}

		if(!comprobarPatron(/^[A-Za-z]+$/,texto)){
			valido=false;
			elemento=texto;
			errorElemento(texto);
		}

		if(!valido){
			elemento.focus();
		}
	}



	document.getElementById("texto").addEventListener('blur',function(){
		errorElemento(texto);
	});
	
	document.formulario.numero.addEventListener('blur',function(){
		errorElemento(numero)
	});

	document.formulario.telefono.addEventListener('blur',function(){
		errorElemento(telefono);
	});

	document.formulario.email.addEventListener('blur',function(){
		errorElemento(email);
	});

	document.formulario.urlC.addEventListener('blur',function(){
		errorElemento(urlC);
	});

	document.formulario.fecha.addEventListener('blur',function(){
		errorElemento(fecha);
	});

	document.formulario.cuentaBanco.addEventListener('blur',function(){
		errorElemento(cuentaBanco);
	});

	document.formulario.dni.addEventListener('blur',function(){
		errorElemento(dni);
	});

	document.formulario.select.addEventListener('blur',function(){
		errorElemento(select);
	});
	
	/*for (var i = 0; i < document.getElementsByName("radios").length; i++) {
		document.getElementsByName("radios")[i].addEventListener('blur',function(){
			errorElemento(document.getElementsByName("radios"));
		});
	};*/

	for (var i = 0; i < document.getElementsByName("checkboxs").length; i++) {
		document.getElementsByName("checkboxs")[i].addEventListener('blur',function(){
			errorElemento(document.getElementsByName("checkboxs"));
		});
	};

	document.formulario.enviar.addEventListener('click',validarConjunto);


});