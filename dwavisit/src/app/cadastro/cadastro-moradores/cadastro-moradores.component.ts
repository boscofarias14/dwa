import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ParsedEvent } from '@angular/compiler';
import { JsonpCallbackContext } from '@angular/common/http/src/jsonp';

@Component({
  selector: 'dwa-cadastro-moradores',
  templateUrl: './cadastro-moradores.component.html',
  styleUrls: ['./cadastro-moradores.component.css']
})
export class CadastroMoradoresComponent implements OnInit {
  http: HttpClient;
  foto: any;
  constructor() { }

  ngOnInit() {
  }

  // TestaAPI() {
  //   const data = this.http.get('http://countryapi.gear.host/v1/Country/getCountries').subscribe(dado => {
  //   this.foto = dado;
  //   console.log(this.foto);
  // });


}
