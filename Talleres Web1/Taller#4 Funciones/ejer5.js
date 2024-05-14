/* 5.	Muestra todas las operaciones básicas(suma, resta, multi, división),
 pidiendo al usuario 2 números por medio de una función.  */

 function operacionesBasicas() {
    // Solicitar al usuario dos números
    let num1 = Number(prompt("Ingrese el primer número:"));
    let num2 = Number(prompt("Ingrese el segundo número:"));

    // Realizar las operaciones
    let suma = num1 + num2;
    let resta = num1 - num2;
    let multiplicacion = num1 * num2;
    let division = num1 / num2;

    // Mostrar resultados
    document.write("Suma: " + suma + "<br>");
    document.write("Resta: " + resta + "<br>");
    document.write("Multiplicación: " + multiplicacion + "<br>");
    document.write("División: " + division + "<br>");
}

// Llamar a la función
operacionesBasicas();
