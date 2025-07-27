import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiasMonlora } from './noticias-monlora';

describe('NoticiasMonlora', () => {
  let component: NoticiasMonlora;
  let fixture: ComponentFixture<NoticiasMonlora>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoticiasMonlora]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoticiasMonlora);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
