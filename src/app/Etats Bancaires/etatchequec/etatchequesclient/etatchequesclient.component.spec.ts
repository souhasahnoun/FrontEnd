import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtatchequesclientComponent } from './etatchequesclient.component';

describe('EtatchequesclientComponent', () => {
  let component: EtatchequesclientComponent;
  let fixture: ComponentFixture<EtatchequesclientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtatchequesclientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtatchequesclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
