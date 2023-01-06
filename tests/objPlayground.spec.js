const { calculator, arrayGenerator } = require('../src/objPlayground');

describe('Casos de teste para a função `calculator` e `arrayGenerator`', () => { 
  it('Verifica se a função calculator retorna o valor esperado ', () => {
    expect(calculator(1, 2)).toEqual({ sum: 3, mult: 2, div: 0, sub: -1 });
    expect(calculator(2, -2)).toEqual({ sum: 0, mult: -4, div: -1, sub: 4 });
  });

  it('Verifica se a função `arrayGenerator` retorna o valor esperado', () => {
    expect(arrayGenerator('keys', { sum: 3, mult: 2, div: 0, sub: -1 })).toEqual([ 'sum', 'mult', 'div', 'sub' ]);
    expect(arrayGenerator('values', { sum: 3, mult: 2, div: 1, sub: 0 })).toEqual([ 3, 2, 1, 0 ]);
    expect(arrayGenerator('entries', { sum: 3, mult: 2, div: 1, sub: 0 })).toEqual([ [ 'sum', 3 ], [ 'mult', 2 ], [ 'div', 1 ], [ 'sub', 0 ] ]);
    expect(arrayGenerator()).toEqual();
  });
});