function init(){
	var mensaje=document.getElementById("mensaje");
	var john = { name: "John Smith", age: 23 };
	var mary = { name: "Mary Key", age: 18 };
	var bob = { name: "Bob-small", age: 6 };
	var people = [ john, mary, bob ];
	
	mensaje.innerHTML+="</br><label>Array sin ordenar: </label></br>";
	for (var i = 0; i < people.length; i++) {
		mensaje.innerHTML+=people[i].name+" "+people[i].age+"</br>";
	};

	mensaje.innerHTML+="</br><label>Array ordenado por edad: </label></br>";
	ageSort(people);
	for (var i = 0; i < people.length; i++) {
		mensaje.innerHTML+=people[i].name+" "+people[i].age+"</br>";
	};
}

/**
 * Ordena valores
 * @param people Array
 */
function ageSort(people){
	people.sort(function(a,b){return a.age-b.age});
}

document.addEventListener("DOMContentLoaded", init);