const { TestScheduler } = require('jest');
const productDetails = require('../src/productDetails');
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    expect(productDetails('Alcool gel', 'Máscara')).toEqual([
      { name: 'Alcool gel', details: { productId: 'Alcool gel123' } },
      { name: 'Máscara', details: { productId: 'Máscara123' } }
    ]);
  });

  it('Verifica se a função `productDetails` existe', () => {
    expect(typeof productDetails).toBe('function');
  });

  it('Verifica se a função `productDetails` retorna um array ', () => {
    expect(Array.isArray(productDetails('Alcool gel', 'Máscara'))).toBe(true);
  });

  it('Verifica se o array retornado pela função `productDetails` contém dois itens dentro', () => {
    expect(productDetails('Alcool gel', 'Máscara').length).toBe(2);
  });

  it('Verifica se os dois itens dentro do array retornado pela função `productDetails` são objetos ', () => {
    expect(typeof productDetails('Alcool gel', 'Máscara')[0]).toBe('object');
    expect(typeof productDetails('Alcool gel', 'Máscara')[1]).toBe('object');
  });

  it('Verifica se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si', () => {
    expect(productDetails('Alcool gel', 'Máscara')).not.toBe(productDetails('Alcool gel', 'Alcool gel'));
    expect(productDetails('Alcool gel', 'Máscara')[0].name).not.toBe(productDetails('Alcool gel', 'Máscara')[1].name);
  });

  it('Verifica se os dois productIds terminam com 123', () => {
    expect(productDetails('Alcool gel', 'Máscara')[0].details.productId).toContain('123');
    expect(productDetails('Alcool gel', 'Máscara')[1].details.productId).toContain('123');
  });
});
