var ventanaNueva;

/**
 * Abre una nueva ventana
 */
function ejercicio(){
	abrirVentana();
}

/**
 * Abre una nueva ventana
 */
function abrirVentana(){
	ventanaNueva = window.open("","","toolbar=yes","location=no","resizable=no","height=150");
	//ventanaNueva.document.write("<!DOCTYPE html><html lang=\"es\"><head><meta charset=\"UTF-8\"><title>Pablo Durán</title><script type=\"text/javascript\" src=\"./js/scriptHijo3.js\"></script></head><body></body></html>");
	ventanaNueva.document.write("<!DOCTYPE html><html lang='es'><head><meta charset='UTF-8'><title>Pablo Durán</title><script type='text/javascript' src='js/scriptHijo3.js'></script></head><body></body></html>");
 	ventanaNueva.document.close();
 }


document.addEventListener("DOMContentLoaded", ejercicio);
