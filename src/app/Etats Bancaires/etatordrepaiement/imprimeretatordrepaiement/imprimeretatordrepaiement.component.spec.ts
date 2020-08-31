import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImprimeretatordrepaiementComponent } from './imprimeretatordrepaiement.component';

describe('ImprimeretatordrepaiementComponent', () => {
  let component: ImprimeretatordrepaiementComponent;
  let fixture: ComponentFixture<ImprimeretatordrepaiementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImprimeretatordrepaiementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImprimeretatordrepaiementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
