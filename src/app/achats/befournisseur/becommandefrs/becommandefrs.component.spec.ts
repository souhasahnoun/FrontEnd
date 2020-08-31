import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BecommandefrsComponent } from './becommandefrs.component';

describe('BecommandefrsComponent', () => {
  let component: BecommandefrsComponent;
  let fixture: ComponentFixture<BecommandefrsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BecommandefrsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BecommandefrsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
