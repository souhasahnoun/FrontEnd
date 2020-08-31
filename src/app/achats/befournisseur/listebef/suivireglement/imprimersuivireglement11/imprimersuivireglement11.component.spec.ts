import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Imprimersuivireglement11Component } from './imprimersuivireglement11.component';

describe('Imprimersuivireglement11Component', () => {
  let component: Imprimersuivireglement11Component;
  let fixture: ComponentFixture<Imprimersuivireglement11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Imprimersuivireglement11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Imprimersuivireglement11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
