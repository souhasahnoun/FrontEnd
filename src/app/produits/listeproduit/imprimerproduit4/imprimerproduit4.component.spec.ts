import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Imprimerproduit4Component } from './imprimerproduit4.component';

describe('Imprimerproduit4Component', () => {
  let component: Imprimerproduit4Component;
  let fixture: ComponentFixture<Imprimerproduit4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Imprimerproduit4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Imprimerproduit4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
