# Instalação do Node.js

Este guia explica como instalar o Node.js em seu sistema para que você possa executar e testar código JavaScript fora do navegador.

## Passo 1: Verifique se você já tem o Node.js instalado

Antes de começar, verifique se o Node.js já está instalado no seu sistema. Para fazer isso, abra o terminal e digite o seguinte comando:

```bash
node -v
```

Se você vir uma versão do Node.js, isso significa que já está instalado e você pode pular para a seção "Executando código JavaScript". Caso contrário, prossiga para o próximo passo.

## Passo 2: Baixe e instale o Node.js
Acesse o site oficial do Node.js em https://nodejs.org/
Na página inicial, você verá dois downloads recomendados: "LTS" e "Current". É recomendado escolher a versão LTS (Long Term Support) para estabilidade.
Selecione a versão apropriada para o seu sistema operacional (Windows, macOS ou Linux) e clique no link para baixar o instalador.
Execute o instalador e siga as instruções na tela para concluir a instalação.

## Passo 3: Verifique a instalação
Após a instalação, abra novamente o terminal e digite os seguintes comandos para verificar se o Node.js e o npm (gerenciador de pacotes do Node.js) foram instalados corretamente:

```bash
node -v
npm -v
```

### Se você vir as versões do Node.js e do npm, a instalação foi bem-sucedida!

## Executando código JavaScript
Agora que você tem o Node.js instalado, você pode criar e executar arquivos JavaScript no terminal.

Abra o terminal e navegue até o diretório onde você deseja criar seus arquivos JavaScript.
Crie um novo arquivo com a extensão .js, por exemplo, meu_codigo.js.
Escreva ou cole seu código JavaScript no arquivo.
Salve o arquivo.
No terminal, navegue até o diretório onde você salvou o arquivo e execute o código usando o seguinte comando:

``` bash
node meu_codigo.js
```

