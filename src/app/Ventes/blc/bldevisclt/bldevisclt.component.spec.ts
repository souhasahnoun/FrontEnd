import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BldeviscltComponent } from './bldevisclt.component';

describe('BldeviscltComponent', () => {
  let component: BldeviscltComponent;
  let fixture: ComponentFixture<BldeviscltComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BldeviscltComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BldeviscltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
