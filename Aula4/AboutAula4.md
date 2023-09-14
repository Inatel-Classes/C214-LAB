## Automação de Build

A automação de build é o processo de automatizar tarefas repetitivas no desenvolvimento de software. Isso inclui a compilação de código, minificação, geração de arquivos de distribuição, execução de testes e muito mais. Ferramentas populares como Webpack, Rollup e Parcel ajudam a criar fluxos de trabalho automatizados, garantindo a eficiência do desenvolvimento e a qualidade do código.

## Gerência de Dependência

A gerência de dependência envolve a gestão das bibliotecas e pacotes externos que seu projeto utiliza. Em linguagens de programação como JavaScript, Node.js e Python, as ferramentas de gerenciamento de pacotes (como npm, yarn e pip) permitem instalar, atualizar e remover dependências com facilidade. Isso ajuda a garantir que seu código tenha acesso às funcionalidades necessárias sem a necessidade de reinventar a roda.

## Diferença entre package e package-lock

O arquivo `package.json` contém informações sobre o projeto, suas dependências e scripts associados. Ele atua como um manifesto do projeto. O `package-lock.json`, por outro lado, é um arquivo gerado automaticamente que registra as versões específicas das dependências instaladas. Isso garante que todos os desenvolvedores do projeto estejam usando as mesmas versões de dependências, evitando inconsistências.

## Alternativas à Injeção de Dependência no Svelte

O Svelte oferece alternativas eficazes à injeção de dependência:

1. **Stores:** O Svelte introduziu o conceito de "stores", que são objetos que gerenciam o estado da aplicação. Stores globais e locais permitem compartilhar dados e funcionalidades controladamente entre componentes, eliminando a necessidade de injeção de dependência.

2. **Passagem de Propriedades (Props):** Os componentes no Svelte podem receber propriedades (props) dos componentes pai. Isso permite que dados e funcionalidades sejam transmitidos de forma semelhante à injeção de dependência, onde o componente pai "injeta" dados no filho.

Essas abordagens alinham-se à filosofia do Svelte de manter o código simples, a curva de aprendizado suave e a eficiência no desenvolvimento.

