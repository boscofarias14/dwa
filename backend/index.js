const express = require("express");
const body_parser = require('body-parser');
const mongoose = require('mongoose');
const port = 3000;
const app = express();
var MongoClient = require("mongodb").MongoClient;
var cors = require('cors')
const Morador = require('./morador');
const Visitante = require('./visitante');

app.use(body_parser.json());
app.use(body_parser.urlencoded({extended:true}));
app.use(cors());

// mongoose.connect("mongodb://localhost:27017/dwavisit", 
// { useNewUrlParser: true });

mongoose.connect("mongodb+srv://dwaadmin:dwaadmin@clusterdwavisit-znci3.mongodb.net/test?retryWrites=true", 
{ useNewUrlParser: true });

var myLogger = function (req, res, next){ //Middleware - intercepta as requisições/respostas http
    console.log(req.body);
    next();
}
app.use(myLogger);

// http://localhost:3000/
app.get('/', (req, resp) => {
    Morador.find().lean().exec((err, dados) => {
        if(err){
            resp.status(500).send(err);
        }else{
            resp.status(200).send(dados);
        }
    })
})

app.get('/moradores', (req, resp) => {
    Morador.find().lean().exec((err, moradores) => {
        if(err){
            resp.status(500).send(err);
        }else{
            resp.status(200).send(moradores);
        }
    })
})


app.get('/visitantes', (req, resp) => {
    Visitante.find().lean().exec((err, visitantes) => {
        if(err){
            resp.status(500).send(err);
        }else{
            resp.status(200).send(visitantes);
        }
    })
});

app.post('/moradores', (req, resp) => {
    resp.header("Access-Control-Allow-Origin", "*");
    //Criar um morador específico. -> Botão ADICIONAR (morador)
    m = new Morador({
        nome: req.body.nome,
        cpf: req.body.cpf,
        bloco: req.body.bloco,
        apartamento: req.body.apartamento,
        telefone: req.body.telefone,
        email:req.body.email,
        possui_veiculo: req.body.possui_veiculo,         
        placa_veiculo: req.body.placa_veiculo,
        modelo_veiculo: req.body.modelo_veiculo,
        cor_veiculo: req.body.cor_veiculo,
        image: req.body.image,
    });

    m.save((err, mor) =>{
        if(err){
            resp.status(500).send(err);
        }else{
            resp.status(200).send(mor);
        }
    })
})

app.post('/visitantes', (req, resp) =>{
    v = new Visitante({
        nome: req.body.nome,
        cpf: req.body.cpf,
        contato: req.body.contato
    });
    
    v.save((err, vis) =>{
        if(err){
            resp.status(500).send(err);
        }else{
            resp.status(200).send(vis);
        }
    })
})

app.patch('/moradores/:id', (req, resp) => {
    Morador.findById(req.params.id, (err, morador) => {
        if(err){
            resp.status(500).send(err);
        }else if(!morador){
            resp.status(404).send({});
        }else{
            morador.nome= req.body.nome,
            morador.cpf = req.body.cpf,
            morador.bloco = req.body.bloco,
            morador.apartamento = req.body.apartamento,
            morador.telefone = req.body.telefone,
            morador.email =req.body.email,
            morador.possui_veiculo = req.body.possui_veiculo,
            morador.placa_veiculo = req.body.placa_veiculo,
            morador.modelo_veiculo = req.body.modelo_veiculo,
            morador.cor_veiculo = req.body.cor_veiculo, 
            morador.image = req.body.image,
            morador.save((err, morador) => {
                if(err){
                    resp.status(500).send(err);
                }else{
                    resp.status(200).send(morador);
                }
            })
        }
    })
});

app.delete('/moradores/:id', (req, resp) => {
    Morador.deleteOne({_id: req.params.id}, (err) => {
        if(err){
            resp.status(500).send(err);
        }else{
            resp.status(200).send({});
        }
    })
})

app.listen(port, () => console.log("Requisição Realizada"));