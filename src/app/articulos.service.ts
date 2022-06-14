import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Characters } from './models/characters.model';

@Injectable({
  providedIn: 'root',
})
export class ArticulosService {
  baseUrl: string = 'http://localhost:3000/characters';

  constructor(private http: HttpClient) {}

  //getAll
  getAll(): Observable<Characters[]> {
    return this.http.get<Characters[]>(this.baseUrl);
  }
  //c
  create(data: any): Observable<any> {
    return this.http.post(this.baseUrl, data);
  }
  //r
  get(id: any): Observable<Characters> {
    return this.http.get('${this.baseUrl}/${id}');
  }
  //u
  update(id: any, data: any): Observable<any> {
    return this.http.put('${this.baseUrl}/${id}', data);
  }
  //d
  delete(id: any, data: any): Observable<any> {
    return this.http.delete('${this.baseUrl}/${id}');
  }

  //d all
  deleteAll(): Observable<any> {
    return this.http.delete(this.baseUrl);
  }
  //search findByName
  findByName(name: any): Observable<Characters[]> {
    return this.http.get<Characters[]>('${this.baseUrl}?title=${title}');
  }
}
