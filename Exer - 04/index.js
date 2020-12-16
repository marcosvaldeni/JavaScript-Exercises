/**
 * 4) Escreva uma função que receba um valor como argumento. Se o valor for 
 * inteiro (não tendo casa decimal), então retorne true, do contrário 
 * retorne false.
 * 
 */

 
function myFunction(input) {
  return input % 1 === 0;
}


console.log(myFunction(4));          // Expected true 

console.log(myFunction(1.123));      // Expected false 

console.log(myFunction(1048));       // Expected true 

console.log(myFunction(10.48));      // Expected false 
