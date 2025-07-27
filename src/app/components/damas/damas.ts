import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DamasService, Dama } from '../../services/damas';

@Component({
  selector: 'app-damas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './damas.html',
  styleUrl: './damas.css'
})

export class Damas implements OnInit {
  damas: Dama[] = [];

  constructor (private damasService: DamasService) {}

  ngOnInit(): void {
      this.damasService.getDamas().subscribe({
        next: data => this.damas = data,
        error: err => console.error('Error cargando damas: ', err)
      });
  }
}
