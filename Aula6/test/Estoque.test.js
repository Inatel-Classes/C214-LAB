const { expect } = require('chai');
const { addItem } = require('../src/Estoque');

describe('addItem', () => {
  it('deve adicionar um item ao estoque', () => {
    const estoque = [];
    addItem(estoque, 'Item de Teste', 10);
    expect(estoque).to.have.lengthOf(1);
    expect(estoque[0].name).to.equal('Item de Teste');
    expect(estoque[0].quantity).to.equal(10);
  });
});
