/**
 * 17) Escreva uma função que receba uma string e rotacione seus caracteres, 
 * removendo periodicamente uma letra do final e adicionando ao início. 
 *    A string devem ser mostrados no navegador com a rotação  
 * 
 * 
 */

function myFunction(str) {
  const h1 = document.querySelector('h1');
  h1.textContent = str;

  let arr = h1.textContent.split('');

  setInterval(() => {
    let removed = arr.pop();

    arr.unshift(removed);

    h1.textContent = arr.join('');

  }, 1000);
}

myFunction('/marcosvaldeni');
