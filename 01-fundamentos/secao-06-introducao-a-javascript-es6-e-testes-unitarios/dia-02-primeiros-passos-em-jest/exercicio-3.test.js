const {mapString, encode, decode} = require('./exercicio-3.js');

describe('The function encode', () => {
  it('Verifica se é uma função', () =>{
    expect(typeof encode).toBe('function');
  });
  it('Testa se na as vogais são convertidas em 1, 2, 3, 4, 5', () =>{
    expect(encode('aeiou')).toBe('12345');
  });
  it('Testa se as demais letras são convertidas', () =>{
    expect(encode('tr')).toBe('tr');
  });
  it('Testa se a string retornada tem o mesmo número de caractere que a string passada', () =>{
    expect(encode('amor')).toHaveLength(4);
  });
});

describe('The function decode', () =>{
  it('Verifica se é uma função', () =>{
    expect(typeof decode).toBe('function');
  });
  it('Testa se 1, 2, 3, 4, 5 são convertidas em a, e, i, o, u', () =>{
    expect(decode('12345')).toBe('aeiou');
  });
  it('Testa se os números são convertidos', () =>{
    expect(encode('4')).toBe('4');
  });
  it('Testa se a string retornada tem o mesmo número de caractere que a string passada', () =>{
    expect(encode('1m4r')).toHaveLength(4);
  });
});





