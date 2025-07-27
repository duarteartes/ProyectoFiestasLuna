import { TestBed } from '@angular/core/testing';

import { Damas } from './damas';

describe('Damas', () => {
  let service: Damas;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Damas);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
