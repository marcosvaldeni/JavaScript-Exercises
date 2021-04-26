/**
 * 19) Escreva uma função que receba uma string e verifique se a mesma é um 
 * palíndromo. Como resultado, deve retornar um boolean. 
 * 
 */

/**
 * Checks if the string is a palindrome
 * @param {string} word - The word to be checked
 * @return {boolean} - If it is a palindrome will return true, otherwise false
 */
function checkPalindrome(word) {
  const reversedWord = word.split('').reverse().join('');
  return reversedWord === word;
}

console.log(checkPalindrome('tenet'));

console.log(checkPalindrome('level'));

console.log(checkPalindrome('hello'));
