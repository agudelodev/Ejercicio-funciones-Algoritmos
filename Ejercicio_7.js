// Calcular el costo total de un pedido en un restaurante

function precioHamburguesa() {
    return 15000;
}

function precioBebida() {
    return 5000;
}

function calcularPedido(hamburguesas, bebidas) {
    let total = hamburguesas * precioHamburguesa() + bebidas * precioBebida();
    console.log("Total del pedido:", total);
}

calcularPedido(2, 2);