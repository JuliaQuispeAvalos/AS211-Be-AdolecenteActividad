import { Injectable } from '@angular/core';
import {environment} from "@soa/env/environment.development";
import {HttpClient} from "@angular/common/http";
import {Actividades} from "@soa/actividades/pages/models/actividades.model";

@Injectable({
  providedIn: 'root'
})
export class ActividadesService {

  private url = `http://localhost:8081/ms-soa`;
actividadesSelected:Actividades | undefined= undefined;
  constructor(private http: HttpClient) {}

  findAll() {
    return this.http.get(`${this.url}/listData`);
  }
  findInactive(){
    return this.http.get(`${this.url}/listData/inactive`);
  }
  save(actividades:Actividades){
    return this.http.post(`${this.url}/save`,actividades);
  }

  update(actividades: Actividades) {

    return this.http.put(`${this.url}/{id_act}`, actividades);
  }

  delete(id: string) {
    return this.http.delete(`${this.url}/deleteLogical/{id_act}`);
  }
  activate(id: string) {
    return this.http.put(`${this.url}/reactiveLogical/{id_act}`, null);
  }
}
