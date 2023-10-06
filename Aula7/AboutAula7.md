## O que é um teste mock?

Um teste mock é uma simulação de uma parte do código que você está testando. Isso permite que você isole a funcionalidade que está testando, criando um ambiente controlado e previsível para seus testes. Usando mocks, você pode:

- Simular interações com componentes externos, como bancos de dados ou APIs.
- Substituir funções complexas por versões mais simples para simplificar o teste.
- Verificar se as funções foram chamadas com os argumentos corretos e quantas vezes.

## Instalação das Dependências

```bash
// Inicie o seu repositório com o package:
npm init
```

```bash
// Instale o Jest como uma dependência de desenvolvimento:
npm install jest
```

```bash
// Configure o script de teste no seu arquivo package.json para jest:
"scripts": {
  "test": "jest"
}
```

```bash
// Para executar o teste:
npm test
}
```

# O mock é muito usual para "simular" comportamentos.