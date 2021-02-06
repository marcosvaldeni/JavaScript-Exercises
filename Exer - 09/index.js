/**
 * 9) Escreva uma função que receba uma string como argumento, essa função 
 * deve trocar cada letra da string pela próxima no alfabeto e retornar a nova
 * palavra.
 */


function myFunction(a) {
  return a.split('').map(char => String.fromCharCode(char.charCodeAt(0) + 1)).join('');
}


console.log(myFunction('bnchmf'));    // Expected 'coding'

console.log(myFunction('bgddrd'));    // Expected 'cheese'

console.log(myFunction('sdrshmf'));   // Expected 'testing'
