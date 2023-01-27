const express = require('express');
const PostController = require('./controllers/PostController');
const LikeController = require('./controllers/LikeController');
const uploadConfig = require('./config/upload');
const routes = new express.Router();
const multer = require('multer');

const upload = multer(uploadConfig);
routes.post('/posts', upload.single('image'), PostController.store); 
routes.get('/posts', PostController.index);

routes.post('/posts/:id/like', LikeController.store); 


// interceptador de chamadas do raiz midleware 
/*
req > Acessar a requisição, parametros passados via url http://localhost:3333?name=kevin
return res.send('Hello', req.query.name)

res > Acessar a resposta de requisição do navegador
*/

module.exports = routes;