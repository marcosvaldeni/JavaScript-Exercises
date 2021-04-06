/** 
 * 16) Escreva uma função que receba três números como argumento, esta função 
 * deve verificar se o último digito de cada número é iguai. 
 * 
*/


function myFunction(a, b, c) {
  a = +a.toString().slice(-1);
  b = +b.toString().slice(-1);
  c = +c.toString().slice(-1);

  return a === b && a === c;
}


console.log(myFunction(123, 123, 123));

console.log(myFunction(123, 30, 400));
