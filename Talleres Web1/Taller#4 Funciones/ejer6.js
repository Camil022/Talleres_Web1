/* 6.	Cree un conversor de temperatura, investigando la fórmula para pasar grados de Celsius a Fahrenheit y viceversa, pida al usuario la temperatura a convertir y muestra en pantalla lo siguiente:
●	Si la Temperatura es menos  0°C  o 32°F : Nos congelamos 
●	Si la Temperatura es entre de 5°C a 15°C  o 33°F a 50°F : Esta haciendo frio
●	Si la Temperatura es entre de 16°C a 25°C  o 51°F a 77°F : Está templado el dia
●	Si la Temperatura es más de 26°C  o 78°F : Tiene fiebre o es el apocalipsis.
 */

function convertirTemperatura() {
    // Solicitar al usuario la temperatura y la unidad
    let temperatura = Number(prompt("Ingrese la temperatura a convertir:"));
    let unidad = prompt("Ingrese la unidad de temperatura (Celsius o Fahrenheit):").toLowerCase();

    // Convertir la temperatura según la unidad ingresada
    let resultado;
    if (unidad === "celsius") {
        // Convertir Celsius a Fahrenheit
        resultado = (temperatura * 9 / 5) + 32;
    } else if (unidad === "fahrenheit") {
        // Convertir Fahrenheit a Celsius
        resultado = (temperatura - 32) * 5 / 9;
    } else {
        document.write("Por favor ingrese una unidad de temperatura válida (Celsius o Fahrenheit).");
        return;
    }

    // Mostrar el resultado
    document.write("La temperatura convertida es: " + resultado + " " + unidad.toUpperCase() + "<br>");

    // Determinar el mensaje según la temperatura
    if ((temperatura < 0 && unidad === "celsius") || (resultado < 32 && unidad === "fahrenheit")) {
        document.write("¡Nos congelamos!");
    } else if ((temperatura >= 5 && temperatura <= 15 && unidad === "celsius") || (resultado >= 33 && resultado <= 50 && unidad === "fahrenheit")) {
        document.write("¡Está haciendo frío!");
    } else if ((temperatura >= 16 && temperatura <= 25 && unidad === "celsius") || (resultado >= 51 && resultado <= 77 && unidad === "fahrenheit")) {
        document.write("¡Está templado el día!");
    } else if ((temperatura > 26 && unidad === "celsius") || (resultado > 78 && unidad === "fahrenheit")) {
        document.write("¡Tiene fiebre o es el apocalipsis!");
    }
}

// Llamar a la función
convertirTemperatura();


