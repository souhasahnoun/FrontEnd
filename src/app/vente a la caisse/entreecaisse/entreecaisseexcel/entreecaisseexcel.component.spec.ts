import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntreecaisseexcelComponent } from './entreecaisseexcel.component';

describe('EntreecaisseexcelComponent', () => {
  let component: EntreecaisseexcelComponent;
  let fixture: ComponentFixture<EntreecaisseexcelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntreecaisseexcelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntreecaisseexcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
