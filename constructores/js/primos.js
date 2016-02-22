(function(){
	var primo = [];
	var suma=0;

	for (var i = 2; i < 100 ; i++) {
	    if (esPrimo(i,i-1)) {
	        primo.push(i);
	    }
	}

	for (var i = 0; i < primo.length; i++) {
		suma+=primo[i];
	};


	function esPrimo(primo, anterior){
		if (anterior === 1){
			return true;
		}
		if(primo%anterior === 0){
			return false;
		}
		return esPrimo(primo, anterior-1);
	}

	function nuevaVentana(){
		var miVentana;
		miVentana=window.open('','','width=400,height=400');
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
			"<title>Suma números primos</title>"+
			"</head>"+
			"<body>"+
			"<label>La suma de los números primos hasta el 100 es:</label> "+suma+
			"</body>"+
			"</html>");
	 	miVentana.document.close();
	}

	nuevaVentana();

})();





	


    
