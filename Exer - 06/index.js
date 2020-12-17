/**
 * 6) Escreva uma função que receba um objeto, neste objeto esteja definido
 * duas propriedades 'percentage' e 'number'. Por fim, retorne um percentual 
 * referente a esses valores.
 * 
 */


function myFunction({ number, percentage }) {
	return (number / 100) * percentage;
}

console.log(myFunction({number: 100, percentage: 50}));    // Expected 50 

console.log(myFunction({number: 777, percentage: 2}));     // Expected 15.54 

console.log(myFunction({number: 500, percentage: 99}));    // Expected 495 
