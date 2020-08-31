import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Imprimerbef1Component } from './imprimerbef1.component';

describe('Imprimerbef1Component', () => {
  let component: Imprimerbef1Component;
  let fixture: ComponentFixture<Imprimerbef1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Imprimerbef1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Imprimerbef1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
