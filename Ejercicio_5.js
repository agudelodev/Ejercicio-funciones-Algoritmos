// Costo de transporte para un viaje

function precioPasaje() {
    return 2800;
}

function calcularViajes(viajes) {
    return viajes * precioPasaje();
}

function mostrarPago(viajes) {
    let total = calcularViajes(viajes);
    console.log("Total transporte:", total);
}

mostrarPago(10);