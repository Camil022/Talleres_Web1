/* 9.	 Cree una función que pida el precio de N productos y  por medio de otra función aumente el iva del 19% y diga al usuario el precio total a pagar los productos que compró y el precio de cada uno.
producto 1              = 2.500 
producto 2         	     = 4.500 
producto 3              = 2000 
subtotal                     10.000
Total A pagar   12.200
 */

function obtenerPrecioProductos(numProductos) {
    let precios = [];
    for (let i = 1; i <= numProductos; i++) {
        let precio = Number(prompt(`Ingrese el precio del producto ${i}`));
        precios.push(precio);
    }
    return precios;
}

function calcularPrecioTotalConIva(precios) {
    const IVA = 0.19;
    let subtotal = precios.reduce((total, precio) => total + precio, 0);
    let totalConIva = subtotal * (1 + IVA);
    return { subtotal: subtotal, totalConIva: totalConIva };
}

let numProductos = Number(prompt("Ingrese el número de productos"));
let precios = obtenerPrecioProductos(numProductos);
let { subtotal, totalConIva } = calcularPrecioTotalConIva(precios);

document.write("Detalles de la compra:<br>");
for (let i = 0; i < numProductos; i++) {
    document.write(`Producto ${i + 1}: ${precios[i]} <br>`);
}
document.write(`Subtotal: ${subtotal} <br>`);
document.write(`Total a pagar (con IVA 19%): ${totalConIva}`);
