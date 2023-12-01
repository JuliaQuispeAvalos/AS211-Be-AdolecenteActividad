import { Injectable } from '@angular/core';
import {Actividades} from "../models/actividades.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ActividadesService {


  private url = `http://localhost:8081/ms-soa`;
  actividadesSelected:Actividades | undefined= undefined;
  constructor(private http: HttpClient) {}

  findAll() {
    return this.http.get(`${this.url}/listData/active`);
  }
  findInactive(){
    return this.http.get(`${this.url}/listData/inactive`);
  }
  save(actividades:Actividades){
    return this.http.post(`${this.url}/save`,actividades);
  }

  update(actividades: Actividades) {

    return this.http.put(`${this.url}/update/${actividades.id}`, actividades);
  }

  delete(id: string) {
    return this.http.put(`${this.url}/deleteLogical/${id}`,null);
  }
  activate(id: string) {
    return this.http.put(`${this.url}/reactiveLogical/${id}`, null);
  }
}
