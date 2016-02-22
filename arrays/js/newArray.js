function init(){
	var mensaje=document.getElementById("mensaje");
	arr = ["a", -1, 2, "b",false];

	
	mensaje.innerHTML+="</br><label>Array inicial: </label></br>";
	for (var i = 0; i < arr.length; i++) {
		mensaje.innerHTML+=arr[i];
	};

	mensaje.innerHTML+="</br><label>Array filtrado por los elementos que no valen true: </label></br>";
	filter(arr,isNumeric);
	for (var i = 0; i < arr.length; i++) {
		mensaje.innerHTML+=arr[i]+" ";
	};

}

function isNumeric(numero){    
    if (/^(-)?[0-9]+$/.test(numero)) {
        return true;
    }else{
        return false;
    }
}    

function filter(arr, inNumeric){
    for (var i = 0 ; i < arr.length; i++) {
        if (!isNumeric(arr)) {
            arr.splice(i,i+1);
        };
    };
}

document.addEventListener("DOMContentLoaded", init);