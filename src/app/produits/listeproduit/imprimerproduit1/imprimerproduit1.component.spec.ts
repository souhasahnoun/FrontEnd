import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Imprimerproduit1Component } from './imprimerproduit1.component';

describe('Imprimerproduit1Component', () => {
  let component: Imprimerproduit1Component;
  let fixture: ComponentFixture<Imprimerproduit1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Imprimerproduit1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Imprimerproduit1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
