import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComisionService } from '../../services/comision';

@Component({
  selector: 'app-comision',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './comision.html',
  styleUrl: './comision.css'
})

export class Comision implements OnInit {
  texto: string = '';

  constructor (private comisionService: ComisionService) {}

  ngOnInit(): void {
    this.comisionService.getTextoComision().subscribe(data =>{
      this.texto = data.texto_comision;
    });
  }
}
