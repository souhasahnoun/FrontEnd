import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetourBeComponent } from './retour-be.component';

describe('RetourBeComponent', () => {
  let component: RetourBeComponent;
  let fixture: ComponentFixture<RetourBeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetourBeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetourBeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
