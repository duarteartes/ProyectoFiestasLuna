import { TestBed } from '@angular/core/testing';

import { EventosReligiosos } from './eventos-religiosos';

describe('EventosReligiosos', () => {
  let service: EventosReligiosos;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventosReligiosos);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
