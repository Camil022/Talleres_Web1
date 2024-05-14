/* 4.	Crea una función donde pases como parámetro un nombre y muéstralo en el navegador;
 Validar que el dato ingresado no sea un número, de ser así se debe decir en pantalla ingrese
  un nombre válido. (lo puedes hacer con la función isNaN(), investiga cómo funciona) */


  function mostrarNombre(nombre) {
    if (!isNaN(nombre)) {
        document.write("Ingrese un nombre válido.");
    } else {
        document.write("¡Hola, " + nombre + "!");
    }
}

let nombre = prompt("Ingrese su nombre:");
mostrarNombre(nombre);
