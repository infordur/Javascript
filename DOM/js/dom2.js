/* 
 * Fíjate en la página 19 de la presentación del tema. Representa el árbol DOM del documento. Realiza las siguientes acciones:

    Accede al elemento html
    Accede al body mediante lastChild
    Accede al head mediante la lista childNodes
    Averigua el número de hijos de body
    Añádele un párrafo con el texto "Hola a todos"
    Añádele al principio del body una lista (<ol>) con los nombres de la pareja a la que perteneces.
    Elimina el último párrafo del documento original ("párrafo DOM 3");
 *@author Pablo Durán Camacho
 */
document.addEventListener('DOMContentLoaded', function() {
	
	var html=document.documentElement;
	var body=html.lastChild;
	var head=html.childNodes[0];
	var hijosBody=document.body.childNodes.length;

	document.body.innerHTML+="<h3>Acceso al elemento html: </h3>"+html.innerHTML;

	
	document.body.innerHTML+="<h3>Acceso al elemento body:</h3> "+body.innerHTML;


	document.body.innerHTML+="<h3>Acceso al elemento head mediante la lista childNodes:</h3> "+head.innerHTML;

	document.body.innerHTML+="<h3>Averigua el número de hijos de body:</h3> "+hijosBody;

	document.body.innerHTML+="<h3>Añádele un párrafo con el texto \"Hola a todos\"</h3>";
	
	var parrafo=document.createElement("p");
	var texto=document.createTextNode("Hola a todos");
	parrafo.appendChild(texto);
	body.appendChild(parrafo);


	var ol=document.createElement("ol");
	var li1=document.createElement("li");
	var li2=document.createElement("li");
	var elem1=document.createTextNode("Rafael Navarro Prieto");
	var elem2=document.createTextNode("Pablo Durán Camacho");
	li1.appendChild(elem1);
	li2.appendChild(elem2);
	ol.appendChild(li1);
	ol.appendChild(li2);
	document.documentElement.insertBefore(ol,body);

	document.getElementsByTagName("p")[2].remove()

});