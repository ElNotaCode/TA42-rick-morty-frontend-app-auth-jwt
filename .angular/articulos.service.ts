import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ArticulosService {
  constructor(private http: HttpClient) {}

  retornar() {
    this.http.get('https://rickandmortyapi.com/api/character/1,2,3,4,5');
  }
}
