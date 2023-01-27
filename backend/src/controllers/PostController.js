const Post = require('../models/Post');
const sharp = require('sharp');
const path =  require('path');
const fs = require('fs');

module.exports = {
    // retorna lista dos post cadastrados
    async index(req, res) {
        const posts = await Post.find().sort('-createdAT');

        return res.json(posts);
    }, 

    //cadastra novos posts
    async store(req, res) {
        // console.log(req.body); requisicao do corpo do post
        // console.log(req.file); requisicao da imagem

        const {author, place, description, hashtags} = req.body;
        const {filename: image} = req.file;

        const {name} = image.split('.');
        const filename = `${name}.jpg`;

        await sharp(req.file.path) // realiza o redimencionamento e manda para o resized
        .resize(500)
        .jpeg({quality: 70})
        .toFile(
            path.resolve(req.file.destination, 'resized', filename)
        )

        fs.unlinkSync(req.file.path); // deleta o arquivo salvo em downloads

        const post = await Post.create({
            author,
            place,
            description,
            hashtags,
            image: filename,
        })

        req.io.emit('post', post); // emite um alerta para os usuarios da aplicacao
        return res.json(post);
    }
};