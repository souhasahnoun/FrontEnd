import { TestBed } from '@angular/core/testing';

import { GarentiesService } from './garenties.service';

describe('GarentiesService', () => {
  let service: GarentiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GarentiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
