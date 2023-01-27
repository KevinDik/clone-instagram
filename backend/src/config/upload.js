const multer = require('multer');
const path = require('path');

module.exports = {
    //destination e a localizacao de onde sera salvo a imagem | filename o tipo 
    storage: new multer.diskStorage({
        destination: path.resolve(__dirname, '..', '..', 'uploads'),
        filename: function(req, file, cb) {
            cb(null, file.originalname); // pega nome padrao da imagem
        }
    })
};