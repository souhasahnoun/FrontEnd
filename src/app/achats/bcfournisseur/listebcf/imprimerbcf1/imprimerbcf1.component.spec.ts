import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Imprimerbcf1Component } from './imprimerbcf1.component';

describe('Imprimerbcf1Component', () => {
  let component: Imprimerbcf1Component;
  let fixture: ComponentFixture<Imprimerbcf1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Imprimerbcf1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Imprimerbcf1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
