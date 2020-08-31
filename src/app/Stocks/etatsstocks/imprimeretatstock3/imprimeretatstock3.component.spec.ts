import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Imprimeretatstock3Component } from './imprimeretatstock3.component';

describe('Imprimeretatstock3Component', () => {
  let component: Imprimeretatstock3Component;
  let fixture: ComponentFixture<Imprimeretatstock3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Imprimeretatstock3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Imprimeretatstock3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
