import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Imprimeretatstock5Component } from './imprimeretatstock5.component';

describe('Imprimeretatstock5Component', () => {
  let component: Imprimeretatstock5Component;
  let fixture: ComponentFixture<Imprimeretatstock5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Imprimeretatstock5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Imprimeretatstock5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
