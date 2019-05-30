import { Component, OnInit } from '@angular/core';
import { Visitante } from 'src/app/panel/visitantes/visitante.model';
import { MongoService } from 'src/app/services/mongo.service';

@Component({
  selector: 'dwa-cadastro-visitantes',
  templateUrl: './cadastro-visitantes.component.html',
  styleUrls: ['./cadastro-visitantes.component.css']
})
export class CadastroVisitantesComponent implements OnInit {

  visitante: Visitante = {
    _id: '',
    contato: null,
    nome: '',
    cpf: null,
    placa_veiculo: '',
    cor_veiculo: '',
    modelo_veiculo: ''
  }

  constructor(private mongoService: MongoService) { }

  ngOnInit() {
  }

  addVisitante(visitante: Visitante){
    this.mongoService.addVisitante(visitante).subscribe(
      (visit: Visitante) => {
        console.log(visit)
        alert('Visitante cadastrado com sucesso');
    },
      (err) => {
        console.log(err);
      }
    )
  }

}
