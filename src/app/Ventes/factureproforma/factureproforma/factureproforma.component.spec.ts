import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FactureproformaComponent } from './factureproforma.component';

describe('FactureproformaComponent', () => {
  let component: FactureproformaComponent;
  let fixture: ComponentFixture<FactureproformaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FactureproformaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FactureproformaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
