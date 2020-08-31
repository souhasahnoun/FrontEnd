import { TestBed } from '@angular/core/testing';

import { SouchesService } from './souches.service';

describe('SouchesService', () => {
  let service: SouchesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SouchesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
