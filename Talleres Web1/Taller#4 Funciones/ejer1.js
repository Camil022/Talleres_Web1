/* 1.	Crea y llama una función que recibe el ancho y el alto de un rectángulo y calcula su superficie.  Fórmula: superficie = ancho * alto. */


function rectangulo(alto, ancho){

    return ancho * alto;

}
let alto = Number(prompt("Ingrese el alto."));
let ancho = Number(prompt("Ingrese el ancho."));

let superficie = calcularSuperficieRectangulo(ancho, alto);
document.write("La superficie del rectángulo es: " + superficie);





