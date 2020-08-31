import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtattraitesclientComponent } from './etattraitesclient.component';

describe('EtattraitesclientComponent', () => {
  let component: EtattraitesclientComponent;
  let fixture: ComponentFixture<EtattraitesclientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtattraitesclientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtattraitesclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
