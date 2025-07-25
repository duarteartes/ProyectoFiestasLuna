import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventosSeptiembre } from './eventos-septiembre';

describe('EventosSeptiembre', () => {
  let component: EventosSeptiembre;
  let fixture: ComponentFixture<EventosSeptiembre>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventosSeptiembre]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventosSeptiembre);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
