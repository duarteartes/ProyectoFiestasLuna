import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiestasMayo } from './fiestas-mayo';

describe('FiestasMayo', () => {
  let component: FiestasMayo;
  let fixture: ComponentFixture<FiestasMayo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiestasMayo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiestasMayo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
