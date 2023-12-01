import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Adolescente} from "../models/adolescente.model";

@Injectable({
  providedIn: 'root'
})
export class AdolescenteService {

  private url = `http://localhost:8080/ms-soa`;
adolescenteSelected:Adolescente | undefined= undefined;
  constructor(private http: HttpClient) {}

  findAll() {
    return this.http.get(`${this.url}/listData/active`);
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
