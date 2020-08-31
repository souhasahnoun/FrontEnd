import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Imprimerdevis1Component } from './imprimerdevis1.component';

describe('Imprimerdevis1Component', () => {
  let component: Imprimerdevis1Component;
  let fixture: ComponentFixture<Imprimerdevis1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Imprimerdevis1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Imprimerdevis1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
