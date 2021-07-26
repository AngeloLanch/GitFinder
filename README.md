<h1 align="center">
    <img alt="a cat playing with a ball" title="#GitFinder" src="./assets/../src/assets/presentation.png" />
</h1>

<h4 align="center">
	🚧 GitFinder v1.0 - sempre em construção... 🚧
</h4>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/AngeloLanch/GitFinder?color=%2304D361">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/angeloLanch/GitFinder">

  <a href="https://github.com/AngeloLanch/GitFinder/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/AngeloLanch/GitFinder">
  </a>

  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
</p>


## 💻 Sobre o projeto

O projeto no estilo buscador de repositórios não foi é pra mim, eu já havia feito outro em javascript puro, a um ano atrás, e com isso achei que não me daria muito trabalho, até porque hoje eu sei bem mais doque o eu do ano passado.

A verdade é que senti o peso de um ano de estudos em JS. Fazer este projeto em apenas 4 dias, utilizando React, Typescript, StyledComponents, Jest, express(um micro backend), e ainda com melhores práticas de programação junto as configurações de ESlint e Prettier, foi um tanto quanto desafiador.

## 🎨 Layout

O layout da aplicação foi inspirado nas famosas capas de livros da O'Reilly, tendo o gato como personagem devido a sua natureza caçadora. Buscando pela utilidade como fator principal, aproveitei as cores em preto e branco da imagem do gato, e a extendi por toda a aplicação.
Os botões com design de "boom da internet" não negam a pressa em finalizar (e que eu já tenho mais de 20 e poucos anos), mas combinou vai...

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:
- [Node.js][nodejs],
- [React][react]
- [TypeScript][typescript]

## :mailbox_closed: API

A API utilizada nessa aplicação foi a do Github:
https://docs.github.com/en/rest/guides/getting-started-with-the-rest-api


## Pré-requisitos
Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Node.js][nodejs],
[react],
[typescript],

exceto pelo Node, os outros arquivos serão instalados assim que digitar o comando:
``` yarn install```

Além disto é bom ter um editor para trabalhar com o código como o [VSCode][vscode]

## :cat: Clonando o Repositório

```bash
# Clone este repositório
$ git clone https://github.com/AngeloLanch/GitFinder

# Acesse a pasta do projeto no terminal/cmd
$ cd gitfinder

# Instale as dependências
$ yarn install

```

## :coffee: Como executar o projeto

Após fazer o clone do projeto, abra-o em seu editor preferido, navegue para a pasta 'backend' e em seguida digite o comando:
```yarn start```

Você receberá uma mensagme no console:
"running in https://localhost:8080"

Seu servidor já está rodando!

Em seguida, abra outro terminal e navegue de volta para a pasta principal do projeto. Eexecute o comando novamente:
```yarn start```

A palicação começará a rodar em localhost:3000

## :raising_hand: Para contribuir com o projeto

-- O Que melhorar ?
  Alguns pontos que gostaria de melhorar no projeto:
   - Página de pesquisa não encontrada (404);
   - Loading enquanto as requisições não retornam;
   - Melhor a aplicação do useContext. Ao meu ver, os componentes poderiam receber as informações va props, enquanto as páginas se utilizam dos contextos;
   - A junção do estado que armazeda os dados requisitados com o estado que armazeda a flag booleana se os dados foram requisitados ou não, em um único estado, que armazenaria um objeto contentendo {flag, data}

1. Faça um **fork** do projeto.
2. Crie uma nova branch com as suas alterações: `git checkout -b my-feature`
3. Salve as alterações e crie uma mensagem de commit contando o que você fez: `git commit -m "feature: My new feature"`
4. Envie as suas alterações: `git push origin my-feature`
> Caso tenha alguma dúvida confira este [guia de como contribuir no GitHub](https://github.com/firstcontributions/first-contributions)

## :flying_saucer: Problemas comuns:

Para conseguir utilizar a aplicação corretamente, é necessário possuir os códigos de autenticação de usuário no github.
O arquivo .env com os códigos, clientID e clientSecret, não estão contidos neste repositório por motivos de segurança.
Para ter acesso completo a aplicação, entre em contato que eu te passo na boa =)

ou crie as suas próprias entrando em "settings" -> "developer Settings" -> OauthApps -> New OauthApp.
  - As rotas de entrada e callback devem ser https://localhost:3000
  - Após obter suas chaves de acesso, crie um arquivo .env no front e backend da aplicação com as suas chaves de acesso

## 📝 Licença

Feito por: Ângelo Lanche.
Este projeto está sobe a licença MIT.

[Entre em contato!](https://www.linkedin.com/in/AngeloLanch/)

[nodejs]: https://nodejs.org/
[typescript]: https://www.typescriptlang.org/
[yarn]: https://yarnpkg.com/
[vscode]: https://code.visualstudio.com/
[react]: https://reactjs.org/docs/getting-started.html
[githubAPI]: https://docs.github.com/en/rest
[githubOauth]: https://docs.github.com/en/developers/apps/building-oauth-apps/authorizing-oauth-apps
[license]: https://opensource.org/licenses/MIT
