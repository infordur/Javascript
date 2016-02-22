function init(){
    var clienteTienda = new Cliente("Manolo","45947250H","C/Pepito Palotes 5", 957358522);
    var elementosTienda = [new Elemento("Jabón",4, 5.5),
                        new Elemento("Doritos",1,3),
                        new Elemento("Patatas",2,5),
                        new Elemento("Mantequilla",1,8)
                        ];

    var miFactura = new Factura(clienteTienda,elementosTienda);

    function Cliente(nombre, dni, direccion, telefono){
        this.nombre=nombre;
        this.dni=dni;
        this.direccion=direccion;
        this.telefono=telefono;
    }

    function Elemento(nombre,cantidad, precio){
        this.nombre=nombre;
        this.cantidad=cantidad;
        this.precio=precio;
    }

    function Factura(cliente, elementos) {
        this.cliente=cliente;
        this.elementos=elementos;
        this.datos = {
            iva: 1.21,
            total: 0,
            formaPago: "contado"
        };
    }

    Factura.prototype.mostrarElementos=function(){
        return (this.elementos);
    }
 
    Factura.prototype.calcularTotal= function(){
        var totalSinIva=0;
        for (var i = 0; i < this.elementos.length; i++) {
            totalSinIva+=this.elementos[i].cantidad*this.elementos[i].precio;
        }
        this.datos.total=totalSinIva*this.datos.iva;
    }

    Factura.prototype.mostrarTotal= function(){
        this.calcularTotal();
        var mensaje= document.getElementById("contenido");
        mensaje.innerHTML+= "<p>Cliente: "+miFactura.cliente.nombre+"</br>"+
                            "Domicilio: "+miFactura.cliente.direccion+"</br>"+
                            "Telefono: "+miFactura.cliente.telefono+"</br>"+
                            "iva: "+miFactura.datos.iva+"%</p>"+
                            "Articulos comprados: </br>"+
                            "<table class='table table-condenced table-bordered text-center'>"+
                            "<thead>"+
                            "<th class='text-center'>Nombre</th><th class='text-center'>Precio</th><th class='text-center'>Cantidad</th>"+
                            "</thead>"+
                            "<tbody>"+
                                 " <tr>"+
                                  "  <td>"+miFactura.elementos[0].nombre+"</td>"+
                                   " <td>"+miFactura.elementos[0].cantidad+"</td>"+
                                   " <td>"+miFactura.elementos[0].precio+"</td>"+
                                  "</tr>"+
                                  "<tr>"+
                                  "  <td>"+miFactura.elementos[1].nombre+"</td>"+
                                  "  <td>"+miFactura.elementos[1].cantidad+"</td>"+
                                  "  <td>"+miFactura.elementos[1].precio+"</td>"+
                                  "</tr>"+
                                  "<tr>"+
                                  "  <td>"+miFactura.elementos[2].nombre+"</td>"+
                                  "  <td>"+miFactura.elementos[2].cantidad+"</td>"+
                                  "  <td>"+miFactura.elementos[2].precio+"</td>"+
                                  "</tr>"+
                                  "<tr>"+
                                  "  <td>"+miFactura.elementos[3].nombre+"</td>"+
                                  "  <td>"+miFactura.elementos[3].cantidad+"</td>"+
                                  "  <td>"+miFactura.elementos[3].precio+"</td>"+
                                  "</tr>"+
                                  "</tbody>"+
                                "</table>";
        mensaje.innerHTML+="TOTAL = "+this.datos.total+" €";
    }

    miFactura.mostrarTotal();
}



document.addEventListener('DOMContentLoaded', init);

