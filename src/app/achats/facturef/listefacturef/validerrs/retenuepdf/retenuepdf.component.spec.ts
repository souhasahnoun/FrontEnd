import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetenuepdfComponent } from './retenuepdf.component';

describe('RetenuepdfComponent', () => {
  let component: RetenuepdfComponent;
  let fixture: ComponentFixture<RetenuepdfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetenuepdfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetenuepdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
