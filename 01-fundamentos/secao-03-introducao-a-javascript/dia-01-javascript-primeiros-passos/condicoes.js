/* 1 - Utilizar if/else para retornar o maior de dois números
Definir duas constantes com os valores que serão comparados*/

const num1 = 10;
const num2 = 8;

if(num1 > num2){
  console.log(num1+" é maior que "+num2);
}
else if (num1 < num2){
  console.log(num1+" é menor que "+num2);
}
else {
  console.log("Os números são iguais");
}

//2 - Utilize if/ else para escrever um código que retorne o maior de 3 números
let a = 10;
let b = 9;
let c = 5;

if(a>b && a>c){
    console.log (a +" é maior que "+ b+" e "+c);
}else if (b>a && b>c) {
    console.log(b+" é maior que "+a+" e "+c);
}else {
    console.log(c+" é maior que "+a+" e "+b);
}

/* 3 - Utilize if/else para escrever um código que, dado um valor recebido, retorne positive se o valor for positivo
e negative se for negativo e caso não seje positivo nem negativo, retorne 0 */

let num = -8;

if(num > 0){
    console.log("Positive");
}else if (num < 0){
    console.log("Negative");
}else {
    console.log ("0");
}

/*4 -Ultilize if/else para escrever um código que defina 3 constantes com os valores dos 3 angulos internos
de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário
Se algum ângulo for inválido, você deve retornar uma mensagem de erro.*/

const a1= -60;
const a2= -80;
const a3= 60;
let soma = a1 + a2 + a3;

if(soma === 180 && soma > 0){
  console.log("É um triângulo");
} else if (soma !== 180 && soma > 0){
  console.log("Não é um triângulo");
} else {
  console.log("Valor inválido");
}

/* 5 -Utilizar Swich/case para retornar os movimentos das peças de xadrez, não deve ser case sensitive
retornar um erro caso a peça for inválida*/

let pecaXadrez = 'Torre';
 switch (pecaXadrez.toLowerCase()){
  case "rei":
    console.log("Qualquer direção, uma casa por vez");
  break;

  case "dama":
    console.log("Qualquer direção, quantas casas quiser");
  break;

  case "torre":
    console.log("Move-se em linha reta, tanto na vertical, quanto na horizontal, quantas casas quiser");
  break;

  case "bispo":
    console.log("Diagonal, quantas casas quiser");
  break;

  case "cavalo":
    console.log("Movimento em L");
  break;

  case "peão":
    console.log("Move uma casa para frente");
  break;
 
  default:
    console.log("Peça inválida")
    break;
 }

// 6 - Utilizar if/else para escrever um código que converta uma nota em porcentagem( 0 a 100) em conceitos de A a F

let notaPorcentagem = 150;

if(notaPorcentagem >= 90 && notaPorcentagem < 100){
  console.log("Conceito A");
} else if(notaPorcentagem >= 80 && notaPorcentagem < 100){
  console.log("Conceito B");
} else if(notaPorcentagem >= 70 && notaPorcentagem < 100){
  console.log("Conceito C");
} else if(notaPorcentagem >= 60 && notaPorcentagem < 100){
  console.log("Conceito D");
} else if(notaPorcentagem >= 50 && notaPorcentagem < 100){
  console.log("Conceito E");
} else if(notaPorcentagem < 50 && notaPorcentagem < 100 && notaPorcentagem > 0){
  console.log("Conceito F");
}  else if(notaPorcentagem < 0 || notaPorcentagem > 100){
  console.log("Erro!");
}