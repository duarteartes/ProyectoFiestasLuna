import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { ColaboradoresService, Colaborador } from '../../services/colaboradores';

@Component({
  selector: 'app-colaboradores',
  imports: [NgIf, NgFor],
  templateUrl: './colaboradores.html',
  styleUrl: './colaboradores.css'
})

export class Colaboradores implements OnInit, OnDestroy {
  colaboradores: Colaborador[] = [];
  colaboradoresExtendidos: Colaborador[] = [];
  currentIndex = 0;
  autoScrollInterval: any;
  isTransitionEnabled = true;

  @ViewChild('colaboradoresWrapper') colaboradoresWrapper!: ElementRef<HTMLDivElement>;

  constructor (private colaboradoresService: ColaboradoresService) {}

  ngOnInit(): void {
      this.colaboradoresService.getColaboradores().subscribe(data => {
        this.colaboradores = data;
        this.colaboradoresExtendidos = [...this.colaboradores, ...this.colaboradores];
        this.startAutoScroll();
      });
  }

  prev() {
    if (this.currentIndex === 0) {
      this.disableTransition();
      this.currentIndex = this.colaboradores.length;
      void this.colaboradoresWrapper.nativeElement.offsetWidth; // reflow
      this.enableTransition();
    }
    this.currentIndex = Math.max(this.currentIndex - 1, 0);
  }

  next() {
    this.currentIndex++;
    if (this.currentIndex >= this.colaboradores.length) {
      this.disableTransition();
      this.currentIndex = 0;
      void this.colaboradoresWrapper.nativeElement.offsetWidth; // reflow
      this.enableTransition();
    }
  }

  getTransform(): string {
    const offset = this.currentIndex * 190;
    return `translateX(-${offset}px)`;
  }

  getTransition(): string {
    return this.isTransitionEnabled ? 'transform 0.5s ease-in-out' : 'none';
  }

  disableTransition() {
    this.isTransitionEnabled = false;
  }

  enableTransition() {
    this.isTransitionEnabled = true;
  }

  startAutoScroll() {
    this.autoScrollInterval = setInterval(() =>{
      this.next();
    }, 1500);
  }

  ngOnDestroy(): void {
    clearInterval(this.autoScrollInterval);
  }
}