This is a simple REST API written in es6 using Express, Mongoose and Socket.io. This project should help beginners and experienced developers get started yours applications.

### Install
- git clone git@github.com:Trocatti/express-mongoose-websocket.git - clone repository
- cd [directory] - open directory
- npm install - install all decencies
- npm run serve - for run dev serve with nodemon.

### Client Side 
- client: `yarn add socket.io-client`
- main.js: `import socket.io-client`, create a function that connects to the socket by passing the backend ip, 
example: `const socket = io('localhost:3333', { query: { user: match.params.id} }); socket.on('match', dev => { console.log(dev) });`

### Contribute
I would really like a comments. So you can fork this repository and leave a PR with comments. Thanks.
