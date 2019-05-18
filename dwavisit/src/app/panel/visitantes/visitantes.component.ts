import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dwa-visitantes',
  templateUrl: './visitantes.component.html',
  styleUrls: ['./visitantes.component.css']
})
export class VisitantesComponent implements OnInit {
  displayedColumns: string[] = ['name', 'status', 'carro' , 'hora'];
  dataSource = dataVisitantes;
  constructor() { }

  ngOnInit() {
  }

}


export interface VisitantesData {
  name: string;
  status: string;
  id: string;
  hora: string;
}

const dataVisitantes: VisitantesData[] = [
  {name: 'Kido', status: 'aguardando', id: 'cdz-1994' , hora: 'aguardando'},
  {name: 'Athena', status: 'chegou', id: 'kof-1998', hora: '02-08 / 19:30'},
  {name: 'Athena', status: 'chegou', id: 'kof-1998', hora: '04-08 / 15:30' },
  {name: 'Amuro', status: 'chegou', id: '261.198.000-79', hora: '04-08 / 15:30' },
  {name: 'Roll', status: 'chegou', id: 'cap-1996', hora: '04-08 / 15:30' },
  {name: 'Vega', status: 'chegou', id: 'stf-1992', hora: '04-08 / 15:30' },
  {name: 'Blazzer', status: 'chegou', id: 'sor-1991',  hora: '02-08 / 20:30'}
  
  
];
