import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TracabilitegeneralComponent } from './tracabilitegeneral.component';

describe('TracabilitegeneralComponent', () => {
  let component: TracabilitegeneralComponent;
  let fixture: ComponentFixture<TracabilitegeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TracabilitegeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TracabilitegeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
