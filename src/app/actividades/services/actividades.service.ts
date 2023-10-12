import { Injectable } from '@angular/core';
import {environment} from "@soa/env/environment.development";
import {HttpClient} from "@angular/common/http";
import {Adolescente} from "@soa/teenager/pages/models/adolescente.model";

@Injectable({
  providedIn: 'root'
})
export class ActividadesService {

  private url = ``;
adolescenteSelected:Adolescente | undefined= undefined;
  constructor(private http: HttpClient) {}

  findAll() {
    return this.http.get(`${this.url}/list`);
  }
  findInactive(){
    return this.http.get(`${this.url}/listI`);
  }
  save(adolescente:Adolescente){
    return this.http.post(`${this.url}/save`,adolescente);
  }

  update(adolescente: Adolescente) {

    return this.http.put(`${this.url}/update/${adolescente.id}`, adolescente);
  }

  delete(id: string) {
    return this.http.delete(`${this.url}/delete/${id}`);
  }
  activate(id: string) {
    return this.http.put(`${this.url}/activate/${id}`, null);
  }
}
