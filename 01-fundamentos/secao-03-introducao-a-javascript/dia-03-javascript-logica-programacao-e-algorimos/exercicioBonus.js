/* // 1 - Escreva um programa que dado um valor, imprima na tela um quadrado de asteristicos.
let n = 5;
let symbol = '*';
let inputLine = '';

for (let lineIndex = 0; lineIndex < n; lineIndex += 1){ //Cria um linha com n *
  inputLine = inputLine + symbol;
  //console.log(inputLine);
}
for (let lineIndex = 0; lineIndex < n; lineIndex += 1){ //Repeta a linha n vezes
  //console.log(inputLine); //Saída do quadrado
}

//2- Agora imprima um triângulo retângulo com 5 asteristicos na base
let trianguloR = '';

for(i=0; i < n; i += 1){
  trianguloR = trianguloR + symbol;
  //console.log(trianguloR);
}

// 3 inverta o lado do triângulo
let vazio = '';

for(i=0; i < n; i += 1){
/*   for(let j = n; j>= 1; j -=1){

  } 
  console.log(vazio);
} */
let n = 5;
let symbol = '*';
let inputLine = '';
let inputPosition = n - 1;

for (let lineIndex = 0; lineIndex < n; lineIndex += 1) {
  for (let columnIndex = 0; columnIndex < n; columnIndex += 1) {
    if (columnIndex < inputPosition) {
    }
  }
  console.log(inputLine);
  inputLine = '';
  inputPosition -= 1;
  
};
