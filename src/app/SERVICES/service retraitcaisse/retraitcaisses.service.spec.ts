import { TestBed } from '@angular/core/testing';

import { RetraitcaissesService } from './retraitcaisses.service';

describe('RetraitcaissesService', () => {
  let service: RetraitcaissesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RetraitcaissesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
