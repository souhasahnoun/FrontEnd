import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Imprimersuivireglement5Component } from './imprimersuivireglement5.component';

describe('Imprimersuivireglement5Component', () => {
  let component: Imprimersuivireglement5Component;
  let fixture: ComponentFixture<Imprimersuivireglement5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Imprimersuivireglement5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Imprimersuivireglement5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
