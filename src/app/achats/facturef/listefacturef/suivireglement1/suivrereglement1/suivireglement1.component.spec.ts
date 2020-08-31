import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Suivireglement1Component } from './suivireglement1.component';

describe('Suivireglement1Component', () => {
  let component: Suivireglement1Component;
  let fixture: ComponentFixture<Suivireglement1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Suivireglement1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Suivireglement1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
