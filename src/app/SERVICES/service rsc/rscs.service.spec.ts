import { TestBed } from '@angular/core/testing';

import { RscsService } from './rscs.service';

describe('RscsService', () => {
  let service: RscsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RscsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
