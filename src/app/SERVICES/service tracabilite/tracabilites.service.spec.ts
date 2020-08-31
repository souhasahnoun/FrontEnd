import { TestBed } from '@angular/core/testing';

import { TracabilitesService } from './tracabilites.service';

describe('TracabilitesService', () => {
  let service: TracabilitesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TracabilitesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
