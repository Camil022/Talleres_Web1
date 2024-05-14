/* 7.	Calcule el índice de masa muscular de una persona con la siguiente fórmula (IMC=peso/(altura x altura)), pidiendo como datos su altura y peso. imprima en pantalla lo siguiente: 
a.	 Si el IMC es por debajo de 18.5 : Bajo peso debe ir al nutricionista
b.	Si el IMC es 18.5—24.9 : Normal
c.	Si el IMC es 25.0—29.9 : Sobrepeso 
d.	Si el IMC es 30.0 o más : Obeso debe ir al nutricionista
 */

function calcularIMC() {
    // Solicitar al usuario la altura y el peso
    let altura = Number(prompt("Ingrese su altura en metros (por ejemplo, 1.75):"));
    let peso = Number(prompt("Ingrese su peso en kilogramos:"));

    // Calcular el IMC
    let imc = peso / (altura * altura);

    // Mostrar el IMC
    document.write("Su índice de masa corporal (IMC) es: " + imc.toFixed(2) + "<br>");

    // Determinar el mensaje según el IMC
    if (imc < 18.5) {
        document.write("Bajo peso. Debe ir al nutricionista.");
    } else if (imc >= 18.5 && imc <= 24.9) {
        document.write("Normal.");
    } else if (imc >= 25.0 && imc <= 29.9) {
        document.write("Sobrepeso.");
    } else {
        document.write("Obeso. Debe ir al nutricionista.");
    }
}

// Llamar a la función
calcularIMC();
