// Calcular el salario de un trabajador por hora

function pagoPorHora() {
    return 10000;
}

function calcularSalario(horas) {
    return horas * pagoPorHora();
}

function mostrarSalario(horas) {
    let salario = calcularSalario(horas);
    console.log("Salario total:", salario);
}

mostrarSalario(40);