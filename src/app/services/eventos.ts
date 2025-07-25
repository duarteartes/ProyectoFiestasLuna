import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class EventosService {
  private apiUrl = 'http://localhost:3000/api/';

  constructor (private http: HttpClient) {}

  getEventosSeptiembreActual(): Observable<any[]> {
    const anioActual = new Date().getFullYear();
    return this.http.get<any[]>(`${this.apiUrl}eventos/monlora/anio/${anioActual}`);
  }
}
