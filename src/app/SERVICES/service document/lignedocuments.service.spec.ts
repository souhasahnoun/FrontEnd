import { TestBed } from '@angular/core/testing';

import { LignedocumentsService } from './lignedocuments.service';

describe('LignedocumentsService', () => {
  let service: LignedocumentsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LignedocumentsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
