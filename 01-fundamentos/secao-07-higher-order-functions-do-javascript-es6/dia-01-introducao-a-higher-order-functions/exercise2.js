/* Desenvolva uma HOF que retorne o resultado de um sorteio. 
Essa HOF irá gerar um número aleatório entre 1 e 5, 
recebendo como parâmetros o número apostado e uma função
que checa se o número apostado é igual ao número sorteado.
O retorno da sua HOF deve ser uma string (Ex: “Tente novamente” ou “Parabéns, você ganhou”). */

const checkNum = (myNum, num) => myNum === num ? 'Parabéns, você ganhou!' : 'Tente novamente';

const resultSorteio = (myNum, checkNum) => {
  const num = parseInt(Math.random() * 5);
  console.log(num);
  return checkNum(myNum, num);
}
console.log(resultSorteio(1, checkNum));

