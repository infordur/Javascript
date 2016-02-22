function init(){
    var mensaje=document.getElementById("contenido");

    Array.prototype.annadir = function(elemento) {
        this[this.length] = elemento;
    }
 
    var array1 = [0, 1, 2];
    array1.annadir(2);

    document.getElementById("contenido").innerHTML+="var array1 = [0, 1, 2];</br>"+
    "array1.annadir(2);</br><b>Resultado:</b> "+
    array1+"</br></br>";


    Array.prototype.contiene=function(elemento){
        for (var i = 0; i < this.length; i++) {
            if(this[i] === elemento){
                return true;
            }
        }
        return false;
    }

    Array.prototype.annadir = function(elemento, permitir){
        if(!permitir){
            if(!this.contiene(elemento)){
                this[this.length]=elemento;
            }
        }else{
            this[this.length]=elemento;
        }
    }

    var array2 = [0, 1, 2];
    array2.annadir(2);

    document.getElementById("contenido").innerHTML+="var array2 = [0, 1, 2];</br>"+
    "array2.annadir(2);</br><b>Resultado:</b>"+
    array2+"</br></br>";

    
    var array3 = [0, 1, 2];
    array3.annadir(2, false);
    array3.annadir(2, false);
    array3.annadir(2, true);
    array3.annadir(2, true);
    array3.annadir(5, false);


    document.getElementById("contenido").innerHTML+="var array3 = [0, 1, 2];</br>"+
    "array3.annadir(2,false);</br>"+
    "array3.annadir(2,false);</br>"+
    "array3.annadir(2,true);</br>"+
    "array3.annadir(2,true);</br>"+
    "array3.annadir(5,false);</br><b>Resultado:</b> "+
    array3;

}



document.addEventListener('DOMContentLoaded', init);

