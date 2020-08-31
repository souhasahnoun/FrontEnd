import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturationfavoirComponent } from './facturationfavoir.component';

describe('FacturationfavoirComponent', () => {
  let component: FacturationfavoirComponent;
  let fixture: ComponentFixture<FacturationfavoirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacturationfavoirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturationfavoirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
