import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReligiososSeptiembre } from './religiosos-septiembre';

describe('ReligiososSeptiembre', () => {
  let component: ReligiososSeptiembre;
  let fixture: ComponentFixture<ReligiososSeptiembre>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReligiososSeptiembre]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReligiososSeptiembre);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
