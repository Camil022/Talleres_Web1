/* 4.	realice una tabla de multiplicar con cualquier número ingresado hasta el 30. */

let numero = Number(prompt("ingrese el numero que se multiplicara hasta el 30")) 

for(let n = 1; n <= 30; n++){
document.write(numero + " x " + n + " = " + (numero * n) + "<br>")
}
