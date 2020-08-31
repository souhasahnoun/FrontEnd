import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Imprimersuivireglement6Component } from './imprimersuivireglement6.component';

describe('Imprimersuivireglement6Component', () => {
  let component: Imprimersuivireglement6Component;
  let fixture: ComponentFixture<Imprimersuivireglement6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Imprimersuivireglement6Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Imprimersuivireglement6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
