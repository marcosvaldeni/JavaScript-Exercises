/* 
 * 10) Escreva uma função que receba duas strings como argumentos, essa função 
 * deve concatenar o que foi recebido, limpar os caracteres estranhos (%) 
 * e retornar uma palavra com a primeira letra maiúscula. 
 * 
 */

function myFunction(a, b) {
  b = b.split('').reverse().join('');
  a = (a + b).replace('%', '');
  return a.charAt(0).toUpperCase() + a.slice(1);
} 

console.log(myFunction('java', 'tpi%rcs'));   // Expected 'Javascript'

console.log(myFunction('pa%ralele', 'odapip'));   // Expected 'Paralelepipado'

console.log(myFunction('universi', 'ed%ad'));   // Expected 'Universidade'
