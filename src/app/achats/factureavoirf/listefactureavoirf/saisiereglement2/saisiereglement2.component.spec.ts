import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Saisiereglement2Component } from './saisiereglement2.component';

describe('Saisiereglement2Component', () => {
  let component: Saisiereglement2Component;
  let fixture: ComponentFixture<Saisiereglement2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Saisiereglement2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Saisiereglement2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
