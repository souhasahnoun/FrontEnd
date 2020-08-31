import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Imprimerproduit3Component } from './imprimerproduit3.component';

describe('Imprimerproduit3Component', () => {
  let component: Imprimerproduit3Component;
  let fixture: ComponentFixture<Imprimerproduit3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Imprimerproduit3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Imprimerproduit3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
