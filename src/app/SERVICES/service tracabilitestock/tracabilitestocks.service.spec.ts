import { TestBed } from '@angular/core/testing';

import { TracabilitestocksService } from './tracabilitestocks.service';

describe('TracabilitestocksService', () => {
  let service: TracabilitestocksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TracabilitestocksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
