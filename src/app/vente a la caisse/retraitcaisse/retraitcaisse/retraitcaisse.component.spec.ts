import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetraitcaisseComponent } from './retraitcaisse.component';

describe('RetraitcaisseComponent', () => {
  let component: RetraitcaisseComponent;
  let fixture: ComponentFixture<RetraitcaisseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetraitcaisseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetraitcaisseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
