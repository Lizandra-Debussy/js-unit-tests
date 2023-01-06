const vqv = require('../src/vqv');

describe('Casos de teste para a função `vqv`', () => { 
  it('Verifica se a função createStudent retorna o valor esperado ', () => {
    const ana = 'Oi, meu nome é Ana!\n' +
    'Tenho 27 anos,\n' +
    'trabalho na Trybe e mando muito em programação!\n' +
    '#VQV!'
    expect(vqv('Ana', 27)).toBe(ana);
  });

  it('Verifica se a função vqv retorna undefined caso receba parâmetros diferentes do esperado ou vazio', () => {
    expect(vqv(23, 'Carlos')).toBeUndefined();
    expect(vqv()).toBeUndefined();
  });

});