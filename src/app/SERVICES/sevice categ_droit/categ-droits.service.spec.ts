import { TestBed } from '@angular/core/testing';

import { CategDroitsService } from './categ-droits.service';

describe('CategDroitsService', () => {
  let service: CategDroitsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategDroitsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
