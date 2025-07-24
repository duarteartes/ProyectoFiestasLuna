import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiestasSeptiembre } from './fiestas-septiembre';

describe('FiestasSeptiembre', () => {
  let component: FiestasSeptiembre;
  let fixture: ComponentFixture<FiestasSeptiembre>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiestasSeptiembre]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiestasSeptiembre);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
