import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Comision } from './comision';

describe('Comision', () => {
  let component: Comision;
  let fixture: ComponentFixture<Comision>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Comision]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Comision);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
