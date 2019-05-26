const mongoose = require('mongoose');
const Schmema = mongoose.Schema;

var visitanteSchema = new Schmema({
    nome: String,
    cpf: Number,
    contato: String
})

module.exports = mongoose.model("Visitante", visitanteSchema);