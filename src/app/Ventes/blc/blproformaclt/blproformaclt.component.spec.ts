import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlproformacltComponent } from './blproformaclt.component';

describe('BlproformacltComponent', () => {
  let component: BlproformacltComponent;
  let fixture: ComponentFixture<BlproformacltComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlproformacltComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlproformacltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
