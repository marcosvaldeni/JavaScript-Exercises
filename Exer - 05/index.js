/**
 * 5) Escreva uma função que receba duas strings, A e B como argumentos. 
 * Se A conter B concatene B no início de A, se não concatene B no fim de A. 
 * Por fim retorne à concatenação.
 * 
 */
 

function myFunction(a, b) {
  return a.includes(b) ? b + a : a + b;
}


console.log(myFunction("cheese", "cake"));              // Expected "cheesecake" 

console.log(myFunction("lips", "s"));                   // Expected "slips" 

console.log(myFunction("Java", "script"));              // Expected "Javascript" 

console.log(myFunction(" think, therefore I am","I"));  // Expected "I think, therefore I am" 
