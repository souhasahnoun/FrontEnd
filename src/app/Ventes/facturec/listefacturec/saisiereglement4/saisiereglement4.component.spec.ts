import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Saisiereglement4Component } from './saisiereglement4.component';

describe('Saisiereglement4Component', () => {
  let component: Saisiereglement4Component;
  let fixture: ComponentFixture<Saisiereglement4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Saisiereglement4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Saisiereglement4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
