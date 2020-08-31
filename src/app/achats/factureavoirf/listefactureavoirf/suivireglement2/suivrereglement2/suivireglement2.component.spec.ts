import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Suivireglement2Component } from './suivireglement2.component';

describe('Suivireglement2Component', () => {
  let component: Suivireglement2Component;
  let fixture: ComponentFixture<Suivireglement2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Suivireglement2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Suivireglement2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
