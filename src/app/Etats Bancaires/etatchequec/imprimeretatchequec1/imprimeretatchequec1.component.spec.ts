import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Imprimeretatchequec1Component } from './imprimeretatchequec1.component';

describe('Imprimeretatchequec1Component', () => {
  let component: Imprimeretatchequec1Component;
  let fixture: ComponentFixture<Imprimeretatchequec1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Imprimeretatchequec1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Imprimeretatchequec1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
