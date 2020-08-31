import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturationcComponent } from './facturationc.component';

describe('FacturationcComponent', () => {
  let component: FacturationcComponent;
  let fixture: ComponentFixture<FacturationcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacturationcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturationcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
