/* 14.	Utiliza la función Math.ramdon() para generar un número aleatorio y compararlo con el que el usuario digite. tienes 3 intentos para acertar.  */

let intentos = 3;
let numeroAleatorio = Math.floor(Math.random() * 10) + 1;

while (intentos > 0) {
    let numeroUsuario = parseInt(prompt(`Intento ${4 - intentos}: Adivina el número aleatorio entre 1 y 10`));

    if (numeroUsuario === numeroAleatorio) {
        document.write(`¡Felicidades! Has adivinado el número aleatorio correctamente.`);
        break;
    } else {
        document.write(`Incorrecto. Inténtalo de nuevo.<br>`);
        intentos--;
    }
}

if (intentos === 0) {
    document.write(`Lo siento, has agotado tus intentos. El número aleatorio era ${numeroAleatorio}.`);
}
