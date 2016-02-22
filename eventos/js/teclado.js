document.addEventListener('DOMContentLoaded', function() {

	var objeto={
		keyCode:undefined,
		charCode:undefined,
		tecla:undefined
	};

	function mostrarInformacion(evento){
		switch(evento.type){
			case 'keyup':
				if(evento.shiftKey){
					kc=evento.shiftKey.keyCode;
					cc=evento.shiftKey.charCode;
					cp=String.fromCharCode(evento.shiftKey.charCode);
				}else if(evento.ctrlKey){
					kc=evento.ctrlKey.keyCode;
					cc=evento.ctrlKey.charCode;
					cp=String.fromCharCode(evento.ctrlKey.charCode);
				}else if(evento.altKey){
					kc=evento.altKey.keyCode;
					cc=evento.altKey.charCode;
					cp=String.fromCharCode(evento.altKey.charCode);
				}else{
					var kc=evento.keyCode;
					var cc=evento.charCode;
					var cp=String.fromCharCode(evento.charCode);
				}

				document.getElementById("kupEvent").innerHTML=evento.type;
				document.getElementById("kupKCode").innerHTML=kc;
				document.getElementById("kupCC").innerHTML=cc;
				document.getElementById("kupCP").innerHTML=cp;
				break;

			case 'keypress':
				
				if(evento.shiftKey){
					kc=evento.shiftKey.keyCode;
					cc=evento.shiftKey.charCode;
					cp=String.fromCharCode(evento.shiftKey.charCode);
				}else if(evento.ctrlKey){
					kc=evento.ctrlKey.keyCode;
					cc=evento.ctrlKey.charCode;
					cp=String.fromCharCode(evento.ctrlKey.charCode);
				}else if(evento.altKey){
					kc=evento.altKey.keyCode;
					cc=evento.altKey.charCode;
					cp=String.fromCharCode(evento.altKey.charCode);
				}else{
					var kc=evento.keyCode;
					var cc=evento.charCode;
					var cp=String.fromCharCode(evento.charCode);
				}

				document.getElementById("kpEvent").innerHTML=evento.type;
				document.getElementById("kpKCode").innerHTML=kc;
				document.getElementById("kpCC").innerHTML=cc;
				document.getElementById("kpCP").innerHTML=cp;
				
				break;
			case 'keydown':
				if(evento.shiftKey){
					kc=evento.shiftKey.keyCode;
					cc=evento.shiftKey.charCode;
					cp=String.fromCharCode(evento.shiftKey.charCode);
				}else if(evento.ctrlKey){
					kc=evento.ctrlKey.keyCode;
					cc=evento.ctrlKey.charCode;
					cp=String.fromCharCode(evento.ctrlKey.charCode);
				}else if(evento.altKey){
					kc=evento.altKey.keyCode;
					cc=evento.altKey.charCode;
					cp=String.fromCharCode(evento.altKey.charCode);
				}else{
					var kc=evento.keyCode;
					var cc=evento.charCode;
					var cp=String.fromCharCode(evento.charCode);
				}

				document.getElementById("kdEvent").innerHTML=evento.type;
				document.getElementById("kdKCode").innerHTML=kc;
				document.getElementById("kdCC").innerHTML=cc;
				document.getElementById("kdCP").innerHTML=cp;
				break;
		}
	}

	document.addEventListener('keyup',mostrarInformacion);
	document.addEventListener('keypress',mostrarInformacion);
	document.addEventListener('keydown',mostrarInformacion);
	
});