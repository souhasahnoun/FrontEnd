import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtatespecesclientComponent } from './etatespecesclient.component';

describe('EtatespecesclientComponent', () => {
  let component: EtatespecesclientComponent;
  let fixture: ComponentFixture<EtatespecesclientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtatespecesclientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtatespecesclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
