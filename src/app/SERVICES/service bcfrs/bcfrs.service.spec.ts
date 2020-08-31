import { TestBed } from '@angular/core/testing';

import { BcfrsService } from './bcfrs.service';

describe('BcfrsService', () => {
  let service: BcfrsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BcfrsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
