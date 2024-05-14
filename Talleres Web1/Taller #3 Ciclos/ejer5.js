/* 5.	Cree la tabla de multiplicar de cualquier número ingresado de manera descendente. */

let numero = Number(prompt("ingrese el numero a multiplicar")) 

for(let n = 30; n >= 1; n--){
document.write(numero + " x " + n + " = " + (numero * n) + "<br>")
}