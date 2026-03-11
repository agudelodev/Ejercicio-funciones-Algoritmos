// Sistema de puntos de un juego

function puntosPorEnemigos(enemigos) {
    return enemigos * 50;
}

function puntosPorMonedas(monedas) {
    return monedas * 10;
}

function calcularPuntaje(enemigos, monedas) {
    let total = puntosPorEnemigos(enemigos) + puntosPorMonedas(monedas);

    if (total > 500) {
        total = total + 100; // bonus
    }

    console.log("Puntaje total del jugador:", total);
}

calcularPuntaje(8, 20);