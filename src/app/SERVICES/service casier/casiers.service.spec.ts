import { TestBed } from '@angular/core/testing';

import { CasiersService } from './casiers.service';

describe('CasiersService', () => {
  let service: CasiersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CasiersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
