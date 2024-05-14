/* 10. Cree una función que pida la fecha actual y por medio de otra función calcule 
cuántos días y semanas faltan para terminar el año. */

function obtenerFechaActual() {
    return new Date();
}

function calcularDiasSemanaRestantes() {
    let fechaActual = obtenerFechaActual();
    let añoActual = fechaActual.getFullYear();
    let fechaFinAño = new Date(añoActual, 11, 31); // 11 representa diciembre (los meses en JavaScript van de 0 a 11)

    // Calcula la diferencia en milisegundos entre la fecha actual y el final del año
    let diferenciaMilisegundos = fechaFinAño - fechaActual;

    // Convierte la diferencia de milisegundos a días y semanas
    let diasRestantes = Math.floor(diferenciaMilisegundos / (1000 * 60 * 60 * 24));
    let semanasRestantes = Math.floor(diasRestantes / 7);

    return { dias: diasRestantes, semanas: semanasRestantes };
}

let { dias, semanas } = calcularDiasSemanaRestantes();
document.write(`Quedan ${dias} días y ${semanas} semanas para terminar el año.`);
