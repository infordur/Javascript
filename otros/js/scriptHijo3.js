var fecha;
/**
 * Muestra una serie de datos en la ventaja hija
 */
function ventanaNueva(){
	document.write("<h1>Ventana Nueva</h1>");
	document.write("Url Completa: "+window.location+"</br>");
	document.write("Protocolo utilizado: "+location.protocol+"</br>");
	document.write("Nombre en código del navegador: "+navigator.appName+"</br>");
	document.write(comprobarJava());
	document.open("http://www.iesgrancapitan.org/portal/","","toolbar=yes","location=no","resizable=no","height=800","width=600");

	document.write("<h1>Tema 3</h1>");
	document.write("Nombre y Apellidos: <input type='text' id='nombre' name='nombre'/></br>");
	document.write("Dia: <input type='text' id='dia' name='dia'/></br>");
	document.write("Mes: <input type='text' id='mes' name='mes'/></br>");
	document.write("Año: <input type='text' id='anno' name='anno'/></br>");
	document.write("<input type='submit' id='enviar' name='enviar' value='enviar'/>");
	document.getElementById("enviar").addEventListener("click",imprimirPrincipal);
	document.close();	
}

/**
 * Muestra una serie de datos en la ventana padre
 */
function imprimirPrincipal(){
	var nombre= document.getElementById("nombre");
	var dia=document.getElementById("dia");
	var mes = document.getElementById("mes");
	var anno = document.getElementById("anno");
	opener.document.write("Buenos dias "+nombre.value+"</br>"+
		"Tu nombre tiene "+nombre.value.length+" caracteres, incluidos espacios.</br>"+
		"La primera \"E\" de tu nombre está en: "+comprobarPrimeraE()+"</br>"+
		"La última \"E\" de tu nombre está en: "+comprobarUltimaE()+"</br>"+
		"Tu nombre sin las 3 primeras letras: "+nombre.value.substring(3,nombre.value.length)+"</br>"+
		"Nombre en mayúsculas: "+nombre.value.toUpperCase()+"</br>"+
		"Tu edad es: "+ calcularEdad() +" años.<br/>"+
		"Naciste un feliz : " + dia.value + " de " + mes.value + " del año " + anno.value + ". " +
        "No te acuerdas, pero era " + diaSemana() + " y " + bisiesto() + " bisiesto</br>" +
        "El coseno de 90 es: " + Math.round(Math.cos(90)) + "</br>"+
        "El número mayor de (65, 22, 69, 99, 12) es: " + numeroMayor() + "</br>" +
        "Ejemplo de número al azar entre 1 y 10: " + Math.floor((Math.random() * 10) + 1) + "</p>");
	opener.document.close();
}


/**
 * Devuelve el número más grande
 * @return número más grande
 */
function numeroMayor(){
    var array = [65, 22, 69, 99, 12];
    array.sort(function(a, b){return b-a});
    return array[0];
}

/**
 * Devuelve el día de la semana
 * @return dia de la semana
 */
function diaSemana(){
	var diasSemana = new Array("domingo","lunes","martes","miercoles","jueves","viernes","sabado");
	return diaSemana[fecha.getDay()];
}

/**
 * Dice si un año es bisiesto o no
 * @return SI si es bisiesto No si no lo es
 */
function bisiesto(){
	if(((anno % 4 == 0) && (anno % 100 != 0)) || (anno % 400 == 0)){
		return "SI";
	}else {
		return "NO";
	}
}


/**
 * Calcula los años desde la fecha que pongas hasta la actual
 * @return devuelve la edad(años)
 */
function calcularEdad(){
	fecha=new Date(anno.value,mes.value,dia.value);
	var hoy=new Date();
	var edad = parseInt((hoy - fecha)/365/24/60/60/1000);
	return edad;
}

/**
 * Devuelve la primera E si la encuentra sino muestra un mensaje
 * @return Devuelve la primera posición de la letra E
 */
function comprobarPrimeraE(){
	if(nombre.value.indexOf("e")==-1){
		return "No contiene la letra \"e\"";
	}else{
		return nombre.value.indexOf("e");
	}
}

/**
 * Devuelve la última E si la encuentra sino muestra un mensaje
 * @return Devuelve la última posición de la letra E
 */
function comprobarUltimaE(){
	if(nombre.value.lastIndexOf("e")==-1){
		return "No contiene la letra \"e\"";
	}else{
		return nombre.value.lastIndexOf("e");
	}
}

/**
 * Comprueba si java está activado o no
 * @return Muestra un mensaje dependiendo de si está activado o no
 */
function comprobarJava(){
	if(navigator.javaEnabled()){
		return "Java SI está disponible en esta ventana";
	}else{
		return "Java NO está disponible en esta ventana";
	}
}

document.addEventListener("DOMContentLoaded", ventanaNueva);
