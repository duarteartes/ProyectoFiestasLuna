import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class EventosReligiososService {
  private apiUrl = 'http://localhost:3000/api/';

  constructor (private http: HttpClient) {}

  getEventosReligiososSeptiembreActual(): Observable<any[]> {
    const ainoActual = new Date().getFullYear();
    return this.http.get<any[]>(`${this.apiUrl}eventos/monlora/religiosos/anio/${ainoActual}`);
  }
}
