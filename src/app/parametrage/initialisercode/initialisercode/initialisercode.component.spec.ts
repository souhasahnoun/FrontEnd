import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InitialisercodeComponent } from './initialisercode.component';

describe('InitialisercodeComponent', () => {
  let component: InitialisercodeComponent;
  let fixture: ComponentFixture<InitialisercodeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InitialisercodeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InitialisercodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
