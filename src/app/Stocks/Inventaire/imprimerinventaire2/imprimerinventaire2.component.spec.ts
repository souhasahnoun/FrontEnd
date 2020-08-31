import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Imprimerinventaire2Component } from './imprimerinventaire2.component';

describe('Imprimerinventaire2Component', () => {
  let component: Imprimerinventaire2Component;
  let fixture: ComponentFixture<Imprimerinventaire2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Imprimerinventaire2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Imprimerinventaire2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
