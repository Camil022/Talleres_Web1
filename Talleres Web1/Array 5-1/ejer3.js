/* 3.	Realiza 1 ejercicio explicando cómo funcionan los métodos push(), pop(), slice() y splice(), reduce(), indexOf(), forEach(), map(), sort().
 */

let ventasDiarias = [120, 150, 180, 200, 190, 210, 220];


ventasDiarias.push(230);
console.log(ventasDiarias); 

let ultimaVenta = ventasDiarias.pop();
console.log(ultimaVenta); // 230
console.log(ventasDiarias); 

let primerosTresDias = ventasDiarias.slice(0, 3);
console.log(primerosTresDias); 

ventasDiarias.splice(2, 1);
console.log(ventasDiarias);

ventasDiarias.splice(3, 0, 205); 
console.log(ventasDiarias); 

let totalVentas = ventasDiarias.reduce((total, venta) => total + venta, 0);
console.log(totalVentas); 

let posicionVenta200 = ventasDiarias.indexOf(200);
console.log(posicionVenta200); 

ventasDiarias.forEach((venta, index) => {
    console.log(`Venta del día ${index + 1}: ${venta}`);
  });

  let ventasDuplicadas = ventasDiarias.map(venta => venta * 2);
console.log(ventasDuplicadas); 

ventasDiarias.sort((a, b) => a - b);
console.log(ventasDiarias);

  



