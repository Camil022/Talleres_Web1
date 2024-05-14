var clientes = prompt("Desea realizar una compra? si/no")
var contaClientes = 0
var totalComprasXdia = 0
for(var x = 1; clientes != "no"; x++){
    document.write("Cliente #"+x+"<br>");
    var NumPro = Number(prompt("Cuantos productos desea comprar?"));
    var totalCompra = 0
    for(y = 1;y <= NumPro; y++){
    var nombrePro = prompt("Digite nombre del producto");
    var precioPro = Number(prompt("Digite el valor del producto #"+y));
    document.write("precio "+ nombrePro+" #"+y+" : "+precioPro+"<br>");
    totalCompra += precioPro;
    }
    contaClientes++;
    totalComprasXdia += totalCompra;
    document.write("____________________ <br>");
    clientes = prompt("Desea realizar una compra? si/no");
}
document.write("____________________ <br>")
document.write("Total clientes del día: "+contaClientes+"<br>")
document.write("Total general del día "+totalComprasXdia+"<br>")
