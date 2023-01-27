const express = require('express'); //chama o express
const mongoose = require('mongoose'); // mongoose é o banco de dados
const path = require('path');
const cors = require('cors');

const app = express(); // cria o servidor

// permite escutar o HTTP e o Websoket, desacoplando o app
const server = require('http').Server(app);  //http
const io = require('socket.io')(server); // websocket

mongoose.connect('mongodb+srv://kevin_sousa:226921226921@cluster0.ebwwlc4.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
}); // veio do mongo atlas

app.use((req, res, next) => {
    req.io = io;
    next();
}) //libera o acesso do IO para os demais arquivos

app.use(cors());

app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads', 'resized')));

app.use(require('./routes'));

server.listen(3333); // escuta a porta do navegador


