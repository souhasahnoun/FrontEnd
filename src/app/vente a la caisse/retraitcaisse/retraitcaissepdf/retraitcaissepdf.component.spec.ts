import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetraitcaissepdfComponent } from './retraitcaissepdf.component';

describe('RetraitcaissepdfComponent', () => {
  let component: RetraitcaissepdfComponent;
  let fixture: ComponentFixture<RetraitcaissepdfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetraitcaissepdfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetraitcaissepdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
