const createStudent = require('../src/createStudent');

describe('Casos de teste para a função `createStudent`', () => { 
  it('Verifica se a função createStudent retorna os valores esperado', () => {
    
    expect(createStudent('João').name).toMatch('João');
    expect(createStudent('João').feedback()).toMatch('Eita pessoa boa');
    expect(typeof createStudent()).toBe('object');
    expect(typeof createStudent().feedback).toBe('function');
  });
});