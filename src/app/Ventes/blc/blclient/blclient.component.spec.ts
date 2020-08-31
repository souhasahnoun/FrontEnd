import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BLClientComponent } from './blclient.component';

describe('BLClientComponent', () => {
  let component: BLClientComponent;
  let fixture: ComponentFixture<BLClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BLClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BLClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
