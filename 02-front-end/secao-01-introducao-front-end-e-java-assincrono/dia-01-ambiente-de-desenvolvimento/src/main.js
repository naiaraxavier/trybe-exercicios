import validator from 'validator';
import './style.css';

const input = document.querySelector('input');
const select = document.getElementById('input-valor');
const btnValidation = document.querySelector('button');
const textOut = document.querySelector('p');

btnValidation.addEventListener('click', (event) => {
  event.preventDefault();
  // const campos = {
  //   cpf: validator.isTaxID(input.value, 'pt-BR'),
  //   email: validator.isEmail(input.value),
  // };
  // textOut.innerHTML = `A validação retornou ${campos[select.value]}`;
  if (select.value === 'cpf') {
    const result = validator.isTaxID(input.value, 'pt-BR');
    textOut.innerText = `A validação de ${select.value} retornou ${result}`;
  }
  if (select.value === 'email') {
    const result = validator.isEmail(input.value);
    textOut.innerText = `A validação de ${select.value} retornou ${result}`;
  }
});
