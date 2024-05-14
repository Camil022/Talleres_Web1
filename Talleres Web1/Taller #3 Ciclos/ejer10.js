/* 10.	 Cree un programa que permite registrar el número de compras que se venden cada día. pedir al usuario cuantos productos va a comprar y registrar el precio unitario, calcular el valor total de cada compra y al finalizar el día calcular cuántas facturas se hicieron y el total general.
Cliente #1
No. Productos: 3
valor  p1 : 4,500
valor p2: 2,000
valor p3: 3,500
total compra: 10.000
Cliente #2
No. Productos: 2
valor  p1 : 1,500
valor p2: 2,000
total compra: 3.500
Total Ventas del dia: 2
Total General del dia: 13.500
 */

let totalVentasDia = 0;
let totalGeneralDia = 0;

// Solicitar al usuario cuántas facturas se realizaron
let numFacturas = Number(prompt("Ingrese el número de facturas realizadas hoy"));

    // Iterar para cada factura
    for (let i = 1; i <= numFacturas; i++) {
        let numProductos = Number(prompt(`Cliente #${i}: Ingrese el número de productos comprados`));
        let totalCompra = 0;

        // Iterar para cada producto
        for (let j = 1; j <= numProductos; j++) {
            let precioProducto = Number(prompt(`Cliente #${i}: Ingrese el precio del producto ${j}`));

            totalCompra += precioProducto;
        }

        // Mostrar el total de la compra para cada cliente
        document.write(`Cliente #${i}: Total compra: ${totalCompra.toFixed(2)}`);
        
        // Actualizar los totales de ventas del día y general
        totalVentasDia++;
        totalGeneralDia += totalCompra;
    }

    // Mostrar los totales de ventas del día y general
    document.write(`Total Ventas del día: ${totalVentasDia}`);
    document.write(`Total General del día: ${totalGeneralDia.toFixed(2)}`);

