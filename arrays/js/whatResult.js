function init(){
	var mensaje=document.getElementById("mensaje");

	arr = ["a", "b"];
	arr.push( function() { alert(this) } );
	arr[arr.length-1]();
}


document.addEventListener("DOMContentLoaded", init);