import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Imprimerentreecaisse1Component } from './imprimerentreecaisse1.component';

describe('Imprimerentreecaisse1Component', () => {
  let component: Imprimerentreecaisse1Component;
  let fixture: ComponentFixture<Imprimerentreecaisse1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Imprimerentreecaisse1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Imprimerentreecaisse1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
