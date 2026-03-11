// Comprar un juego de video

function precioBase() {
    return 50000;
}

function calcularImpuesto(precio) {
    return precio * 0.19;
}

function precioFinal() {
    let precio = precioBase();
    let impuesto = calcularImpuesto(precio);
    console.log("Precio final:", precio + impuesto);
}

precioFinal();