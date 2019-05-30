const mongoose = require('mongoose');
const Schmema = mongoose.Schema;

var visitanteSchema = new Schmema({
    nome: String,
    cpf: Number,
    contato: String,
    placa_veiculo: String,
    modelo_veiculo: String,
    cor_veiculo: String
})

module.exports = mongoose.model("Visitante", visitanteSchema);