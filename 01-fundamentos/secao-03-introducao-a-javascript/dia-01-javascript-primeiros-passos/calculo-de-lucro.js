// 9 - Calcular o valor do lucro, considerando que há incidencia de 20% de imposto sobre o valor de custo e foram vendidos 1000 produtos

const valorCusto = 8;
const valorVenda = 15;


if(valorCusto > 0 && valorVenda > 0){
  const impostoSobreCusto = valorCusto * 0.2;
  const valorCustoTotal = valorCusto + impostoSobreCusto;
  const lucro = (valorVenda - valorCustoTotal) * 1000;
  console.log("Valor do lucro é: "+lucro+" reais");
}else {
  console.log ("Valor inválido");
}