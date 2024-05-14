/* 13.	 Cree un programa que pida la edad a 10 estudiantes y determine cuántos son menores de edad y cuales son mayores de edad. */

let menoresEdad = 0;
let mayoresEdad = 0;

for (let i = 1; i <= 10; i++) {
    let edad = parseInt(prompt(`Ingrese la edad del estudiante #${i}`));

    if (edad < 18) {
        menoresEdad++;
    } else {
        mayoresEdad++;
    }
}

document.write(`Número de estudiantes menores de edad: ${menoresEdad}<br>`);
document.write(`Número de estudiantes mayores de edad: ${mayoresEdad}<br>`);
