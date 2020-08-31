import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Imprimeretatfacturec1Component } from './imprimeretatfacturec1.component';

describe('Imprimeretatfacturec1Component', () => {
  let component: Imprimeretatfacturec1Component;
  let fixture: ComponentFixture<Imprimeretatfacturec1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Imprimeretatfacturec1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Imprimeretatfacturec1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
