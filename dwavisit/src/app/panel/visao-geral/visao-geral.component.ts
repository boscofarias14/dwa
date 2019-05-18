import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MongoService } from 'src/app/services/mongo.service';

@Component({
  selector: 'dwa-visao-geral',
  templateUrl: './visao-geral.component.html',
  styleUrls: ['./visao-geral.component.css']
})
export class VisaoGeralComponent implements OnInit {

  retornoDB: any;

  constructor() {}

  ngOnInit() {}

  // }
}
