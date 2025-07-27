import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Damas } from './damas';

describe('Damas', () => {
  let component: Damas;
  let fixture: ComponentFixture<Damas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Damas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Damas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
