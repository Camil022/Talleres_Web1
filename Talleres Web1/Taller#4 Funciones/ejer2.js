/* 2.	Crea y llama las funciones necesarias para recibir la velocidad
 en Kilómetros y mostrarlas en metros y millas. */



 function metros(velocidadKm){

    return velocidadKm * 1000

}
function millas(velocidadKm){

    return velocidadKm / 1.60934;

}
let alto = Number(prompt("Ingrese la velocidad en kilometros."));


let metroswrite = metros(velocidadKm);
document.write("La velocidad en metros es: " + metroswrite);

let millaswrite = millas(velocidadKm);
document.write("La velocidad en millas es: " + millaswrite);