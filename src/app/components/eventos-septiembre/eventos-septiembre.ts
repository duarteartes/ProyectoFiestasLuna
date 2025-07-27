import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { EventosService } from '../../services/eventos';

@Component({
  selector: 'app-eventos-septiembre',
  standalone: true,
  imports: [ CommonModule, HttpClientModule ],
  templateUrl: './eventos-septiembre.html',
  styleUrl: './eventos-septiembre.css'
})
export class EventosSeptiembre implements OnInit {
  eventosAgrupados: { [fecha:string]: any[] } = {};
  cargando = true;
  error = false;
  desplegados: { [fecha: string]: boolean } = {};

  Object = Object;

  constructor (private eventosService: EventosService) {}

  ngOnInit(): void {
    this.eventosService.getEventosSeptiembreActual().subscribe({
      next: (eventos) => {
        eventos.forEach(e => {
          const fecha = new Date(e.fecha).toISOString().split('T')[0];
          if (!this.eventosAgrupados[fecha]) {
            this.eventosAgrupados[fecha] = [];
            this.desplegados[fecha] = false;
          }
          this.eventosAgrupados[fecha].push(e);
        });
        for (const fecha in this.eventosAgrupados){
          const eventosDelDia = this.eventosAgrupados[fecha];
          const eventosTemprano = eventosDelDia.filter(ev =>{
            const [hora, minutos, segundos] = ev.hora_inicio.split(':').map(Number);
            return hora >= 0 && hora < 7;
          });
          const eventosNormales = eventosDelDia.filter(ev => {
            const [hora, minutos, segundos] = ev.hora_inicio.split(':').map(Number);
            return hora >= 7 || hora === undefined;
          });
          this.eventosAgrupados[fecha] = [...eventosNormales, ...eventosTemprano];
        }
        this.cargando = false;
      }
    });
  }

  toggle(fecha: string): void {
    this.desplegados[fecha] = !this.desplegados[fecha];
  }

  formatearFecha (fechaStr: string): string {
    const fecha = new Date(fechaStr);
    return `${fecha.getDate()} de ${fecha.toLocaleString('es-ES', {month: 'long'})} ${fecha.getFullYear()}`;
  }
}