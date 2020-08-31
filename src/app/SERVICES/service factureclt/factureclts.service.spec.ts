import { TestBed } from '@angular/core/testing';

import { FacturecltsService } from './factureclts.service';

describe('FacturecltsService', () => {
  let service: FacturecltsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FacturecltsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
