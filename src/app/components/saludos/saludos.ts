import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SaludosService, Saludo } from '../../services/saludos';

@Component({
  selector: 'app-saludos',
  imports: [ CommonModule, HttpClientModule ],
  templateUrl: './saludos.html',
  styleUrl: './saludos.css'
})
export class Saludos implements OnInit {
  saludos: Saludo[] = [];
  cargando = true;
  error = false;
  desplegado: { [id:number]: boolean} = {};

  constructor (private saludosService: SaludosService) {}

  ngOnInit(): void {
    const anioActual = new Date().getFullYear();
    this.saludosService.getSaludosPorAnioYTipo(anioActual, 'monlora').subscribe({
      next: (data) => {
        this.saludos = data;
        data.forEach(s => this.desplegado[s.id] = false);
        this.cargando = false;
      },
      error: (err) => {
        this.error = true;
        this.cargando = false;
      }
    });
  }

  toggle(id: number): void {
    this.desplegado[id] = !this.desplegado[id];
  }
}
