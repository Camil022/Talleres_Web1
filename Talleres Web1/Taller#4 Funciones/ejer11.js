/* 11.	Cree un listado de compras, con función que pida el número de productos, nombre y valor del producto por medio de otra función imprima la información digitadas.
1 -  arroz $ 2.500 x 3 = 7.500
2 - aceite $ 4.500 x 1 = 4.500
3 - azúcar $ 2000 x 2 = 4.000
—-----------------------------------
		Total Mercado    16.000
 */


		function imprimirListaCompra(productos) {
			let totalMercado = 0;
			document.write("<h2>Listado de Compras</h2>");
			for (let i = 0; i < productos.length; i++) {
				let producto = productos[i];
				let subtotal = producto.cantidad * producto.valor;
				totalMercado += subtotal;
				document.write(`<p>${i + 1} - ${producto.nombre} $ ${producto.valor} x ${producto.cantidad} = ${subtotal}</p>`);
			}
			document.write("<p>-----------------------------</p>");
			document.write(`<p>Total Mercado: ${totalMercado}</p>`);
		}
		
		function crearListaCompra() {
			let numProductos = Number(prompt("Ingrese el número de productos"));
		
			let listaCompra = [];
		
			for (let i = 0; i < numProductos; i++) {
				let nombre = prompt(`Ingrese el nombre del producto ${i + 1}`);
				let valor = Number(prompt(`Ingrese el valor del producto ${i + 1}`));
				let cantidad = Number(prompt(`Ingrese la cantidad del producto ${i + 1}`));
		
				listaCompra.push({ nombre: nombre, valor: valor, cantidad: cantidad });
			}
		
			return listaCompra;
		}
		
		let lista = crearListaCompra();
		imprimirListaCompra(lista);
		