import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImprimeretatrecouvrementcComponent } from './imprimeretatrecouvrementc.component';

describe('ImprimeretatrecouvrementcComponent', () => {
  let component: ImprimeretatrecouvrementcComponent;
  let fixture: ComponentFixture<ImprimeretatrecouvrementcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImprimeretatrecouvrementcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImprimeretatrecouvrementcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
