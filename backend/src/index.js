const express = require('express'); //chama o express
const mongoose = require('mongoose'); // mongoose é o banco de dados

const app = express(); // cria o servidor
mongoose.connect('mongodb+srv://kevin_sousa:226921226921@cluster0.ebwwlc4.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
}); // veio do mongo atlas

app.use(require('./routes'));

app.listen(3333); // escuta a porta do navegador


