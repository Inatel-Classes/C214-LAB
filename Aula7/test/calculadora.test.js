const { soma, subtracao, multiplicacao, divisao } = require('../src/calculadora');

describe('Testando a função multiplicacao', () => {
    it('deve multiplicar dois números corretamente', () => {
      // Criando um mock para a função multiplicacao
      const mockMultiplicacao = jest.fn((a, b) => a * b);
  
      // Substituindo a implementação da função multiplicacao pelo mock
      multiplicacao.multiplicacao = mockMultiplicacao;
  
      // Chamando a função com os argumentos
      const resultado = multiplicacao.multiplicacao(2, 3);
  
      // Verificando se o mock foi chamado corretamente
      expect(mockMultiplicacao).toHaveBeenCalledWith(2, 3);
  
      // Verificando o resultado da função
      expect(resultado).toBe(6);
  
      // Restaurando a implementação original da função multiplicacao
      multiplicacao.multiplicacao = jest.fn();

      console.log("Passa")

      // DEVE PASSAR
    });
  });
  
  describe('Testando a função soma', () => {
    it('deve somar dois números corretamente', () => {
      // Criando um mock para a função soma
      const mockSoma = jest.fn((a, b) => a + b);
  
      // Substituindo a implementação da função soma pelo mock
      soma.soma = mockSoma;
  
      // Chamando a função com os argumentos
      const resultado = soma.soma(2, 3);
  
      // Verificando se o mock foi chamado corretamente
      expect(mockSoma).toHaveBeenCalledWith(2, 3);
  
      // Verificando o resultado da função
      expect(resultado).toBe(6);
  
      // Restaurando a implementação original da função soma
      soma.soma = jest.fn();


      // NÃO DEVE PASSAR

    });
  });