function init(){
    var mensaje=document.getElementById("contenido");
    
    String.prototype.truncar=function(posicion){
        if(this.length>posicion){
            return this.substring(0, posicion);
        }else{
            return this;
        }
    }

    var cadena = "hola mundo";
    mensaje.innerHTML+="Cadena original: "+cadena+"</br>"+
    "Cadena truncada: "+cadena.truncar(6)+"</br></br>";

    String.prototype.truncar=function(posicion,contenido){
        if(this.length>posicion){
            return this.substring(0, this.length-posicion)+contenido;
        }else{
            return this;
        }
    }

    var cadena2= "hola mundo";
    mensaje.innerHTML+="Cadena original: "+cadena2+"</br>"+
    "Cadena truncada: "+cadena2.truncar(6,"...");

}


document.addEventListener('DOMContentLoaded', init);

