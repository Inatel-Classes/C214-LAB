## Testes Unitários

Os testes unitários são uma prática essencial de desenvolvimento de software que envolve a verificação de unidades individuais de código para garantir que funcionem conforme o esperado. No contexto deste projeto, estamos testando a função `calcularIMC` para garantir que ela retorne resultados corretos.

## Bibliotecas Utilizadas

- **Mocha**: Mocha é um framework de testes amplamente usado para JavaScript. Ele fornece uma estrutura de teste flexível e poderosa, permitindo a criação de suítes de teste e execução de testes assíncronos.

- **Chai**: Chai é uma biblioteca de asserção que se integra bem com o Mocha. Ela oferece várias formas de realizar asserções em seus testes, tornando mais fácil verificar se os resultados são os esperados.

## Estrutura dos Testes

Os testes neste projeto seguem uma estrutura padrão de preparação, ação, assertiva e limpeza:

1. **Preparação**: Configuramos o ambiente de teste, como a criação de instâncias de objetos ou a configuração de variáveis de teste.

2. **Ação**: Executamos a função `calcularIMC` com diferentes entradas.

3. **Assertiva**: Verificamos se o resultado da função corresponde ao resultado esperado usando as asserções do Chai.

4. **Limpeza**: Realizamos a limpeza necessária após cada teste para preparar o ambiente para o próximo teste.

## Executando os Testes

Para executar os testes, siga os passos abaixo:

1. No diretório raiz do projeto, execute o seguinte comando para instalar as dependências de teste:

```bash
npm install
```

2. Verifique no package.json se temos o seguinte script:

```bash
"scripts": {
    "test": "mocha"
  },
```


3. Execute os testes com o seguinte comando:

```bash
npm test
```


Isso executará os testes unitários e exibirá os resultados no terminal.

