const Post = require('../models/Post');

module.exports = {
     //cadastra novos likes
    async store(req, res) {
        const post = await Post.findById(req.params.id);
        post.likes ++;

        await post.save();

        req.io.emit('like', post); // emite um alerta para os usuarios da aplicacao

        return res.json(post);
    },
};