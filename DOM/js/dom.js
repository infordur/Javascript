/*
 *Fíjate en la página 10 de la presentación del tema. Es el árbol DOM de una página Web concreta. Crea el documento HTML al que representa.

    Indica el número de nodos que tiene 
 * @author Pablo Durán Camacho
 */
document.addEventListener('DOMContentLoaded', function() {
	
	var parrafo=document.createElement("p");
	var texto=document.createTextNode("Número de nodos: "+document.childNodes.length);
	
	parrafo.appendChild(texto);
	document.body.appendChild(parrafo);
});