import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Imprimerfacturef1Component } from './imprimerfacturef1.component';

describe('Imprimerfacturef1Component', () => {
  let component: Imprimerfacturef1Component;
  let fixture: ComponentFixture<Imprimerfacturef1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Imprimerfacturef1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Imprimerfacturef1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
