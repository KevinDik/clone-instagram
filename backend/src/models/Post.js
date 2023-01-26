const mongoose = require('mongoose');


/*Cria um moongose passando as colunas onde likes é um objeto que passa o tipo e o valor padrao*/
const PostSchema = new mongoose.Schema({
    author: String,
    place: String,
    description: String,
    hastags: String,
    image: String,
    likes: {
        type: Number,
        default: 0,
    }
}, {
    timestamps: true,
});

module.exports = mongoose.model('Post', PostSchema) // exportar o model