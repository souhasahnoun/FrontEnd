import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Imprimerrsc1Component } from './imprimerrsc1.component';

describe('Imprimerrsc1Component', () => {
  let component: Imprimerrsc1Component;
  let fixture: ComponentFixture<Imprimerrsc1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Imprimerrsc1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Imprimerrsc1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
