const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// adiciona propriedades ao objeto
const adicionaPropriedade = (object, key, value) => {
  object[key] = value;
};
adicionaPropriedade(lesson2, 'turno', 'noturno');
console.log(lesson2);

// lista as chaves do objeto
const listKeys = (object) => {
  console.log(Object.keys(object));
};
listKeys(lesson2);

// mostra o tamanho do objeto
const tamanhoDoObjeto = (object) => {
  console.log(Object.keys(object).length);
};
tamanhoDoObjeto(lesson2);

// lista os valores de um objeto
const listValues = (object) => {
  console.log(Object.values(object));
};
listValues(lesson2);

// Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign. 
// Cada chave desse novo objeto será uma aula, sendo essas chaves lesson1, lesson2 e lesson3. 

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
console.log(allLessons);

// retorna o número total de estudantes em todas as aulas
const totalAlunos = (obj) => {
  let total = 0;
  const keys = Object.keys(obj);
  for (const i in keys) {
    total += obj[keys[i]].numeroEstudantes;
  }
  return total;
};

console.log(totalAlunos(allLessons));

// obtem o valor da chave de acordo com a sua posição no objeto.
const retornaValor = (object, indice) => {
  console.log(Object.values(object)[indice]);
};
retornaValor(lesson1, 1);

// Função que verifica se o par (chave e valor) existe na função.
const verificaPar = (obj, key, value) => {
  const entries = Object.entries(obj);
  let status = false;
  for (const i in entries) {
    if (entries[i][0]=== key && entries[i][1] === value) {
      status = true;
    }
  }
  return status;
};
console.log(verificaPar(lesson2, 'professor', 'Carlo'));

// função para contar quantos estudantes assistiram as aulas de matemática;
const aulaMatematica = (obj) => {
  const keys = Object.keys(obj);
  let soma = 0;
  for (const i in keys) {
    if (obj[keys[i]].materia === 'Matemática') {
      soma += obj[keys[i]].numeroEstudantes;
    }
  }
  return soma;
};
console.log(aulaMatematica(allLessons));

// função que retorne um relatório
const getInfo = (obj, prof) => {
  const professorInfo = prof;
  const aulasAll = [];
  let alunos = 0;
  const keys = Object.keys(obj);
  for (const i in keys) {
    if(obj[keys[i]].professor === prof) {
      aulasAll.push(obj[keys[i]].materia);
      alunos += obj[keys[i]].numeroEstudantes;
    }
  }
  return {professor: professorInfo, aulas: aulasAll, estudantes: alunos};
};

console.log(getInfo(allLessons, 'Maria Clara'));
