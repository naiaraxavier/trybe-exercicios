// 4 - Dado um salário bruto, calcule o líquido a ser recebido

let salarioBruto = 3000.00;
let inss = 0;

console.log("Salário bruto de "+salarioBruto+" reais");
//Dependendo do salário bruto, será descontado determinado valor de INSS de acordo com as condições abaixo:
if(salarioBruto <= 1556.94) {
  inss = salarioBruto * 0.08;
}
else if(salarioBruto >=1556.95 && salarioBruto <=2594.92) {
  inss = salarioBruto * 0.09;
}
else if(salarioBruto >= 2594.93 && salarioBruto <= 5189.82){
  inss = salarioBruto * 0.11;
}
else {
  inss = 570.88;
}
console.log("Valor de inss a ser descontado: "+ inss+" reais");

// Salário base é o salário bruto descontado o valor de INSS
let salarioBase = salarioBruto - inss;

//Para o desconto de IR, pega-se o salário base e desconta os valores de acordo com as condições abaixo;
let ir = 0;
let salarioLiquido = 0;

if(salarioBase <= 1903.98){
  ir = 0;
}
else if (salarioBase >= 1903.99 && salarioBase <=2826.65) {
 ir = salarioBase * 0.075 - 142.80;
}
else if (salarioBase >= 2826.66 && salarioBase <= 3751.05) {
  ir = salarioBase * 0.15 - 354.80;
}
else if (salarioBase >= 3751.06 && salarioBase <= 4664.68) {
  ir = salarioBase * 0.225 - 636.13;
}
else {
  ir= salarioBase * 0.275 - 869.36; 
}

console.log("Valor de IR a ser descontado: "+ir+ " reais");

// Salário líquido é o salário base com o desconto de IR
salarioLiquido = salarioBase - ir;

// Resultado final solicitado
console.log ("Salário Líquido de "+ salarioLiquido+ " reais");




