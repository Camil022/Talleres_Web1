/* 11.	 Cree un programa que calcule el promedio de 3 notas para 3 alumnos, el programa debe mostrar lo siguiente:
Nombre Alumno #1 Jossy tello
Materia: Matemáticas
Nota 1 : 4,5
Nota 2: 4
Nota 3: 3,5
Promedio: 4
Nombre Alumno #2 Angela Robledo
Materia: Física
Nota 1 : 4,5
Nota 2: 2,5
Nota 3: 5
Promedio: 4,2
 */ 


let numAlumnos = Number(prompt("Ingrese el número de alumnos"));

let alumnos = [];

for (let i = 1; i <= numAlumnos; i++) {
    let nombre = prompt(`Ingrese el nombre del alumno #${i}`);
    let materia = prompt(`Ingrese la materia del alumno #${i}`);
    let notas = [];

    for (let j = 1; j <= 3; j++) {
        let nota = prompt(`Ingrese la nota ${j} del alumno #${i}`);
        notas.push(nota);
    }

    let suma = 0;
    for (let nota of notas) {
        suma += parseFloat(nota.replace(',', '.'));
    }
    let promedio = (suma / notas.length).toFixed(1);

    document.write(`Nombre Alumno #${i}: ${nombre}<br>`);
    document.write(`Materia: ${materia}<br>`);
    document.write(`Nota 1: ${notas[0]}<br>`);
    document.write(`Nota 2: ${notas[1]}<br>`);
    document.write(`Nota 3: ${notas[2]}<br>`);
    document.write(`Promedio: ${promedio}<br>`);
}

