import { TestBed } from '@angular/core/testing';

import { ReglementcltsService } from './reglementclts.service';

describe('ReglementcltsService', () => {
  let service: ReglementcltsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReglementcltsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
