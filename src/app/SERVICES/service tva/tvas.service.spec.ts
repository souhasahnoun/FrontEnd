import { TestBed } from '@angular/core/testing';

import { TvasService } from './tvas.service';

describe('TvasService', () => {
  let service: TvasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TvasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
