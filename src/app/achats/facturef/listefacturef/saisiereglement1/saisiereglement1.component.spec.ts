import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Saisiereglement1Component } from './saisiereglement1.component';

describe('Saisiereglement1Component', () => {
  let component: Saisiereglement1Component;
  let fixture: ComponentFixture<Saisiereglement1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Saisiereglement1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Saisiereglement1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
