import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Imprimeretatstock4Component } from './imprimeretatstock4.component';

describe('Imprimeretatstock4Component', () => {
  let component: Imprimeretatstock4Component;
  let fixture: ComponentFixture<Imprimeretatstock4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Imprimeretatstock4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Imprimeretatstock4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
