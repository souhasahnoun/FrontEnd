import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Journalcaisse1Component } from './journalcaisse1.component';

describe('Journalcaisse1Component', () => {
  let component: Journalcaisse1Component;
  let fixture: ComponentFixture<Journalcaisse1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Journalcaisse1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Journalcaisse1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
