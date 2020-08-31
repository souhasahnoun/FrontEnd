import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionsouchesComponent } from './gestionsouches.component';

describe('GestionsouchesComponent', () => {
  let component: GestionsouchesComponent;
  let fixture: ComponentFixture<GestionsouchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionsouchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionsouchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
