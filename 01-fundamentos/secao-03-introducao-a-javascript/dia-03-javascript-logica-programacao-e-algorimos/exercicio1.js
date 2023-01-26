//1 - Criar um algoritmo que imprima o fatorial de 10

const number = 10;
let fatorial = 1;

for(let index = number; index > 1; index -= 1){
  fatorial = fatorial * index;
}

console.log("O fatorial de "+number+" é "+fatorial);

//2 - Utilizar um for para inverter uma palavra

let word = 'naiara';
let inverted = "";

  for(let index = word.length; index > 0 ; index -= 1){
    inverted += word[index -1];
  }
  console.log("A palavra "+word+" invertida fica: "+inverted);

//3- Utilize a estrutura de repetição for para escrever dois algoritmos: 1 - que imprima a maior palavra de um array e 2 - que imprima a menor palavra

let array = ['java', 'javascript', 'python', 'html', 'css'];
let max = array[0];
let min = array[0];

for(let i = 1; i < array.length; i += 1){
 
  if(array[i].length > max.length){
    max = array[i];
    console.log("Maior palavra é " + max);
  }
  if(array[i].length < min.length){
    min= array[i]
    console.log("A menor palavra é: "+ min);
  }
}


// Escreva um algoritmo que imprima o maior número primo entre 2 e 50

let biggestPrimeNumber = 0;

for(let number = 2; number <= 50; number += 1){
    let isPrime = true;
    for(let divider = 2; divider < number; divider += 1){
    if (number % divider === 0){
      isPrime = false;
    }
  } 
  if(isPrime){
    biggestPrimeNumber = number;
  }
}
console.log("O maior número primo é: "+ biggestPrimeNumber);


