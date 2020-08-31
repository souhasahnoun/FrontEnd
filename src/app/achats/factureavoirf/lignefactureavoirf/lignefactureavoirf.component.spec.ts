import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LignefactureavoirfComponent } from './lignefactureavoirf.component';

describe('LignefactureavoirfComponent', () => {
  let component: LignefactureavoirfComponent;
  let fixture: ComponentFixture<LignefactureavoirfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LignefactureavoirfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LignefactureavoirfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
