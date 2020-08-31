import { TestBed } from '@angular/core/testing';

import { RsfsService } from './rsfs.service';

describe('RsfsService', () => {
  let service: RsfsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RsfsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
