/* 6.	Cree un ciclo que cuente del 1 al 30 en intervalos el número ingresado. */

let numero= Number(prompt("Ingrese el intervalo a aplicar"))
let interv = 0

while (interv <= 30 ){
document.write(interv + "<br>")
interv = interv + numero
}