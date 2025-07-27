import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Noticia {
  id: number;
  fiesta_id: number;
  fecha: string;
  mensaje: string;
  fiesta_tipo: string;
  anio: number;
}

@Injectable({
  providedIn: 'root'
})

export class NoticiasService {
  private apiUrl = 'http://localhost:3000/api/noticias/monlora/actual';

  constructor(private http: HttpClient ) {}

  getNoticias(): Observable<Noticia[]> {
    return this.http.get<Noticia[]>(this.apiUrl);
  }
}
