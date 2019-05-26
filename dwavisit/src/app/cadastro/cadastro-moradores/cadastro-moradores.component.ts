import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ParsedEvent } from '@angular/compiler';
import { JsonpCallbackContext } from '@angular/common/http/src/jsonp';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm } from '@angular/forms';
import { MongoService } from 'src/app/services/mongo.service';
import { Morador } from 'src/app/panel/moradores/morador.model';

@Component({
  selector: 'dwa-cadastro-moradores',
  templateUrl: './cadastro-moradores.component.html',
  styleUrls: ['./cadastro-moradores.component.css']
})
export class CadastroMoradoresComponent implements OnInit {
  http: HttpClient;
  FormMorador: FormGroup;

  possuiVeiculo: string;
  optionsVeiculo: string [] = ['Sim', 'Não'];
  morador: Morador = {
    _id: '',
    apartamento: 0,
    bloco: '',
    cpf: 0,
    email: '',
    image: '',
    nome: '',
    possui_veiculo: false,
    placa_veiculo: '',
    modelo_veiculo: '',
    cor_veiculo: '',
    telefone: ''
  };
  // tslint:disable-next-line:no-shadowed-variable
  constructor(private MongoService: MongoService) { }

  ngOnInit() {
  }

  addMorador(morador: Morador) {
    console.log(morador);
    // const hab: Morador = {nome, cpf, bloco, apartamento, telefone, email,
    //   possui_veiculo: (this.possuiVeiculo === 'Não' ? false : true), image};
    // this.MongoService.postMorador(morador).subscribe(
    //   // tslint:disable-next-line:no-shadowed-variable
    //   (morador: Morador) => {
    //     alert('Morador cadastrado com sucesso!');
    //     console.log(morador);
    //   },
    //   (err) => {
    //     alert('Ocorreu um erro ao salvar o Morador!');
    //     console.log(err);
    //   }
    // );
  }

}
