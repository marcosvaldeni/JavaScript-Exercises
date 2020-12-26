/**
 * 8) Escreva uma função que receba um número como argumento, essa função 
 * deve separar os caracteres do número em elementos e retornar um array de 
 * números.
 * 
 */


function myFunction(number) {
	return number.toString().split('').map(x => +x);
}


console.log(myFunction(10));        // Expected [1,0] 

console.log(myFunction(931));       // Expected [9,3,1] 

console.log(myFunction(193278));    // Expected [1,9,3,2,7,8] 
