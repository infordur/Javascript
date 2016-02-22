function init(){
    var boton = document.getElementById('boton');   
    var botonA = document.getElementById('botonA');
    var contenedor = document.getElementById('generado');
    var filas = document.getElementById("filas");
    var columnas = document.getElementById('columnas');
    var numeros = document.getElementsByName('numeros');
    var nombre = document.getElementById('variable');
    var resultado = document.getElementById('resultado');
    var suma = document.getElementById('Bsuma');
    var resta = document.getElementById('Bresta');
    var traspon = document.getElementById('Btrasponer');
    var multiplica = document.getElementById('Bmultiplicar');
    boton.addEventListener('click', generarInputs);
    botonA.addEventListener('click', comprobarDatos);
    suma.addEventListener('click',operacionSuma);
    resta.addEventListener('click',operacionResta);     
    traspon.addEventListener('click',operacionTrasponer);       
    multiplica.addEventListener('click',operacionMultiplicar);      
        
    
    function generarInputs(){
        for (var i = 0; i < filas.value; i++) {
            for (var j = 0; j < columnas.value; j++) {
                contenedor.innerHTML+="Valor("+i+","+j+"): <input type='text' name='numeros' id='"+i+""+j+"'/>";
            };
            contenedor.innerHTML+="</br>";
        };
        boton.disabled=true;
        botonA.disabled=true;
        contenedor.innerHTML+="</br></br><input type=\"button\" id=\"reset\" value=\"reiniciar inputs\" class=\"btn btn-primary\"/>";
        contenedor.innerHTML+="<input type=\"button\" id=\"generarArray\" value=\"generar Array\" class=\"btn btn-primary\"/>";
        
        document.getElementById('reset').addEventListener("click",reset);
        document.getElementById('generarArray').addEventListener("click",comprobarDatosArray);
        
    }
    /**
     * Metidi que  modifica el contenido html si se reinicia el número de inputs
     */
    function reset(){
        contenedor.innerHTML="";
        boton.disabled=false;
        botonA.disabled=false;
    }
    /**
     * Comprueba si los datos son correctos para generar un ArraymateMatico aleatorio
     */
    function comprobarDatos(){
        
        if (filas.value >1 && columnas.value > 1 && nombre.value === "m1" || nombre.value === "m2") {
            generarArrayAleatorio(filas,columnas,nombre);
        };
    }
    /**
     * Método que genera un array aleatorio
     * @param  {number | string} filas    número de filas
     * @param  {number | string} columnas número de columnas
     * @param  {string} nombre   nombre de la variable que almacenara la información
     */
    function generarArrayAleatorio(filas,columnas,nombre){
        var a = new ArraymateMatico(filas.value,columnas.value);
        if (nombre.value=="m1") {
            varMolon.m1 = a;
            document.getElementById("matrices").innerHTML= varMolon.m1.mostrar();
        }else{
            varMolon.m2 = a;     
            document.getElementById("matrices2").innerHTML= varMolon.m2.mostrar();
        }
            gestionarBotones();
    }

    function comprobarDatosArray(){

        if (filas.value > 1 && columnas.value > 1 && nombre.value === "m1" || nombre.value === "m2") {
            generarA(filas.value,columnas.value,nombre.value,numeros);
        };

    }

    function generarA(filas,columnas,nombre,conjunto){
        var array = new ArraymateMatico(filas,columnas);
        var contador= 0;
        if(comprobarValores(conjunto)){
            for (var i = 0; i <filas; i++) {
                for (var j = 0; j < columnas; j++) {
                    array.matriz[i][j]= parseInt(conjunto[contador].value);
                    contador++;
                };
            };

            if (nombre=="m1") {
                varMolon.m1=array;
                document.getElementById("matrices").innerHTML= varMolon.m1.mostrar();
            }else{  
                varMolon.m2=array;
                document.getElementById("matrices2").innerHTML= varMolon.m2.mostrar();
            }
            gestionarBotones();
        }
    }

    function comprobarValores(valores){
        for (var i = 0; i < valores.length; i++) {
            if (!/^(-)?[0-9]+|[0-9]+$/.test(valores[i].value)) {
                return false        
            }
        };
        return true;
    }

    function gestionarBotones(){
        if ((varMolon.m1 !=undefined && varMolon.m2 ===undefined)|| (varMolon.m1 ===undefined && varMolon.m2 !=undefined)) {
            traspon.disabled = false;
            }else if(varMolon.m1 !=undefined && varMolon.m2 !=undefined){
                suma.disabled=false;
                resta.disabled=false;
                multiplica.disabled=false; 
            }
    }

    function operacionSuma(){
        try{
            var a = varMolon.m1.sumar(varMolon.m2);
            resultado.innerHTML = a.mostrar();  
        }catch(e){
            resultado.innerHTML=e.name+"</br>";
            resultado.innerHTML+=e.message;
        }
    }

    function operacionResta(){
        try{
             var a = varMolon.m1.restar(varMolon.m2);
             resultado.innerHTML = a.mostrar();
        }catch(e){
            resultado.innerHTML=e.name+"</br>";
            resultado.innerHTML+=e.message;
        }
    }

    function operacionTrasponer(){
        varMolon.m1.trasponer();
        resultado.innerHTML =  varMolon.m1.mostrar();

    }

    function operacionMultiplicar(){
        try{
            var a = varMolon.m1.multiplicar(varMolon.m2);
            resultado.innerHTML = a.mostrar();
        }catch(e){
            resultado.innerHTML=e.name+"</br>";
            resultado.innerHTML+=e.message;
        }
    }

    function ArraymateMatico(filas,columnas){
        this.filas=filas;
        this.columnas=columnas;
        this.matriz = new Array(filas);
        for (var i = 0; i < filas; i++) {
            this.matriz[i] = new Array(columnas);
            for (var j = 0; j < columnas; j++) {
                this.matriz[i][j] = Math.random()*10+1;
                this.matriz[i][j] = this.matriz[i][j].toFixed();
            };
        };
    }

    ArraymateMatico.prototype.mostrar = function() {
        var cadena="";

        for (var i = 0; i < this.filas; i++) {
            for (var j = 0; j < this.columnas; j++) {
                cadena += this.matriz[i][j]+" ";
            };
            cadena+="</br>";
        };
        return cadena;
    };

    ArraymateMatico.prototype.sumar = function(sumando) {
        if (comprobarDimensiones(this,varMolon.m2)) {
            var resultado = new ArraymateMatico(this.filas,this.columnas);
            for (var j = 0; j < this.columnas; j++) {
                for (var i = 0; i < this.filas; i++) {
                    resultado.matriz[i][j] = parseInt(this.matriz[i][j]) + parseInt(sumando.matriz[i][j]);
            }  
        }
        return resultado;
        }
    };

    function errorDimensiones(message){
        this.name="Error";
        this.message=message;
    }

    ArraymateMatico.prototype.restar = function(sustraendo) {
        if (comprobarDimensiones(this,varMolon.m2)) {
            var resultado = new ArraymateMatico(this.filas,this.columnas);
            for (var j = 0; j < this.columnas; j++) {
                for (var i = 0; i < this.filas; i++) {
                    resultado.matriz[i][j] = parseInt(this.matriz[i][j]) - parseInt(sustraendo.matriz[i][j]);
            }  
        }
        return resultado;
        }
    };


    ArraymateMatico.prototype.multiplicar = function(operador2) {
        if (comprobarDimensionesMultiplicacion(this,operador2)) {
            var f = this.filas;
            var c = operador2.columnas;
            var resultado = new ArraymateMatico(f,c);
            resultado = reiniciarArray(resultado);
            for (var i=0; i < resultado.filas; i++) {
                for (var j=0; j < resultado.columnas; j++) {
                    for (var k=0; k < this.columnas; k++) {
                        resultado.matriz[i][j] = parseInt(resultado.matriz[i][j]) + (parseInt(this.matriz[i][k]) * parseInt(operador2.matriz[k][j])); 
                    }
                }
            }
            return resultado;
        }
    };


    ArraymateMatico.prototype.trasponer = function() {
         var f = this.columnas;
         var c = this.filas;
         var traspuesta = new ArraymateMatico(f,c);

        for (var j = 0; j < this.columnas; j++) {
            for (var i = 0; i < this.filas; i++) {
                traspuesta.matriz[j][i] = this.matriz[i][j];
            }
        }
        this.matriz = traspuesta.matriz;
        this.filas = f;
        this.columnas = c;

    };

    function reiniciarArray(array){
        for (var i = 0; i < array.filas; i++) {
            for (var j = 0; j < array.columnas; j++) {
                array.matriz[i][j] = 0;
            };
        };
        return array;
    }

    function comprobarDimensiones(operador1,operador2){
        if (operador1.filas === operador2.filas && operador1.columnas===operador2.columnas) {
            return true;
        }else{
            throw new errorDimensiones("Las dimensiones no son válidas");
        }
    }

    function comprobarDimensionesMultiplicacion(operador1,operador2){
        if (operador1.filas === operador2.columnas && operador1.columnas===operador2.filas) {
            return true;
        }else{
            throw new errorDimensiones("Las dimensiones no son válidas");
        }
    }
}

var varMolon = {
    m1: undefined,
    m2: undefined
}

document.addEventListener('DOMContentLoaded', init);