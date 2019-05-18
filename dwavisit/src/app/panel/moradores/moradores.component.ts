import { Component, OnInit } from '@angular/core';
import { MongoService } from 'src/app/services/mongo.service';

@Component({
  selector: 'dwa-moradores',
  templateUrl: './moradores.component.html',
  styleUrls: ['./moradores.component.css']
})
export class MoradoresComponent {

  dataSource: any;
  retornoDB: any;

  constructor(private mongoService: MongoService) {
    this.retrieveMoradores();
   }

  retrieveMoradores() {
    this.dataSource = this.mongoService.getMoradores().subscribe((data) => {
    this.retornoDB = data;
    });
  }
}
