// Crie uma função que, dado um número ilimitado de parâmetros, retorna a soma desses parâmetros.
// escreva sum abaixo
const sum = (...num) => num.reduce((acc, cur) => acc + cur, 0);

console.log(`A soma é: ${sum(4,5,6)}`);
