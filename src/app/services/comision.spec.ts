import { TestBed } from '@angular/core/testing';

import { Comision } from './comision';

describe('Comision', () => {
  let service: Comision;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Comision);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
