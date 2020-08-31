import { TestBed } from '@angular/core/testing';

import { OrdrepaiementsService } from './ordrepaiements.service';

describe('OrdrepaiementsService', () => {
  let service: OrdrepaiementsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrdrepaiementsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
