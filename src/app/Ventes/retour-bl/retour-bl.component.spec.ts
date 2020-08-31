import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetourBLComponent } from './retour-bl.component';

describe('RetourBLComponent', () => {
  let component: RetourBLComponent;
  let fixture: ComponentFixture<RetourBLComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetourBLComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetourBLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
