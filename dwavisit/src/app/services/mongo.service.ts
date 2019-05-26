import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Morador } from '../panel/moradores/morador.model';
import { Visitante } from '../panel/visitantes/visitante.model';

@Injectable({
  providedIn: 'root'
})
export class MongoService {
  retornoDB: any;
  readonly url: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getVisaoGeral(): Observable<Morador>{
    return this.http.get<Morador>(this.url);
  }
  getMoradores(): Observable<Morador[]> {
    return this.http.get<Morador[]>(`${this.url}/moradores`);
  }
  getVisitantes(): Observable<Visitante[]> {
    return this.http.get<Visitante[]>(`${this.url}/visitantes`);
  }
  postMorador(morador: Morador): Observable<Morador> {
    return this.http.post<Morador>(`${this.url}/moradores`, morador);
  }

  patchMorador(morador: Morador): Observable<Morador> {
    return this.http.patch<Morador>(`${this.url}/moradores/${morador._id}`, morador);
  }

  deleteMorador(morador: Morador): Observable<Morador> {
    return this.http.delete<Morador>(`${this.url}/moradores/${morador._id}`);
  }
}
