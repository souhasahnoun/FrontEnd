import { TestBed } from '@angular/core/testing';

import { CaissesService } from './caisses.service';

describe('CasissesService', () => {
  let service: CaissesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CaissesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
