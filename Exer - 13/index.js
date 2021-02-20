/*
 * 13) Escreva uma função que receba um numero como argumento e retorne o
 * fatorial do mesmo.
 *
 */


function myFunction(number) {
  return number ? number * myFunction(--number) : 1;
}


console.log(myFunction(1));

console.log(myFunction(5));

console.log(myFunction(0));
