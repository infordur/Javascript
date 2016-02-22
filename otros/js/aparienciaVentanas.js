/**
 * Abre una nueva ventana
 */
function abrir(){
	document.getElementById("abrir").addEventListener("click", abrirVentana);
	
}

/**
 * Abre una nueva ventana
 */
function abrirVentana(){
	var ventanaNueva=window.open("","Ventana de Prueba","width=300,height=200,top=0,left=0,scrollbars=NO");
	ventanaNueva.document.write("<!DOCTYPE html>"+
		"<html lang='es'>"+
		"<head>"+
		"<meta charset='UTF-8'>"+
	  	"<meta http-equiv='X-UA-Compatible' content='IE=edge'>"+
	  	"<meta name='viewport' content='width=device-width, initial-scale=1'>"+
	  	"<link rel='stylesheet' href='../css/bootstrap.css'>"+
	  	"<link rel='stylesheet' href='../css/bootstrap-theme.css'>"+
	  	"<script src='../js/jquery.js'></script>"+
	  	"<script src='../js/bootstrap.js'></script>"+
		"<title>Ventana de Prueba</title>"+
		"</head>"+
		"<body>"+
		"<p>Se han utilizado las propiedades:</p>"+
		"<ul>"+
		"<li>height: 200</li>"+
		"<li>width: 300</li>"+
		"</ul>"+
		"</body>"+
		"</html>");
 	ventanaNueva.document.close();
 }


document.addEventListener("DOMContentLoaded", abrir);
