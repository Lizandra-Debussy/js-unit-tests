const average = require('../src/average');

describe('Casos de teste para a função `average`', () => {
  it('Verifica se ao receber um array de números retorna a média dos valores recebidos', () => {
    expect(average([2, 7, 4, 100])).toEqual(28);
    expect(average([0, 33, -1])).toEqual(11);
    expect(average([9, 65, 0, 888, 1])).toEqual(193);
    expect(average([-3, -49, 1])).toEqual(-17);
  });

  it('Verifica se ao receber um array vazio a função average retorna undefined', () => {
    expect(average([])).toBeUndefined();
  });

   it('Retorna undefined caso a função average não receba um array de números', () => {
    expect(average(['6', 2, '-1'])).toBeUndefined();
    expect(average([0, 'a'])).toBeUndefined();
  });

});