import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturationfComponent } from './facturationf.component';

describe('FacturationfComponent', () => {
  let component: FacturationfComponent;
  let fixture: ComponentFixture<FacturationfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacturationfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturationfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
