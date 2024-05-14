

document.write("<table border='1'>")

var filas = Number(prompt("Digite total de filas de la tabla"));
var columnas = Number(prompt("Digite total columnas de la tabla"));
var contar = 1;
document.write("<table border='1'>");
for(var x = 1; x <= filas; x++){
    document.write("<tr>");
    for(var y = 1; y <= columnas; y++){
        document.write("<td>");
        document.write(contar++);
        document.write("</td>");
    }
    document.write("</tr>")
}
document.write("</table>");