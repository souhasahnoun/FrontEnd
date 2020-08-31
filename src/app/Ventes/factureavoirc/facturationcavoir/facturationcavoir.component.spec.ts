import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturationcavoirComponent } from './facturationcavoir.component';

describe('FacturationcavoirComponent', () => {
  let component: FacturationcavoirComponent;
  let fixture: ComponentFixture<FacturationcavoirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacturationcavoirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturationcavoirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
