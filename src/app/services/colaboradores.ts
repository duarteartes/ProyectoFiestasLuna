import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Colaborador {
  id: number;
  nombre: string;
  logo_url: string;
  web_url?: string;
}

@Injectable({
  providedIn: 'root'
})

export class ColaboradoresService {
  private baseUrl = 'http://localhost:3000/api/colaboradores';

  constructor (private http: HttpClient) {}

  getColaboradores(): Observable<Colaborador[]> {
    return this.http.get<Colaborador[]>(`${this.baseUrl}/monlora/actual`);
  }
}