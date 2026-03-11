// Aplicar un descuento del 15% a un producto

function precioProducto() {
    return 80000;
}

function aplicarDescuento(precio) {
    return precio * 0.85;
}

function mostrarPrecioFinal() {
    let precio = precioProducto();
    let final = aplicarDescuento(precio);
    console.log("Precio con descuento:", final);
}

mostrarPrecioFinal();