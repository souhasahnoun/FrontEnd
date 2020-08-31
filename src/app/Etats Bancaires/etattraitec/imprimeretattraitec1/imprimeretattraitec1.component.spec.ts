import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Imprimeretattraitec1Component } from './imprimeretattraitec1.component';

describe('Imprimeretattraitec1Component', () => {
  let component: Imprimeretattraitec1Component;
  let fixture: ComponentFixture<Imprimeretattraitec1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Imprimeretattraitec1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Imprimeretattraitec1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
