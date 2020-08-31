import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Imprimermvstock1Component } from './imprimermvstock1.component';

describe('Imprimermvstock1Component', () => {
  let component: Imprimermvstock1Component;
  let fixture: ComponentFixture<Imprimermvstock1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Imprimermvstock1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Imprimermvstock1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
