import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Imprimerinventaire1Component } from './imprimerinventaire1.component';

describe('Imprimerinventaire1Component', () => {
  let component: Imprimerinventaire1Component;
  let fixture: ComponentFixture<Imprimerinventaire1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Imprimerinventaire1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Imprimerinventaire1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
