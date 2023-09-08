# Introdução ao Svelte

## O que é o Svelte?

O Svelte é um framework front-end para a construção de interfaces de usuário interativas e reativas. Ele difere de outros frameworks como React, Vue ou Angular porque realiza a maior parte do trabalho pesado durante a fase de compilação, gerando código otimizado que é executado diretamente no navegador.

## Principais Características:
1. Compilação Antecipada (Ahead-of-Time Compilation):
Ao contrário de outros frameworks que executam grande parte do processamento no lado do cliente, o Svelte move muitas das tarefas de tempo de execução para o momento da compilação. Isso resulta em aplicativos mais rápidos e eficientes.

2. Reatividade Automática:
No Svelte, você declara variáveis reativas e o framework automaticamente rastreia as dependências e atualiza a interface do usuário sempre que necessário.

3. Componentização:
O Svelte permite criar componentes reutilizáveis, assim como outros frameworks. No entanto, o código do componente Svelte é compilado para código altamente otimizado, o que ajuda a reduzir o tamanho final do pacote.

4. Diretivas Intuitivas:
O Svelte fornece diretivas para vincular, iterar, condicionar e interagir com o DOM de maneira intuitiva. Isso permite criar interfaces complexas de forma concisa e legível.

5. Transições e Animações Simplificadas:
O Svelte facilita a criação de transições e animações suaves com suas diretivas de transição embutidas.

6. Sapper:
O Sapper é um framework relacionado que permite construir aplicativos web progressivos (PWAs) de maneira eficiente, aproveitando o poder do Svelte.

7. Minimização de Boilerplate:
O Svelte reduz a quantidade de código de boilerplate necessário para construir componentes e aplicativos, permitindo que os desenvolvedores se concentrem mais na lógica de negócios real.

## Quando Usar o Svelte?
O Svelte é uma escolha sólida quando você deseja criar interfaces de usuário reativas, otimizadas e rápidas sem sacrificar a facilidade de desenvolvimento. Ele é particularmente apropriado para aplicativos com necessidades de desempenho rigorosas, como PWAs, jogos web e aplicações de visualização de dados.



## Instalação

Para começar a utilizar o Svelte, você precisará ter o Node.js instalado em seu sistema. A partir daí, siga estas etapas:

1. **Crie um novo projeto Svelte:**
```bash
npx degit sveltejs/template my-svelte-project
cd my-svelte-project
```

### Instale as dependências:
```bash
npm install
```

### Inicie o servidor de desenvolvimento:
```bash
npm install
 ```

 ## O servidor irá aparecer no terminal (seu localhost)

