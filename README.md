# Primeiros passos

### Chocolatey - Gerenciador de pacotes para o Windows 
https://chocolatey.org/

### Yarn - Gerenciador de denpendências mais rápido (criador Facebook) 
https://yarnpkg.com/lang/pt-br/docs/install/#windows-stable

### NodeJs - GitHub 
https://github.com/nodesource/distributions/blob/master/README.md

### Opcionais Extensions
- Dracula Official Theme
- Material Icon Theme
- Rocketseat ReactJs
- Rocketseat React Native
- Vetur (VueJs)
- FiraCode (Font style - ttf) https://github.com/tonsky/FiraCode

### Aplicativos
- Insomnia
- MongoDB Atlas (criação de um banco de dados mongo online de até 500mb)
- MongoDB Compass Community (ferramenta free para visualizar nossa base, passando a url do cluster)

### Vamos Começar 
- `yarn init -y ou npm init --yes`
- `yarn add express ou npm install express` (micro framework pro NodeJs para auxiliar na criação de rotas e retornos do servidor)
    - Hoje em dia existe o KoaJs que é muito mais leve, mas vamos usar nesse aplicativo o express
- `yarn add nodemon -D` (-D signica que é uma dependencia de desenvolvimento) nodemon auxilia no processo de desenvolvimento ao ficar observando qualquer alteração no código e já reinicalizar o servidor
- `yarn add mongoose` (ferramenta utilizada para manipular o mongodb utilizando js)
- `yarn add axios` (ferramenta para auxiliar no busca de informações de outras api's)
- `yarn add cors` (ferramenta para outra aplicações consigam pegar informações dessa api, entre outras configurações)
- `yarn add socket.io` (websocket, adiciona um wrap em cima do socket do express... utilizado pra fazer integração de dados em tempo real, como verificar se deu match entre duas pessoas no tinder)
    - No lado do cliente: yarn add socket.io-client
        - No main.js: `import socket.io-client` e cria uma função que se conecta com o socket passando o ip do backend, exemplo: `const socket = io('localhost:3333', { query: { user: match.params.id} });`...
        `socket.on('match', dev => { console.log(dev) })`
