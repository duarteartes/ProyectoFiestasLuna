import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { EventosReligiososService } from '../../services/eventos-religiosos';

@Component({
  selector: 'app-religiosos-septiembre',
  standalone: true,
  imports: [CommonModule, HttpClientModule ],
  templateUrl: './religiosos-septiembre.html',
  styleUrl: './religiosos-septiembre.css'
})

export class ReligiososSeptiembre implements OnInit {
  eventos: any[] = [];
  eventosPorDia: any[] = [];
  cargando = true;
  error = false;
  desplegado = false;

  constructor (private eventosReligiososService: EventosReligiososService) {}

  ngOnInit(): void {
    this.eventosReligiososService.getEventosReligiososSeptiembreActual().subscribe({
      next: (eventos) => {
        this.eventos = eventos;
        this.agruparEventosPorDia();
        this.cargando = false;
      },
      error: () => {
        this.error = true;
        this.cargando = false;
      }
    });
  }

  agruparEventosPorDia(): void {
    const map = new Map<string, any[]>();

    for (const evento of this.eventos) {
      const fechaKey = evento.fecha.slice(0, 10);
      if (!map.has(fechaKey)) {
        map.set(fechaKey, []);
      }
      map.get(fechaKey)!.push(evento);
    }

    this.eventosPorDia = Array.from(map.entries())
      .map(([fecha, eventos]) => ({
        fecha,
        eventos: eventos.sort((a, b) => a.hora_inicio.localeCompare(b.hora_inicio))
      }))
      .sort((a, b) => a.fecha.localeCompare(b.fecha));
  }

  toggle(): void {
    this.desplegado = !this.desplegado;
  }

  formatearFecha(fecha: string): string {
    const fechaObj = new Date(fecha);
    const dia = fechaObj.getDate();
    const mes = fechaObj.toLocaleString('es-ES', { month: 'long' });
    return `${dia} de ${mes}`;
  }

  formatearHora(hora: string): string {
    return hora?.substring(0, 5) || '';
  }
}
