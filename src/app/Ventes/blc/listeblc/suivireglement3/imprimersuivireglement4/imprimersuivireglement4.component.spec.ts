import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Imprimersuivireglement4Component } from './imprimersuivireglement4.component';

describe('Imprimersuivireglement4Component', () => {
  let component: Imprimersuivireglement4Component;
  let fixture: ComponentFixture<Imprimersuivireglement4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Imprimersuivireglement4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Imprimersuivireglement4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
