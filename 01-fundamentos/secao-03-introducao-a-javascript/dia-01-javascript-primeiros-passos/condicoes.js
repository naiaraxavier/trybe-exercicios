// Utilizar if/else para retornar o maior de dois números
// Definir duas constantes com os valores que serão comparados

/*const num1 = 10;
const num2 = 8;

if(num1 > num2){
  console.log(num1+" é maior que "+num2);
}
else if (num1 < num2){
  console.log(num1+" é menor que "+num2);
}
else {
  console.log("Os números são iguais");
}*/

//Utilize if/ else para escrever um código que retorne o maior de 3 números
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

//Utilize if/else para escrever um código que, dado um valor recebido, retorne positive se o valor for positivo
// e negative se for negativo e caso não seje positivo nem negativo, retorne 0

let num = -8;

if(num > 0){
    console.log("Número positivo");
}else if (num < 0){
    console.log("Número negativo");
}else {
    console.log ("Número igual a 0");
}

//Ultilize if/else para escrever um código que defina 3 constantes com os valores dos 3 angulos internos
// de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário
// Se algum ângulo for inválido, você deve retornar uma mensagem de erro.

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
