import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImprimeretatcomptecComponent } from './imprimeretatcomptec.component';

describe('ImprimeretatcomptecComponent', () => {
  let component: ImprimeretatcomptecComponent;
  let fixture: ComponentFixture<ImprimeretatcomptecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImprimeretatcomptecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImprimeretatcomptecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
