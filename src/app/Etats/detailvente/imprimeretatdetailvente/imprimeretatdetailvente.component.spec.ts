import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImprimeretatdetailventeComponent } from './imprimeretatdetailvente.component';

describe('ImprimeretatdetailventeComponent', () => {
  let component: ImprimeretatdetailventeComponent;
  let fixture: ComponentFixture<ImprimeretatdetailventeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImprimeretatdetailventeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImprimeretatdetailventeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
