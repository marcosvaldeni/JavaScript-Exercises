/*
 * 11) Escreva uma função que receba um número como argumento, essa função 
 * deve retornar este número arredondado para dois dígitos após a vírgula.
 * 
 */


 function myFunction(number) {
   return +number.toFixed(2);
 }


console.log(myFunction(2.45468));       // Expected 2.12

console.log(myFunction(3.5156));        // Expected 3.14

console.log(myFunction(1.846146568));   // Expected 1.12

console.log(myFunction(26.15216));      // Expected 26.14
