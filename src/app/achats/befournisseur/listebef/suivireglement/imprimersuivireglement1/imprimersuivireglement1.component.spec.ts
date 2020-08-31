import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Imprimersuivireglement1Component } from './imprimersuivireglement1.component';

describe('Imprimersuivireglement1Component', () => {
  let component: Imprimersuivireglement1Component;
  let fixture: ComponentFixture<Imprimersuivireglement1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Imprimersuivireglement1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Imprimersuivireglement1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
