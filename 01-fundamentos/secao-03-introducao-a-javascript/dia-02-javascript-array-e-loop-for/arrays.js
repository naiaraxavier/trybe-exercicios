let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//let numbers = [6, 10, 4, 20, 70, 8, 100, 2, 36, 28];

//1 - Percorra o array imprimindo todos os valores com console.log();

for(let index = 0; index < numbers.length; index += 1){
  console.log(numbers[index]);
} 

//2 - Realize a soma dos valores contidos no array e imprima o resultado;

let sum = 0;
for(let index = 0; index < numbers.length; index += 1){
  sum += numbers[index];  
}
console.log("A soma dos valores contidos no array é "+ sum);

//3 - Calcule e imprima a média dos valores contidos no array;

let average = sum / numbers.length;
console.log("A média dos valores contidos no array é "+ average);

//4 - Com base no exercício anterior, se o resultado for maior que 20, imprima "Valor maior que 20", caso contrário, imprima "Valor menor ou igual a 20";

if (average > 20){
  console.log("Valor maior que 20");
} else {
  console.log("Valor menor ou igual a 20");
}

//5 - Utilizando for, descubra qual o maior valor contido e imprima;

let bigger = 0;

for(let index = 0; index < numbers.length; index += 1){
  if(numbers[index] > bigger){
    bigger = numbers[index];
  }
}
console.log("O maior número é: "+ bigger);

//6 - Descubra quantos valores ímpares existem no array e imprima o resultado. Se não houver nenhum, imprima "nenhum valor ímpar encontrado;

let cont = 0;

for(let index = 0; index < numbers.length; index += 1){
  if(numbers[index] % 2 !== 0){
    cont += 1;
  }
}
console.log("Há "+ cont+ " números ímpares");

if (cont <= 0){
  console.log("Nenhum valor ímpar encontrado");
}

//7 - Usando for, descubra o menor valor contido no array e imprima;

let smaller = 1000;

for(let index = 0; index < numbers.length; index += 1){
  if(numbers[index] < smaller){
    smaller = numbers[index];
  }
}
console.log("O menor número é: "+ smaller);

//8 - Usando for, crie um array que vá de 1 á 25 e imprima o resultado;

let emptyArray = [];

for(let index = 1; index <=25; index +=1){
  emptyArray.push(index);
}
console.log(emptyArray);

//9 - Com base no exercício anterior, imprima o resultado da divisão de cada elemento por 2;

for(let index = 1; index <25; index +=1){
  let division = emptyArray[index] / 2;
  console.log(emptyArray[index]+ " dividido por 2 = "+ division);
}
