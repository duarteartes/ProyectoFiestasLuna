import { TestBed } from '@angular/core/testing';

import { Saludos } from './saludos';

describe('Saludos', () => {
  let service: Saludos;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Saludos);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
