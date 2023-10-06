[![CI Class](https://github.com/Inatel-Classes/C214-CI_CD/actions/workflows/ci.yml/badge.svg)](https://github.com/Inatel-Classes/C214-CI_CD/actions/workflows/ci.yml)

# CI/CD e GitHub Actions


## O que é CI/CD?
> Integração Contínua (CI) é uma prática de desenvolvimento de software que visa automatizar a integração de código de vários colaboradores em um repositório central. Isso envolve a execução de testes automatizados e a verificação de integridade do código em cada commit ou pull request.

> Entrega Contínua (CD), por outro lado, é a extensão da CI, que se concentra em automatizar o processo de entrega do software para um ambiente de produção ou staging. O objetivo é garantir que as alterações de código possam ser entregues com eficiência, segurança e confiabilidade aos usuários finais.


## Por que CI/CD é importante?

> A implementação de CI/CD traz vários benefícios para o desenvolvimento de software, incluindo:

1. Detecção precoce de erros: A detecção de erros é automatizada, o que significa que os problemas são identificados e corrigidos rapidamente.

2. Builds consistentes: Cada versão do software é construída a partir do mesmo código-fonte, garantindo que os ambientes de teste e produção sejam consistentes.

3. Automatização: Tarefas tediosas e repetitivas, como compilação, testes e implantação, são automatizadas, economizando tempo e reduzindo erros humanos.

4. Entrega rápida: As atualizações de software podem ser entregues mais rapidamente aos usuários finais.


## GitHub Actions e Pipelines
O GitHub Actions é uma plataforma de automação integrada diretamente ao GitHub, que permite criar e executar fluxos de trabalho automatizados, conhecidos como "Actions". Essas Actions podem ser usadas para criar pipelines de CI/CD personalizados para seu projeto.


## Como o GitHub Actions gera pipelines?
As pipelines de CI/CD no GitHub Actions são definidas em arquivos YAML chamados "workflow files". Cada workflow file contém instruções para automatizar tarefas específicas, como a construção de aplicativos, a execução de testes e a implantação em ambientes de produção.
Você pode personalizar seus fluxos de trabalho de acordo com as necessidades do seu projeto, incluindo a integração com ferramentas de terceiros, notificações e muito mais.