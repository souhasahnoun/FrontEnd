import { TestBed } from '@angular/core/testing';

import { LigneticketsService } from './lignetickets.service';

describe('LigneticketsService', () => {
  let service: LigneticketsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LigneticketsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
