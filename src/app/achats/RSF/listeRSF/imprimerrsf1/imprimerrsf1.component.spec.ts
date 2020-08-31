import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Imprimerrsf1Component } from './imprimerrsf1.component';

describe('Imprimerrsf1Component', () => {
  let component: Imprimerrsf1Component;
  let fixture: ComponentFixture<Imprimerrsf1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Imprimerrsf1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Imprimerrsf1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
