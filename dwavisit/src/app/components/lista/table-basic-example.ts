import {Component} from '@angular/core';
import { MongoService } from 'src/app/services/mongo.service';

@Component({
  selector: 'dwa-table-basic-example',
  styleUrls: ['table-basic-example.css'],
  templateUrl: 'table-basic-example.html',
})
export class TableBasicExampleComponent {
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
