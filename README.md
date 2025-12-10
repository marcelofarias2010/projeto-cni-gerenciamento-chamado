# Sistema de Gerenciamento de Chamados

Aplicação web para visualização e cadastro de chamados de serviço.

## Tecnologias Utilizadas
* **Angular 17**: A escolha da versão do Angular 17 se deu devido a instalação do node ser a versão 18, não suportando versão do Angular superior a 17.
* **PrimeNG**: Esta Biblioteca de UI teve sua versão instalada para rodar em compatibilidade com o Angular 17. Ela permite acessar componentes prontos como (Tabelas, Inputs, Toasts).
* **PrimeFlex**: Este Utility de CSS permite facilitar o layout responsivo e sistema de grid.
* **RxJS**: Este componente permite a manipulação reativa de estados e simulação de chamadas assíncronas.

## Como Executar
1.  Instale as dependências: `npm install`
2.  Execute o servidor de desenvolvimento: `ng serve`
3.  Acesse `http://localhost:4200`

## Decisões de Projeto
* **Standalone Components**: Utilizados para reduzir o a quantidade de código repetitivo (boilerplate) de NgModules. No Angular 17 (com Standalone Components), O boilerplate foi drasticamente reduzido. Você cria o componente e pronto. Ele "se gerencia". Você não precisa mais registrar ele em arquivos centrais de módulo.
* **Services**: A lógica de estado (State) foi centralizada no `TicketService` usando `BehaviorSubject` para garantir que a lista seja atualizada em tempo real ao adicionar um novo item.
* **Acessibilidade**: Uso de labels semânticos e componentes do PrimeNG que já seguem diretrizes WCAG.

## Melhoramentos
* **Cabeçalho e rodapé**: Utilizei a IA Gemini do Google para obter as paletas de cores utilizadas no site da CNI a fim de manter no projeto atual do desafio.
* **Tabela**: Reconfigurei o estilo da tabela mantendo o padrão do site da CNI ajustando levemente o HTML.
* **Tipografia**: Com a orientação da IA mudei a fonte do texto para sem serifa, limpa e moderna. 
* **Layout**: Ajustei o conteúdo deixando centralizado com o fundo cinza claro (obtido pela IA), dando destaque ao "cartão" branco do conteúdo, criando um efeito de profundidade profissional.
* **Menu responsivo**: Realizei um ajuste no `app.component.ts` adicionando o botão do icone hambúrguer (visível apenas em telas pequenas) e criando um novo container para os links na versão móvel (que aparecerá quando o botão for clicado).
* **Style**: Adicionei os estilos de responsividade no arquivo styles.scss garantindo que as colres e ajustes fossem aplicados nas páginas relacionadas. 
## Percentual de código gerado por IA
* **Estilo**: uso de 70% entre cores e tipografia; 
* **Arquitetura**: A organização da arquitetura como os diretórios core (models, services) e features (ticket-form e ticket-list) foi 100% orientado pelo Gemini. 
* **Componentes**: A estutura dos componentes foi sugeridas pela IA e ajustada pelo desenvolvedor na proporção de 50% a 50%
