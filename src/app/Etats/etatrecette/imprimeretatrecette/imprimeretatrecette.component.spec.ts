import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImprimeretatrecetteComponent } from './imprimeretatrecette.component';

describe('ImprimeretatrecetteComponent', () => {
  let component: ImprimeretatrecetteComponent;
  let fixture: ComponentFixture<ImprimeretatrecetteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImprimeretatrecetteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImprimeretatrecetteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
