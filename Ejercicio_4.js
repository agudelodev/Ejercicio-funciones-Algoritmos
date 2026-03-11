// Compra en una tienda

function precioProducto() {
    return 20000;
}

function calcularCantidad(cantidad) {
    return precioProducto() * cantidad;
}

function mostrarCompra(cantidad) {
    let total = calcularCantidad(cantidad);
    console.log("Total de la compra:", total);
}

mostrarCompra(3);