import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Imprimerretraitcaisse1Component } from './imprimerretraitcaisse1.component';

describe('Imprimerretraitcaisse1Component', () => {
  let component: Imprimerretraitcaisse1Component;
  let fixture: ComponentFixture<Imprimerretraitcaisse1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Imprimerretraitcaisse1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Imprimerretraitcaisse1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
