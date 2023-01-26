const express = require('express');
const PostController = require('./controllers/PostController');
const routes = new express.Router();
const multer = require('multer');

const upload = multer();
routes.post('/posts', upload.single('image'), PostController.store); 


// interceptador de chamadas do raiz midleware 
/*
req > Acessar a requisição, parametros passados via url http://localhost:3333?name=kevin
return res.send('Hello', req.query.name)

res > Acessar a resposta de requisição do navegador
*/

module.exports = routes;