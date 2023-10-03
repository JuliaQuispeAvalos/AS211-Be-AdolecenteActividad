import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@soa/env/environment.development';
import { Funcionary } from '../model/funcionary.model';

@Injectable({
  providedIn: 'root',
})
export class FuncionaryService {
  private url = `${environment.apiUrl}/v1/attorney`;

  constructor(private http: HttpClient) {}

  findAll() {
    return this.http.get<Funcionary[]>(`${this.url}/listI`);
  }

}
