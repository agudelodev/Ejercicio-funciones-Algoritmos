// Calcular el promedio de tres notas

function sumarNotas(n1, n2, n3) {
    return n1 + n2 + n3;
}

function calcularPromedio(suma) {
    return suma / 3;
}

function mostrarPromedio(n1, n2, n3) {
    let suma = sumarNotas(n1, n2, n3);
    let promedio = calcularPromedio(suma);
    console.log("Promedio:", promedio);
}

mostrarPromedio(4.0, 3.5, 4.5);