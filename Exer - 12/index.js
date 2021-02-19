/*
 * 12) Escreva uma função para encontrar a área de um triângulo. Esta função 
 * deve receber três valores numéricos, cada valor representa um dos 
 * lados do triângulo.
 * 
 */


function myFunction(a, b, c) {
  let p = (a + b + c) / 2;

  return Math.sqrt(p*(p-a)*(p-b)*(p-c));
}


console.log(myFunction(7, 7, 9));

console.log(myFunction(33, 52, 27));
