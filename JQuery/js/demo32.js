$(document).ready(function(){
	var numClics = 0;
	var numDobleClics = 0;

	$("#micapa").dblclick(function(){
		numDobleClics++;
		$("#mensaje").html("Has hecho doble-clic<br>" + "Número de clics: " + numClics + "<br>Número de doble clics: " + numDobleClics);
	});
	$("#micapa").click(function(){
		numClics++;
		$("#mensaje").html("Has hecho clic<br>" + "Número de clics: " + numClics + "<br>Número de doble clics: " + numDobleClics);
	});
});