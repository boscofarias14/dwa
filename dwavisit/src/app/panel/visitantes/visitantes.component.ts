import { Component, OnInit } from '@angular/core';
import { MongoService } from 'src/app/services/mongo.service';
import { Observable } from 'rxjs';
import { Visitante } from './visitante.model';

@Component({
  selector: 'dwa-visitantes',
  templateUrl: './visitantes.component.html',
  styleUrls: ['./visitantes.component.css']
})
export class VisitantesComponent implements OnInit {

  displayedColumns: string[] = ['name', 'status', 'carro' , 'hora'];
  visitantesReq: Observable<Visitante[]>;

  constructor(private MongoService: MongoService) {
    this.retrieveVisitantes();
  }

  ngOnInit() {
  }
  retrieveVisitantes(){
    this.visitantesReq = this.MongoService.getVisitantes();
  }
}
