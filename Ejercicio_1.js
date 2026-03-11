// Alquiler lavadora

function calcularCosto(horas) {
    return horas * 3000;
}

function aplicarDescuento(total) {
    if (total > 20000) {
        return total * 0.9;
    }
    return total;
}

function mostrarTotal(horas) {
    let costo = calcularCosto(horas);
    let total = aplicarDescuento(costo);
    console.log("Total a pagar:", total);
}

mostrarTotal(10);