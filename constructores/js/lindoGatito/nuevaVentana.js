function init(){

	var btnCrearGato=document.getElementById("crearGato");

	btnCrearGato.addEventListener("click",nuevaVentanaGatuna);


	function errorGatuno(message){
		this.name="ERROR";
		this.message=message;
	}

	function nuevaVentanaGatuna(){
		try{
			if(comprobarDatos()){
				var nuevaVentana=window.open('','',"width=900,height=800");
				nuevaVentana.document.write(
				"<!DOCTYPE html>"+
					"<html lang='es'>"+
					"<head>"+
					"<meta charset='UTF-8'>"+
				  	"<meta http-equiv='X-UA-Compatible' content='IE=edge'>"+
				  	"<meta name='viewport' content='width=device-width, initial-scale=1'>"+
				  	"<link rel='stylesheet' href='../css/bootstrap.css'>"+
				  	"<link rel='stylesheet' href='../css/bootstrap-theme.css'>"+
				  	"<script src='../js/jquery.js'></script>"+
				  	"<script src='../js/bootstrap.js'></script>"+
					"<title>LindoGatito</title>"+
					"</head>"+
					"<body>"+
					"<div class=\"col-lg-12 text-center\">"+
					"<p>Gato</p>"+
					"</div>"+
					"<div class=\"col-lg-12 text-center\" id=\"contenido\">"+
					"</div>"+
					"<h2 id=\"errorGatuno\"></h2>"+
					"<span id=\"datosGatunos\"></span>"+
					"<div class=\"col-lg-12 text-center\">"+
					"</br><input class=\"btn btn-primary\" type=\"submit\" id=\"comer\" value=\"Comer\"/>"+
					"<input class=\"btn btn-primary\" type=\"submit\" id=\"dormir\" value=\"Dormir\"/>"+
					"<input class=\"btn btn-primary\" type=\"submit\" id=\"jugar\" value=\"Jugar\"/>"+
					"<input class=\"btn btn-primary\" type=\"submit\" id=\"edad\" value=\"Ver edad\"/>"+
					"</div>"+
					"<script src='js/lindoGatito/lindoGatito.js'></script>"+
					"</body>"+
					"</html>"
				);
			}
		}catch(e){
			document.getElementById("error").innerHTML=e.name+"&nbsp";
			document.getElementById("error").innerHTML+=e.message;
		}
	}

	function comprobarDatos(){
		if(!esValidoNombre()){
			throw new errorGatuno("El nombre no es válido");
		}
		if(!esValidoPeso()){
			throw new errorGatuno("El peso no es válido (2-14)");
		}
		if(!esValidaFecha()){
			throw new errorGatuno("Fecha no válida");
		}
		return true;
	}


	function esValidaFecha(){
		var fechaForm = document.getElementById("fechaN").value;
		
		var fechaMolon=new Date(fechaForm);
		var dia=fechaMolon.getDate();

		var diaRecortado= fechaForm.substr(0,2);
		var mesRecortado= parseInt(fechaForm.substr(3,2))-1;
		var annoRecortado = fechaForm.substr(6,4);
		var fechaCompleta=new Date(annoRecortado,mesRecortado,diaRecortado);

		if(diaRecortado!=fechaCompleta.getDate()){
			return false;
		}else{
			return true;
		}
	}

	function esValidoNombre(){
		var pattern=/^[a-z]+$/g;
		return pattern.test(document.getElementById("nombre").value);
	}

	function esValidoPeso(){
		var pesoGatuno=document.getElementById("peso").value;
		if(pesoGatuno<2 || pesoGatuno>14){
			return false;
		}
		return true;
	}

}

document.addEventListener("DOMContentLoaded",init);