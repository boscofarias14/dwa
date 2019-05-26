const mongoose = require('mongoose');
const Schmema = mongoose.Schema;

var moradorSchema = new Schmema({
    nome: String,
    cpf: Number,
    bloco: Number,
    apartamento: Number,
    telefone: String,
    email: String,
    possui_veiculo: Boolean,
    placa_veiculo: String,
    modelo_veiculo: String,
    cor_veiculo: String,
    image: String
})

module.exports = mongoose.model("Moradore", moradorSchema);