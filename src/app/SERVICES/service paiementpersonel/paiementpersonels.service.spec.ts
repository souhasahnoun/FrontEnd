import { TestBed } from '@angular/core/testing';

import { PaiementpersonelsService } from './paiementpersonels.service';

describe('PaiementpersonelsService', () => {
  let service: PaiementpersonelsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaiementpersonelsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
