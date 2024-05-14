/* 7.	Cree un ciclo que cuente del 1 al 30 en intervalos el número ingresado, de manera regresiva. */

let numero= Number(prompt("Ingrese el intervalo a aplicar"))
let interv = 30

while (interv >= 0 ){
document.write(interv + "<br>")
interv = interv - numero
}