import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Imprimersuivireglement3Component } from './imprimersuivireglement3.component';

describe('Imprimersuivireglement3Component', () => {
  let component: Imprimersuivireglement3Component;
  let fixture: ComponentFixture<Imprimersuivireglement3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Imprimersuivireglement3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Imprimersuivireglement3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
