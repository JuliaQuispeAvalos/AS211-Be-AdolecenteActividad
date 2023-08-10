import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AttorneyService {

  private apiUrl = 'http://localhost:8086/v1/attorney';

  constructor(private http: HttpClient) { }

  getAttorneyList() {
    return this.http.get<any[]>(`${this.apiUrl}/list`);
  }

  saveAttorney(attorney: any) {
    return this.http.post(`${this.apiUrl}/save`, attorney);
  }

  getAttorneyById(id: string): Observable<any> {
    const url = `${this.apiUrl}/update/${id}`;
    return this.http.get(url);
  }


  updateAttorney(id: string, updatedAttorney: any): Observable<any> {
    const url = `${this.apiUrl}/update/${id}`; 
    return this.http.put(url, updatedAttorney);
  }
  
  deleteAttorney(id: number): Observable<any> {
    const url = `http://localhost:8086/v1/attorney/delete/${id}`;
    return this.http.delete(url);
  }

  getInactiveAttorneyList(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/listI`);
  }
  
}
