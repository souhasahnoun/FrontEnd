import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetraitcaisseexcelComponent } from './retraitcaisseexcel.component';

describe('RetraitcaisseexcelComponent', () => {
  let component: RetraitcaisseexcelComponent;
  let fixture: ComponentFixture<RetraitcaisseexcelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetraitcaisseexcelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetraitcaisseexcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
