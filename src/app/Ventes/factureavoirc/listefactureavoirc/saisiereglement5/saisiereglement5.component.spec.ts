import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Saisiereglement5Component } from './saisiereglement5.component';

describe('Saisiereglement5Component', () => {
  let component: Saisiereglement5Component;
  let fixture: ComponentFixture<Saisiereglement5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Saisiereglement5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Saisiereglement5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
