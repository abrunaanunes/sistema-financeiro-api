
# Cronograma de Implementação da API Financeira

## Semana 1: Planejamento e Configuração Inicial
**Objetivo:** Configurar o ambiente de desenvolvimento, definir a arquitetura e implementar as primeiras funcionalidades básicas.
- **Dia 1-2: Configuração do ambiente**
  - Instalar as dependências necessárias: `Express`, `Mongoose`, `Dotenv`, `Bcryptjs`, `Jsonwebtoken`, `Joi`, etc.
  - Configurar variáveis de ambiente com `dotenv` para gerenciar a conexão com o banco de dados e segredos JWT.
  - Configurar o servidor Express e definir a estrutura básica de pastas (controllers, services, models, etc.).
- **Dia 3-4: Configuração do banco de dados**
  - Configurar a conexão com o MongoDB utilizando Mongoose.
  - Criar o modelo `User` com os atributos básicos (nome, email, senha).
- **Dia 5-7: Implementação de autenticação e registro de usuários**
  - Implementar o registro de usuários com hash de senha utilizando `Bcrypt`.
  - Implementar login de usuários utilizando `JWT`.
  - Criar as rotas para **registro** e **login** no sistema.
  - Implementar a validação de dados de entrada com **Joi** para essas rotas.

## Semana 2: Funcionalidades de Contas Mensais
**Objetivo:** Implementar funcionalidades básicas para criar e gerenciar as contas mensais dos usuários.
- **Dia 8-9: Implementar o modelo de contas mensais**
  - Criar o modelo `Account` (conta), com atributos como: título, valor, data de vencimento, status de pagamento.
  - Definir as relações entre `User` e `Account` (usuário pode ter várias contas).
- **Dia 10-11: CRUD de contas mensais**
  - Implementar o CRUD (Create, Read, Update, Delete) para gerenciar as contas dos usuários.
  - Criar rotas para listar, adicionar, editar e remover contas.
- **Dia 12-14: Validação e segurança**
  - Adicionar middleware de autenticação JWT para proteger as rotas de contas, garantindo que apenas usuários logados possam gerenciar suas contas.
  - Implementar validação com **Joi** para garantir que as informações de contas sejam fornecidas corretamente.

## Semana 3: Relatórios e Organização
**Objetivo:** Criar relatórios mensais e funcionalidades de organização financeira.
- **Dia 15-16: Relatório mensal de contas**
  - Implementar uma funcionalidade que permita gerar um relatório mensal, listando todas as contas de um usuário para um mês específico.
  - Criar rota para **gerar relatório de contas**.
- **Dia 17-18: Cálculo de totais mensais**
  - Implementar lógica para calcular o total de despesas para um mês específico, somando os valores das contas que estão pendentes e pagas.
  - Criar rota para **obter o total de despesas** do mês.
- **Dia 19-21: Filtro e organização de contas**
  - Implementar filtros para organizar as contas por status (pagas, não pagas, vencidas).
  - Criar rota para listar contas por status, para permitir que o usuário veja apenas contas vencidas ou pagas, por exemplo.

## Semana 4: Notificações e Melhorias de Usabilidade
**Objetivo:** Adicionar notificações para contas vencidas e automatizar alguns processos recorrentes.
- **Dia 22-23: Notificações de contas vencidas**
  - Implementar um serviço para verificar se o usuário tem contas vencidas e enviar notificações (por email ou mensagem) usando **Nodemailer**.
  - Configurar cron jobs usando **node-cron** para verificar periodicamente contas vencidas.
- **Dia 24-25: Configuração de contas recorrentes**
  - Implementar a funcionalidade para o usuário definir contas recorrentes (ex: aluguel), que são automaticamente adicionadas todo mês.
  - Criar rotas para adicionar/editar/remover contas recorrentes.
- **Dia 26-28: Melhorias e testes**
  - Revisar todo o código e aplicar melhorias seguindo os princípios de Clean Code (simplificar funções, reutilizar código, documentar).
  - Implementar testes unitários com **Jest** ou **Mocha** para garantir que as principais funcionalidades estejam funcionando corretamente.

## Semana 5: Implementação Final e Testes
**Objetivo:** Finalizar a API e realizar testes de integração, validando a funcionalidade completa do sistema.
- **Dia 29-30: Revisão e ajustes**
  - Revisar todo o código, verificando se os padrões de projeto estão sendo seguidos corretamente.
  - Fazer ajustes finais com base nos feedbacks e testes realizados.
- **Dia 31-35: Testes de integração**
  - Implementar testes de integração para verificar a interação entre as várias partes do sistema (autenticação, contas, relatórios).
  - Testar a API com ferramentas como **Postman** ou **Insomnia**.
  - Validar as rotas, respostas e status codes.

## Semana 6: Documentação e Preparação para Deploy
**Objetivo:** Documentar a API e preparar o sistema para ser implementado em produção.
- **Dia 36-37: Documentação**
  - Criar documentação da API, detalhando as rotas, parâmetros, e exemplos de requisições/respostas.
  - Usar **Swagger** para gerar uma documentação interativa da API, se necessário.
- **Dia 38-40: Preparação para Deploy**
  - Configurar o ambiente de produção, como o servidor em **Heroku**, **AWS** ou outro serviço de nuvem.
  - Implementar monitoramento básico para garantir que o sistema esteja rodando corretamente em produção.


## V2
- Implementar validação da senha: "A senha deve conter letras maiúsculas, minúsculas, números e caracteres especiais."