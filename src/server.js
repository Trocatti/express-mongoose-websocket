const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

mongoose.connect(
    'URL_MONGODB',
    { useNewUrlParser: true, useCreateIndex: true })
    .then(res => {
        const { name } = res.connection
        console.log('[Mongoose] Connected to the database', name)
    }, err => console.log('[Mongoose] Error connecting to database', err))

const routes = require('./routes')

const app = express()
const server = require('http').Server(app) // http já vem por padrão no node
const io = require('socket.io')(server)

// isso é legal gravar no banco o de para: id do usuário e o id do socket
const connectedUsers = {}
io.on('connection', socket => {
    const { user } = socket.handshake.query

    connectedUsers[user] = socket.id
})

app.use((req, res, next) => {
    req.io = io
    req.connectedUsers = connectedUsers

    return next()
})

app.use(cors())
app.use(express.json())
app.use(routes)

server.listen(3333, err => {
    if (err) console.log('Erro ao iniciar o servidor: ', err)
    console.log('Servidor iniciado com sucesso')
})
