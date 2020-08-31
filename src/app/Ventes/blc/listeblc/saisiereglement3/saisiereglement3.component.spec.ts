import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Saisiereglement3Component } from './saisiereglement3.component';

describe('Saisiereglement3Component', () => {
  let component: Saisiereglement3Component;
  let fixture: ComponentFixture<Saisiereglement3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Saisiereglement3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Saisiereglement3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
