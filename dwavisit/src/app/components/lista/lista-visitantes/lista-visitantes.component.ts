import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  cpf: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'Caio', cpf: '123.456.789-10'},
  {name: 'Edwin', cpf: '333.333.333-22'},
  {name: 'Luiz Mario', cpf: '555.555.666-78'},
  {name: 'Reginaldo', cpf: '444.444.444-88'}
];

@Component({
  selector: 'dwa-lista-visitantes',
  templateUrl: './lista-visitantes.component.html',
  styleUrls: ['./lista-visitantes.component.css']
})

export class ListaVisitantesComponent {
  displayedColumns: string[] = ['name', 'cpf'];
  dataSource = ELEMENT_DATA;
}
