import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Imprimersuivireglement2Component } from './imprimersuivireglement2.component';

describe('Imprimersuivireglement2Component', () => {
  let component: Imprimersuivireglement2Component;
  let fixture: ComponentFixture<Imprimersuivireglement2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Imprimersuivireglement2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Imprimersuivireglement2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
