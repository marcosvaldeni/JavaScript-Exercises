/**
 * 14) Escreva uma função que receba uma string (nome de um aquivo) como argumento, esta 
 * função deve retornar a extensão do arquivo sem o ponto. 
 * 
 */

function myFunction(str) {
  return str.split('.').pop();
}

console.log(myFunction('index.service.ts'));

console.log(myFunction('page.php'));

console.log(myFunction('index.html'));
