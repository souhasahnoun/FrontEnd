import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Imprimeretatfacturef1Component } from './imprimeretatfacturef1.component';

describe('Imprimeretatfacturef1Component', () => {
  let component: Imprimeretatfacturef1Component;
  let fixture: ComponentFixture<Imprimeretatfacturef1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Imprimeretatfacturef1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Imprimeretatfacturef1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
