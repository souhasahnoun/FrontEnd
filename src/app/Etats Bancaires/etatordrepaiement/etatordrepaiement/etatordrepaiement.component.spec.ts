import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtatordrepaiementComponent } from './etatordrepaiement.component';

describe('EtatordrepaiementComponent', () => {
  let component: EtatordrepaiementComponent;
  let fixture: ComponentFixture<EtatordrepaiementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtatordrepaiementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtatordrepaiementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
