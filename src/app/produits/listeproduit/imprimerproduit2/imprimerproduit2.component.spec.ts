import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Imprimerproduit2Component } from './imprimerproduit2.component';

describe('Imprimerproduit2Component', () => {
  let component: Imprimerproduit2Component;
  let fixture: ComponentFixture<Imprimerproduit2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Imprimerproduit2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Imprimerproduit2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
