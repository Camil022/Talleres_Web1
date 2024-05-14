/* 3.	Ingrese varios números enteros y muestre la cantidad de números ingresados y la suma de los mismos. Realice esta acción hasta que el usuario ingrese la palabra FIN. */

alert("Ingrese uno o varios números enteros")
var contador_s = 0
var contador_n = 0
var n = "si"

for (let numero = 0 ; n == "si"; numero++ ){
    numero = Number(prompt("Ingrese un numero entero"));
    contador_s= contador_s + numero
    contador_n++
    n = prompt("Desea ingresar otro numero? si/no")
}

document.write("El total de la suma es: "+ contador_s + "<br>");
document.write("La cantidad " + contador_n);
