/**
 * Abre una nueva ventana
 */
function abrir(){
	document.getElementById("abrir").addEventListener("click", abrirVentanas);
	
}

/**
 * Abre 5 ventanas
 */
function abrirVentanas(){
	var miVentana;
	for (var i = 0; i < 5; i++) {
		miVentana=window.open('','','width=200,height=200');
		miVentana.document.write("<!DOCTYPE html>"+
			"<html lang='es'>"+
			"<head>"+
			"<meta charset='UTF-8'>"+
		  	"<meta http-equiv='X-UA-Compatible' content='IE=edge'>"+
		  	"<meta name='viewport' content='width=device-width, initial-scale=1'>"+
		  	"<link rel='stylesheet' href='../css/bootstrap.css'>"+
		  	"<link rel='stylesheet' href='../css/bootstrap-theme.css'>"+
		  	"<script src='../js/jquery.js'></script>"+
		  	"<script src='../js/bootstrap.js'></script>"+
		  	"<script src='js/multCerrarVentanas.js'></script>"+
			"<title>Múltiples Ventanas</title>"+
			"</head>"+
			"<body>"+
			"<p>Ventana "+(i)+"</p>"+
			"<a class='btn btn-primary' name='cerrar' id='cerrar'>Cerrar</a>"+
			"</body>"+
			"</html>");
	 	miVentana.document.close();
	};
	
 }


document.addEventListener("DOMContentLoaded", abrir);
