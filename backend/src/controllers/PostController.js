const Post = require('../models/Post');

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

        const post = await Post.create({
            author,
            place,
            description,
            hashtags,
            image,
        })
        return res.json(post);
    }
};