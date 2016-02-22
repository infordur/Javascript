function LindoGatito(nombre,fechaNacimiento,raza,peso){
	this.nombre=nombre;
	this.fechaNacimiento=fechaNacimiento;
	this.raza=raza;
	this.peso=parseInt(peso);
	this.pesoMax=15;
	this.pesoMin=1;
	this.vivo=true;
}

function nuevoGato(){
	var nombre=opener.document.getElementById("nombre").value;
	var fechaNacimiento=opener.document.getElementById("fechaN").value;
	var raza=opener.document.getElementById("raza").value;
	var peso=opener.document.getElementById("peso").value;
	var gato=new LindoGatito(nombre, fechaNacimiento, raza, peso);
	return gato;
}


LindoGatito.prototype.comer=function(){
	if(comprobarPeso()){
		this.peso+=1;
		this.mostrarDatosGatunos("comiendo");
	}	
}


LindoGatito.prototype.jugar=function(){
	if(comprobarPeso()){
		this.peso-=1;
		this.mostrarDatosGatunos("jugando");
	}
	
}


LindoGatito.prototype.dormir=function(){
	if(!estaDurmiendo()){
		document.getElementById("comer").disabled=true;
		document.getElementById("jugar").disabled=true;
		document.getElementById("dormir").value="Despertar";
		this.mostrarDatosGatunos("durmiendo");
	}else{
		document.getElementById("comer").disabled=false;
		document.getElementById("jugar").disabled=false;
		document.getElementById("dormir").value="Dormir";
		this.mostrarDatosGatunos("reposo");
	}
}

function estaDurmiendo(){
	if(document.getElementById("comer").disabled==true){
		return true;
	}else{
		return false;
	}
}

function gatoComer(){
	try{
		gatoMolon.comer();
	}catch(e){
		//document.getElementById("errorGatuno").innerHTML=e.name;
		document.getElementById("errorGatuno").innerHTML+=e.message;
	}
	
}

function gatoJugar(){
	try{
		gatoMolon.jugar();
	}catch(e){
		//document.getElementById("errorGatuno").innerHTML=e.name;
		document.getElementById("errorGatuno").innerHTML+=e.message;
	}
	
}

function gatoDormir(){
	gatoMolon.dormir();
}

function gatoMuerto(message){
	this.name="ERROR";
	this.message=message;
}

function comprobarGatoMuerto(){
	if(gatoMolon.vivo==false){
		return false;
	}else{
		return true;
	}
}

function desactivarBotonesGatoMuerto(){
	document.getElementById("comer").disabled=true;
	document.getElementById("jugar").disabled=true;
	document.getElementById("dormir").disabled=true;
}

function comprobarPeso(){
	if(comprobarGatoMuerto() && gatoMolon.peso+1>=gatoMolon.pesoMax){
		desactivarBotonesGatoMuerto();
		throw new gatoMuerto("Tu gato ha muerto de sobrepeso");
	}else if(comprobarGatoMuerto() && gatoMolon.peso-1<=gatoMolon.pesoMin){
		desactivarBotonesGatoMuerto();
		throw new gatoMuerto("Tu gato ha muerto de tanto jugar");
	}else{
		return true;
	}
	
}


LindoGatito.prototype.calcularEdad = function() {
        var fechaActual = new Date();
        var edad;

        var diaRecortado= gatoMolon.fechaNacimiento.substr(0,2);
		var mesRecortado= parseInt(gatoMolon.fechaNacimiento.substr(3,2))-1;
		var annoRecortado = gatoMolon.fechaNacimiento.substr(6,4);
		var fechaCompleta=new Date(annoRecortado,mesRecortado,diaRecortado);
	
	    edad = parseInt(fechaActual.getFullYear()) - parseInt(fechaCompleta.getFullYear());
        return "El gato tiene "+edad+" años";

};


function verEdadGatuna(){
	var cadena=document.getElementById("datosGatunos");
	cadena.innerHTML=gatoMolon.calcularEdad();
}


LindoGatito.prototype.mostrarDatosGatunos=function(estado){
	var cadena=document.getElementById("contenido");
	switch(estado){
		case "reposo":
			cadena.innerHTML="<img src=\"img/gato.jpg\" alt=\"gato\" height=\"350\" width=\"350\"/>";
			cadena.innerHTML+="</br><label>Nombre: </label>"+gatoMolon.nombre;
			cadena.innerHTML+="&nbsp<label>Fecha Nacimiento: </label>"+gatoMolon.fechaNacimiento;
			cadena.innerHTML+="&nbsp<label>Raza: </label>"+gatoMolon.raza;
			cadena.innerHTML+="&nbsp<label>Peso: </label>"+gatoMolon.peso;
			break;
		case "comiendo":
			cadena.innerHTML="<img src=\"img/gatoComida.jpg\" alt=\"gato\" height=\"350\" width=\"350\"/>";
			cadena.innerHTML+="</br><label>Nombre: </label>"+gatoMolon.nombre;
			cadena.innerHTML+="&nbsp<label>Fecha Nacimiento: </label>"+gatoMolon.fechaNacimiento;
			cadena.innerHTML+="&nbsp<label>Raza: </label>"+gatoMolon.raza;
			cadena.innerHTML+="&nbsp<label>Peso: </label>"+gatoMolon.peso;
			break;
		case "jugando":
			cadena.innerHTML="<img src=\"img/gatoJugando.jpg\" alt=\"gato\" height=\"350\" width=\"350\"/>";
			cadena.innerHTML+="</br><label>Nombre: </label>"+gatoMolon.nombre;
			cadena.innerHTML+="&nbsp<label>Fecha Nacimiento: </label>"+gatoMolon.fechaNacimiento;
			cadena.innerHTML+="&nbsp<label>Raza: </label>"+gatoMolon.raza;
			cadena.innerHTML+="&nbsp<label>Peso: </label>"+gatoMolon.peso;
			break;
		case "durmiendo":
			cadena.innerHTML="<img src=\"img/gatoDurmiendo.jpg\" alt=\"gato\" height=\"350\" width=\"350\"/>";
			cadena.innerHTML+="</br><label>Nombre: </label>"+gatoMolon.nombre;
			cadena.innerHTML+="&nbsp<label>Fecha Nacimiento: </label>"+gatoMolon.fechaNacimiento;
			cadena.innerHTML+="&nbsp<label>Raza: </label>"+gatoMolon.raza;
			cadena.innerHTML+="&nbsp<label>Peso: </label>"+gatoMolon.peso;
			break;
	}
	return cadena;
}

var gatoMolon=nuevoGato();
gatoMolon.mostrarDatosGatunos("reposo");

var comerGato=document.getElementById("comer");
var jugarGato=document.getElementById("jugar");
var dormirGato=document.getElementById("dormir");
var verEdad=document.getElementById("edad");

comerGato.addEventListener("click",gatoComer);
jugarGato.addEventListener("click",gatoJugar);
dormirGato.addEventListener("click",gatoDormir);
verEdad.addEventListener("click",verEdadGatuna);

