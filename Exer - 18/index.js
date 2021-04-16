/**
 * 18) Escreva uma função que calcule e retorne, quantos dias falta para o Natal. 
 * 
*/

function myFunction() {
  const today = new Date();

  const christmasDay = new Date('Deceber 25,' + new Date().getFullYear());

  const oneDay = 60 * 60 * 24 * 1000;

  return Math.ceil((christmasDay.getTime() - today.getTime()) / oneDay);
}

console.log(myFunction());
