import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoticiasService, Noticia } from '../../services/noticias';

@Component({
  selector: 'app-noticias-monlora',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './noticias-monlora.html',
  styleUrl: './noticias-monlora.css'
})

export class NoticiasMonlora implements OnInit {
  noticias: Noticia[] = [];
  indiceActual: number = 0;

  constructor (private noticiasService: NoticiasService) {}

  ngOnInit(): void {
    this.noticiasService.getNoticias().subscribe(data =>{
      this.noticias = data;
    });
  }

  anterior(): void {
    if (this.noticias.length === 0 ) return;
    this.indiceActual = (this.indiceActual -1 + this.noticias.length) % this.noticias.length;
  }

  siguiente(): void {
    if (this.noticias.length === 0) return;
    this.indiceActual = (this.indiceActual + 1) % this.noticias.length;
  }

  formatearFecha(fechaStr: string): string {
    const fecha = new Date(fechaStr);
    return fecha.toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' });
  }
}
