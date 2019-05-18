import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MongoService {
  retornoDB: any;
  constructor(private http: HttpClient) { }

  getVisaoGeral() {
    return this.http.get('http://localhost:3000/');
  }
  getMoradores() {
    return this.http.get('http://localhost:3000/moradores');
  }
  getVisitantes() {
    return this.http.get('http://localhost:3000/visitantes');
  }
  postMorador(morador: any){
    return this.http.post('http://localhos:3000/cadastro-morador', morador);
  }
}
