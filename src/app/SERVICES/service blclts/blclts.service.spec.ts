import { TestBed } from '@angular/core/testing';

import { BlcltsService } from './blclts.service';

describe('BlcltsService', () => {
  let service: BlcltsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlcltsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
