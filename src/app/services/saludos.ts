import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Saludo {
  id: number;
  autor: string;
  cargo: string;
  mensaje: string;
  categoria: string;
}

@Injectable({
  providedIn: 'root'
})

export class SaludosService {
  private apiUrl = 'http://localhost:3000/api/';

  constructor (private http: HttpClient) {}

  getSaludosPorAnioYTipo (anio: number, tipo: string): Observable<Saludo[]> {
    return this.http.get<Saludo[]>(`${this.apiUrl}saludos/anio/${anio}/tipo/${tipo}`);
  }

  getTodosLosSaludos (): Observable<Saludo[]> {
    return this.http.get<Saludo[]>(`${this.apiUrl}saludos`);
  }

  getSaludosPorFiestaId  (fiestaId: number): Observable<Saludo[]> {
    return this.http.get<Saludo[]>(`${this.apiUrl}saludos/${fiestaId}`);
  }

  crearSaludo (saludo: Partial<Saludo> & {fiesta_id: number}): Observable<any> {
    return this.http.post(`${this.apiUrl}saludos`, saludo);
  }
}
