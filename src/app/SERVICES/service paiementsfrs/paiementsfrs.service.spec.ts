import { TestBed } from '@angular/core/testing';

import { PaiementsfrsService } from './paiementsfrs.service';

describe('PaiementsfrsService', () => {
  let service: PaiementsfrsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaiementsfrsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
