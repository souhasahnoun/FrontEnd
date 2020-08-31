import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Caisse1Component } from './caisse1.component';

describe('Caisse1Component', () => {
  let component: Caisse1Component;
  let fixture: ComponentFixture<Caisse1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Caisse1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Caisse1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
