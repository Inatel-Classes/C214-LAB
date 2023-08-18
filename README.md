# Git e GitHub: Resumo de Conceitos e Comandos

## Git

O Git é um sistema de controle de versões distribuído amplamente utilizado para rastrear mudanças em projetos de software. Ele permite que você trabalhe em equipes e acompanhe o histórico de alterações em seus projetos.

### Conceitos Básicos

- **Repositório**: Local onde seus projetos são armazenados e gerenciados.
- **Commit**: Uma snapshot de suas alterações em um determinado momento.
- **Branch**: Uma linha independente de desenvolvimento dentro do repositório.
- **Merge**: Combinação de duas ou mais branches.
- **Pull Request (PR)**: Proposta de alteração que pode ser revisada e mesclada.

### Comandos Básicos

- `git init`: Inicia um novo repositório Git.
- `git clone <URL>`: Clona um repositório remoto para sua máquina local.
- `git add <arquivo>`: Adiciona alterações para serem preparadas para commit.
- `git commit -m "mensagem"`: Confirma as alterações com uma mensagem descritiva.
- `git pull`: Puxa as alterações do repositório remoto para o local.
- `git push`: Envia as alterações locais para o repositório remoto.
- `git branch`: Lista as branches presentes no repositório.
- `git checkout <branch>`: Altera para a branch especificada.
- `git merge <branch>`: Mescla as alterações da branch especificada na branch atual.
- `git status`: Exibe o estado atual das alterações no repositório.

## GitHub

O GitHub é uma plataforma de hospedagem de código-fonte baseada em Git. Ela fornece recursos adicionais para colaboração e gerenciamento de projetos.

### Conceitos Básicos

- **Repositório Remoto**: Versão online do seu repositório Git local.
- **Fork**: Cria uma cópia independente de um repositório para sua conta.
- **Pull Request (PR)**: Solicita a incorporação de suas alterações no repositório original.
- **Issues**: Rastreamento de tarefas, bugs ou melhorias para o projeto.
- **Merge Pull Request**: Combinar as alterações de um PR após a revisão.

### Comandos Básicos

- `git remote add origin <URL>`: Vincula o repositório local a um repositório remoto.
- `git push -u origin <branch>`: Envia as alterações locais para o repositório remoto pela primeira vez.
- Ao criar um Fork:
  - Clone seu fork localmente: `git clone <URL do seu fork>`.
  - Mantenha seu fork atualizado com o repositório original:
    1. `git remote add upstream <URL do repositório original>`.
    2. `git fetch upstream`.
    3. `git merge upstream/main` (ou outra branch).
- Ao fazer um Pull Request:
  - Faça suas alterações e faça commit no seu fork.
  - Crie um PR no repositório original através do GitHub.

## Dicas Adicionais

- Escreva mensagens de commit descritivas e significativas.
- Utilize branches para isolar diferentes fluxos de trabalho.
- Regularmente faça pull das atualizações do repositório remoto para manter-se sincronizado.

