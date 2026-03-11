// Sistema de puntos de un juego

function puntosPorVictoria() {
    return 100;
}

function puntosPorMision() {
    return 50;
}

function calcularTotal(victorias, misiones) {
    let total = victorias * puntosPorVictoria() + misiones * puntosPorMision();
    console.log("Puntos totales:", total);
}

calcularTotal(3, 4);