import { Component, OnInit } from '@angular/core';
import { MongoService } from '../../../services/mongo.service';



@Component({
  selector: 'dwa-lista-visitantes',
  templateUrl: './lista-visitantes.component.html',
  styleUrls: ['./lista-visitantes.component.css']
})
export class ListaVisitantesComponent {
  displayedColumns: string[] = ['name', 'cpf'];
  dataSource: any;
  retornoDB: any;

  constructor(private mongoService: MongoService) {
    this.retrieveVisitantes();
  }

  retrieveVisitantes() {
    this.dataSource = this.mongoService.getVisitantes().subscribe((data) => {
    this.retornoDB = data;
    });
  }
}

