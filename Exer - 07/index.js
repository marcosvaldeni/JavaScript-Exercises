/**
 * 7) Escreva uma função que receba dois numeros como argumetos, X e Y. 
 * Verifique se X é divisível por Y, se sim, retorna X. Do contrário, retorne 
 * o próximo número natural divisível por Y.
 */
// N = { 0, 1, 2, ... }

function myFunction(x, y) {
  while (x % y !== 0) x++;
	return x;
}

console.log(myFunction(1, 23));      // Expected 23

console.log(myFunction(23, 23));     // Expected 23

console.log(myFunction(7, 3) );      // Expected 9

console.log(myFunction(-5, 7));      // Expected 0
