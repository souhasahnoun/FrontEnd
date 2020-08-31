import { TestBed } from '@angular/core/testing';

import { EntreecaissesService } from './entreecaisses.service';

describe('EntreecaissesService', () => {
  let service: EntreecaissesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EntreecaissesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
