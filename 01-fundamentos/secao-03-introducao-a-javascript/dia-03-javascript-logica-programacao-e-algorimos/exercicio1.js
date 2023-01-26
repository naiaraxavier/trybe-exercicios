//1 - Criar um algoritmo que imprima o fatorial de 10

const number = 4;
let fatorial = 1;

for(let index = number; index > 1; index -= 1){
  fatorial = fatorial * index;
}

console.log(fatorial);

//2 - Utilizar um for para inverter uma palavra

let word = 'naiara';
let inverted = "";

  for(let index = word.length; index > 0 ; index -= 1){
    inverted += word[index -1];
  }
  console.log(inverted);


