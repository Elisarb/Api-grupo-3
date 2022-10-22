const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ModeloSchema = new Schema({
    name: {type: String, required: true},
    almacenamiento: {type: String, required: true},
    photo: {type: String, required: false}
});

const Modelo = mongoose.model('model', ModeloSchema);

module.exports = Modelo;

/*"name": "Iphone 5s",
"almacenamiento" : "64 GB",
"photo": "https://http2.mlstatic.com/celulares-apple-iphone-5s-16gb-libre-original-fabrica-4glte-D_NQ_NP_785221-MLM20734257572_052016-F.jpg"*/