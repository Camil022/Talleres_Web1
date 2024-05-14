/* 8.	 Cree una función que pida el nombre del usuario, y por medio de otra función
 imprima el nombre y un mensaje que diga Bienvenido + nombre */

 function pedirNombreUsuario() {
    let nombre = prompt("Ingrese su nombre:");
    return nombre;
}

function imprimirMensajeBienvenida(nombre) {
    document.write(`Bienvenido, ${nombre}!`);
}

let nombreUsuario = pedirNombreUsuario();
imprimirMensajeBienvenida(nombreUsuario);
