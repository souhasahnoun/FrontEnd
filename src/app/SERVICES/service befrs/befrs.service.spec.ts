import { TestBed } from '@angular/core/testing';

import { BefrsService } from './befrs.service';

describe('BefrsService', () => {
  let service: BefrsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BefrsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
