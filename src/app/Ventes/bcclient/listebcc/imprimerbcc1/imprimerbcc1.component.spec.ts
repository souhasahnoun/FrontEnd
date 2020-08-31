import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Imprimerbcc1Component } from './imprimerbcc1.component';

describe('Imprimerbcc1Component', () => {
  let component: Imprimerbcc1Component;
  let fixture: ComponentFixture<Imprimerbcc1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Imprimerbcc1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Imprimerbcc1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
