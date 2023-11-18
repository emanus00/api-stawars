const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://emanuadm22:i7zTy3EaNC7hE2lf@clusterstarwars.rtxqbk1.mongodb.net/?retryWrites=true&w=majority')
    .then(() => {
        console.log("Conectado ao banco com sucesso");
    })
    .catch((err) => {
        console.log("Houve um erro ao tentar se conectar com o banco de dados " + err);
    });


const filmSchema = new mongoose.Schema({
    title: String,
    description: String,
    image_url: String,
    trailer_url: String
});

const Film = mongoose.model('Film', filmSchema);

module.exports = {
    Film
};






