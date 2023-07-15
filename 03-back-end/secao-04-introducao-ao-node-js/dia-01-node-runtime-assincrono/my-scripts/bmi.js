const readline = require('readline-sync');
const fs = require('fs').promises;

// 1 - Crie um código para calcular o índice de massa corporal(IMC) de uma pessoa.

const bmi = () => {
  const weightInKg = 60;
  const heightInCm = 170;
  const heightInMeters = heightInCm / 100;
  console.log(`Altura em Metros: ${heightInMeters} - Peso em KG: ${weightInKg}`);
  const results = (weightInKg / heightInMeters ** 2).toFixed(2);
  return results;
}

//console.log(`IMC: ${bmi()}`);

// 2 - Permita que o código seja executado através do comando npm run bmi.
// Arquivo package.json - scripts

// 3 - Vamos adicionar inputs de entrada para quem usar.

// const heightInCm = readline.questionInt('Qual a sua altura?');
// const weightInKg = readline.questionInt('Qual o seu peso? ')

const bmiWithReadline = (p, a) => {
  const heightInMeters = a / 100;
  console.log(`Altura em Metros: ${heightInMeters} - Peso em KG: ${p}`);
  const results = (p / heightInMeters ** 2).toFixed(2);
  return results;
}

//console.log(`IMC: ${bmiWithReadline(weightInKg, heightInCm)}`);

// 4 - Agora temos um problema, o peso não é um número inteiro!
// Isso quer dizer que precisamos mudar um pouco a forma como solicitamos o input desse dado.

const bmiWithReadline2 = () => {
  const heightInCm = readline.questionInt('Qual é a sua altura? ');
  const weightInKg = readline.questionFloat('Qual é o seu peso? ');
  const heightInMeters = heightInCm / 100;
  console.log(`Altura em Metros: ${heightInMeters} - Peso em KG: ${weightInKg}`);
  const results = (weightInKg / heightInMeters ** 2).toFixed(2);
  return results;
}

// console.log(bmiWithReadline2());

// 5 - Além de imprimir o IMC na tela, imprima também em qual categoria da tabela abaixo aquele IMC se enquadra

const printCat = () => {
  const result = bmiWithReadline2();
  let message;

  switch (true) {
    case result < 18.5:
      message = 'Abaixo do peso'
      break;
    case result >= 18.5 && result <= 24.9:
      message = 'Peso Normal';
      break;
    case result >= 25 && result <= 29.9:
      message = 'Acima do peso';
      break;
    case result >= 30 && result <= 34.9:
      message = 'Obesidade grau I';
      break;
    case result >= 35 && result <= 39.9:
      message = 'Obesidade grau II';
      break;
    default:
      message = 'Obesidade grau III e IV';
  }
  console.log(message);
}

// printCat()

// 6 - A - Crie uma função que leia todos os dados do arquivo e imprima cada personagem no formato 
// id - Nome. Por exemplo: 1 - Homer Simpson.

const PATH_DATA = './simpsons.json';

const data = async () => {
  const test = await fs.readFile(PATH_DATA);
  const result = JSON.parse(test);
  result.map((res) => console.log(`${res.id} - ${res.name}`))
};

// data();


// B - Crie uma função que receba o id de uma personagem como parâmetro e retorne uma Promise
// que é resolvida com os dados da personagem que possui o id informado. Caso não haja uma 
// personagem com o id informado, rejeite a Promise com o motivo “id não encontrado”.

const getById = async (id) => {
  try {
    const test = await fs.readFile(PATH_DATA); 
    const result = JSON.parse(test);
    const personagem = result.filter((res) => Number(res.id) === id);
    console.log(`${personagem[0].id} - ${personagem[0].name}`);
    // console.log(personagem);

    if (personagem.length === 0) {
      throw new Error('ID não encontrado');
    }
  } catch (error) {
    console.log(error);
  }
};

// getById(1);

// C - Crie uma função que altere o arquivo simpsons.json retirando os personagens com id 10 e 6.

async function filterSimpsons() {
  const fileContent = await fs
  .readFile('./simpsons.json', 'utf-8');

  const simpsons = JSON.parse(fileContent);
  const newArray = simpsons.filter((simpson) => simpson.id !== '10' && simpson.id !== '6');

  console.log(newArray);

await fs.writeFile('./simpsons.json', JSON.stringify(newArray));
}

// filterSimpsons();

// D - Crie uma função que leia o arquivo simpsons.json e crie um novo arquivo, chamado simpsonFamily.json,
// contendo as personagens com id de 1 a 4.

async function createSimpsonsFamily() {
  const fileContent = await fs
    .readFile('./simpsons.json', 'utf-8');

  const simpsons = JSON.parse(fileContent);

  const familyIds = [1, 2, 3, 4];
  const simpsonsFamily = simpsons
    .filter((simpson) => familyIds.includes(Number(simpson.id)));

  console.log(simpsonsFamily);
  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily));
  }

// createSimpsonsFamily();

// E - Crie uma função que adicione ao arquivo simpsonFamily.json o personagem Nelson Muntz.

async function addNelsonToFamily() {
  const fileContent = await fs
    .readFile('./simpsonsFamily.json', 'utf-8');

  const simpsonsFamily = JSON.parse(fileContent);

  simpsonsFamily.push({ id: '8', name: 'Nelson Muntz' });

  console.log(simpsonsFamily);

  await fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsFamily));
  }

// addNelsonToFamily();

// F - Crie uma função que substitua o personagem Nelson Muntz pela personagem Maggie Simpson
// no arquivo simpsonFamily.json.

async function replaceNelson() {
  const fileContent = await fs.readFile('./simpsonsFamily.json', 'utf-8');
  const simpsons = JSON.parse(fileContent);

  // Filtramos o array para remover o personagem Nelson
  const simpsonsWithoutNelson = simpsons.filter((simpson) => simpson.id !== '8');

  // Criamos um novo Array contendo a personagem Maggie
  const simpsonsWithMaggie = simpsonsWithoutNelson
    .concat([{ id: '15', name: 'Maggie Simpson' }]);
  // com spread seria assim:
  // const simpsonsWithMaggie = [ ...simpsonsWithoutNelson, simpsonsWithMaggie ]

  // Escrevemos o novo array no arquivo e retornamos a promise de escrita
  return fs.writeFile('./simpsonsFamily.json', JSON.stringify(simpsonsWithMaggie));
}

console.log(replaceNelson());





