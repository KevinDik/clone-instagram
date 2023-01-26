const Post = require('../models/Post');

module.exports = {
    // retorna lista dos post cadastrados
    async index(req, res) {

    }, 

    //cadastra novos posts
    async store(req, res) {
        console.log(req.body); // requisicao do corpo do post
        console.log(req.file); //requisicao da imagem
        return res.json({ok: true});
    }
};