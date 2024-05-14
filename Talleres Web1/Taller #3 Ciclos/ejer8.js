/* 8.	Digite un número (altura) y a partir de él cree una escalera de asteriscos o el carácter que desee; con esa altura. Deberá quedar así, si ponemos una altura de 5. */

let altura = Number(prompt("Digite la altura"))

for(let i = 1; i <= altura; i++){
    for(let n = 1; n <= i; n++){
       document.write("*");
    }
    document.write("<br>");
}
