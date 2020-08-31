import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Imprimerfacturec1Component } from './imprimerfacturec1.component';

describe('Imprimerfacturec1Component', () => {
  let component: Imprimerfacturec1Component;
  let fixture: ComponentFixture<Imprimerfacturec1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Imprimerfacturec1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Imprimerfacturec1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
