import {Component} from '@angular/core';
import { MongoService } from 'src/app/services/mongo.service';

@Component({
  selector: 'dwa-lista-moradores',
  styleUrls: ['lista-moradores.component.css'],
  templateUrl: 'lista-moradores.component.html',
})

export class ListaMoradoresComponent {
  displayedColumns: string[] = ['name', 'cpf'];
  retornoDB: any;
  dataSource: any;

  constructor(private mongoService: MongoService) {
    this.retrieveMoradores();
  }

  retrieveMoradores() {
    this.dataSource = this.mongoService.getVisaoGeral().subscribe((data) => {
      this.retornoDB = data;
    });
  }
}
