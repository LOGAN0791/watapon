/*crear la funcion de calcular
que esta en el boton de calcular, que esta en el evento onClick, la funcion
es de tipo tradicional*/

//sintansix de la funcion tradicional
function calcular_factura()
{
    //definir las variables como precio y cantidad se va tomar el dato del elemento input precio del html
    let precio = document.simuladorFactura.precio.value;
    let cantidad = document.simuladorFactura.cantidad.value;

    //definir el valor de IVA
    const iva = 0.19;

    //capturar e dato del producto
    producto = document.getElementById('producto').value;

    //validar los campos vacios o en ceros if y else
    if (precio == 0 || precio == null || cantidad == 0 || cantidad == null)
    {
        alert("Digitar el precio y la cantidad");
    } else 
    {
       //valor total
        let vt = precio * cantidad;
        //valor iva
        let vi = vt * iva;
        //total pagar
        let tp = vi + vt;

        //imprimir datos tener presente como esra definidas las clases a identificadores en los elementos HTML
        document.getElementById("valorProducto").innerHTML=producto;
        document.getElementById("valorPrecio").innerHTML=precio;
        document.getElementById("valorTotal").innerHTML=vt;
        document.getElementById("valorIva").innerHTML=vi;
        document.getElementById("totalPagar").innerHTML=tp;
    }
}