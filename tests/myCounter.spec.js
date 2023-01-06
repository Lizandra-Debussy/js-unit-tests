const myCounter = require('../src/myCounter');

describe('Casos de teste para a função `myCounter`', () => { 
  it('Verifica se a função myCounter retorna o array esperado', () => {
    const array = [0, 2, 3, 1, 2, 3, 2, 2, 3, 3, 2, 3];
    expect(myCounter()).toEqual(array);
  });
});