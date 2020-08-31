import { TestBed } from '@angular/core/testing';

import { BccltsService } from './bcclts.service';

describe('BccltsService', () => {
  let service: BccltsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BccltsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
