/**
 * 15) Escreva uma função que receba uma string como argumento, esta função 
 * deve validar um “username” com as devidas condições: 
 *
 * 1. Deve ter entre 4 a 25 caracteres. 
 * 2. Deve começar com uma letra. 
 * 3. Só pode conter letras, números e underscores
 * 4. Não pode terminar com underscore. 
 * Se o “username” for válido, seu programa deve retornar uma string true, 
 * caso contrário, deve retornar uma string false.
 * 
 */
  // /^[a-z]{1}\w[a-z\d_]{1,23}[a-z\d]{1}$/i

function myFunction(str) {
  if (/^[a-z]{1}\w[a-z\d_]{1,23}[a-z\d]{1}$/i.test(str)) {
    return 'true';
  }

  return 'false';
}

console.log(myFunction('_Hurley'));

console.log(myFunction('jack_'));

console.log(myFunction('hi'));

console.log(myFunction('1_JohnLocke'));

console.log(myFunction('jamesford'));
