const mongoose = require('mongoose');
const Morador = require('./morador');
const Visitante = require('./visitante');
const Faker = require('faker');
Faker.locale = "pt_BR";

mongoose.connect("mongodb+srv://dwaadmin:dwaadmin@clusterdwavisit-znci3.mongodb.net/test?retryWrites=true",
{useNewUrlParser: true});

async function generateVisitantes(){
    for(let i=0; i<10; i++){
        let v = new Visitante({
            nome: Faker.name.findName(),
            cpf: Faker.random.number(10000000000, 99999999999),
            contato: Faker.phone.phoneNumber() 
        })
        try{
            await v.save()
        }catch(e){
            throw new Error("Ocorreu um erro ao gerar os Visitantes");
        }
    }
}

async function generateMoradores(){
    for(let i=0; i<10; i++){
        let m = new Morador({
            nome: Faker.name.findName(),
            cpf: Faker.random.number(10000000000, 99999999999),
            bloco: Faker.random.number(1,20),
            apartamento: Faker.random.number(1, 500),
            telefone: Faker.phone.phoneNumber(),
            email: Faker.internet.email(),
            possui_veiculo: Faker.random.boolean(),
            image: Faker.internet.avatar()
        })
        try{
            await m.save()
        }catch(e){
            throw new Error("Ocorreu um erro ao gerar os moradores");
        }
    }
}

// generateVisitantes()
//     .then(() => {
//         mongoose.disconnect();
//         console.log("Ok");
// })

generateMoradores()
    .then(() =>{
        mongoose.disconnect();
        console.log("Ok");
    })