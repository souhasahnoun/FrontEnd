import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Imprimerblc1Component } from './imprimerblc1.component';

describe('Imprimerblc1Component', () => {
  let component: Imprimerblc1Component;
  let fixture: ComponentFixture<Imprimerblc1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Imprimerblc1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Imprimerblc1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
