function init(){
    var mensaje=document.getElementById("contenido");

    Array.prototype.sin=function(elemento){
        var arrayNuevo=[];
        for (var i = 0; i < this.length; i++) {
            if(this[i]!==elemento){
                arrayNuevo.push(this[i]);
            }
        };
        return arrayNuevo;
    }

    var miArray = [1, 2, 3, 4, 5];
    var arrayFiltrado = miArray.sin(4);
    mensaje.innerHTML+="Array original: "+miArray+"</br>"+
                        "Array filtrado sin el valor 4: "+arrayFiltrado;
}


document.addEventListener('DOMContentLoaded', init);

