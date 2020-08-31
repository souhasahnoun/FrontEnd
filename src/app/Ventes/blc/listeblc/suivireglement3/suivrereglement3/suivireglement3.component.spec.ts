import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Suivireglement3Component } from './suivireglement3.component';

describe('Suivireglement3Component', () => {
  let component: Suivireglement3Component;
  let fixture: ComponentFixture<Suivireglement3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Suivireglement3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Suivireglement3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
