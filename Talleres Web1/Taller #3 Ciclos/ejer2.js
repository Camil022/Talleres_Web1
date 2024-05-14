/* 2.	Hacer un programa que pida el nombre de un estudiante y N notas, calcular el promedio de las notas y determinar si el estudiante aprueba o reprueba; (Aprueba con un promedio de 3).   */

var estudiante = prompt("Ingrese el nombre del estudiante");
var notas = Number(prompt("Ingrese la cantidad de notas a ingresar"));
var contador = 1;
var suma = 0;

while(contador <= notas){
var nota = Number(prompt("Ingrese la nota" + contador));
suma = suma + nota; //suma la nota a la suma total
contador++
}
var promedio = suma / notas;

if(promedio >= 0 && promedio < 3){
alert("La nota del estudiante "+ estudiante + " es: "+ promedio.toFixed(1) +" usted reprobo.");
} else if(promedio >= 3 && promedio <= 5){
    alert("La nota del estudiante "+ estudiante + " es: "+ promedio.toFixed(1) +" usted aprobo.");
} else {
    alert("Datos incorrectos");
}
