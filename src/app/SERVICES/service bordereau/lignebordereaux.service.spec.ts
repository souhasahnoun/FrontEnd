import { TestBed } from '@angular/core/testing';

import { LignebordereauxService } from './lignebordereaux.service';

describe('BordereauxService', () => {
  let service: LignebordereauxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LignebordereauxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
