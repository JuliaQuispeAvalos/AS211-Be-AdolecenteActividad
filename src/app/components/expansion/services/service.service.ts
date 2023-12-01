import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Transaccional} from "../models/transaccional.model";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private url = `http://localhost:8086/api/transaccionalData`;
  transaccionalSelected:Transaccional | undefined= undefined;
  constructor(private http: HttpClient) {}

  findAll() {
    return this.http.get(`${this.url}/listData/active`);
  }
  findInactive(){
    return this.http.get(`${this.url}/listI`);
  }
  save(transaccional:Transaccional){
    return this.http.post(`${this.url}/savet`,transaccional);
  }

  update(transaccional:Transaccional) {

    return this.http.put(`${this.url}/update/${transaccional.id_act_teen}`, transaccional);
  }

  delete(id: string) {
    return this.http.delete(`${this.url}/delete/${id}`);
  }
  activate(id: string) {
    return this.http.put(`${this.url}/activate/${id}`, null);
  }
}
