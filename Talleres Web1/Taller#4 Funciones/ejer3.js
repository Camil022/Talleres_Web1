/* 3.	por medio de una función calcula la circunferencia de un círculo utilizando la siguiente fórmula:
 circunferencia= 2*Math.PI*radio, también Crea y llama una función que recibe un número y calcula su cubo.
Ejemplo: 
function circunferencia (radio){
     Return formula;
}
*/


function calcularCircunferencia(radio) {
     return 2 * Math.PI * radio;
 }
 
 function calcularCubo(numero) {
     return numero ** 3;
 }
 
 let radio = 5;
 let circunferencia = calcularCircunferencia(radio);
 console.log("Circunferencia:", circunferencia);
 
 let numero = 3;
 let cubo = calcularCubo(numero);
 console.log("Cubo:", cubo);
 

