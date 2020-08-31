import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Imprimeretatstock2Component } from './imprimeretatstock2.component';

describe('Imprimeretatstock2Component', () => {
  let component: Imprimeretatstock2Component;
  let fixture: ComponentFixture<Imprimeretatstock2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Imprimeretatstock2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Imprimeretatstock2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
