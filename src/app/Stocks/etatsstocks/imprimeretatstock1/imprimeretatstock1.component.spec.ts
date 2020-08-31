import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Imprimeretatstock1Component } from './imprimeretatstock1.component';

describe('Imprimeretatstock1Component', () => {
  let component: Imprimeretatstock1Component;
  let fixture: ComponentFixture<Imprimeretatstock1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Imprimeretatstock1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Imprimeretatstock1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
