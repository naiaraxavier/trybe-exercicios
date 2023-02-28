const myFizzBuzz = require('./exercicio-2.js');

describe('The function MyFizzBuzz', () => {
  it('Retorna um valor de acordo com o número passado', () => {
    expect(myFizzBuzz(15)).toBe('fizzbuzz');
    expect(myFizzBuzz(12)).toBe('fizz');
    expect(myFizzBuzz(10)).toBe('buzz');
    expect(myFizzBuzz(17)).toBe(17);
    expect(myFizzBuzz('18')).toBe(false);
  });
});