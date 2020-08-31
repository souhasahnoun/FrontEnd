import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImprimeretatcomptefComponent } from './imprimeretatcomptef.component';

describe('ImprimeretatcomptefComponent', () => {
  let component: ImprimeretatcomptefComponent;
  let fixture: ComponentFixture<ImprimeretatcomptefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImprimeretatcomptefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImprimeretatcomptefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
