import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Dama {
  nombre: string;
  imagen_url: string;
}

@Injectable({
  providedIn: 'root'
})

export class DamasService {
  private apiUrl = 'http://localhost:3000/api/damas/monlora/actual';

  constructor (private http: HttpClient) {}

  getDamas(): Observable<Dama[]> {
    return this.http.get<Dama[]>(this.apiUrl);
  }
}
