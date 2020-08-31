import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LignefactureavoircComponent } from './lignefactureavoirc.component';

describe('LignefactureavoircComponent', () => {
  let component: LignefactureavoircComponent;
  let fixture: ComponentFixture<LignefactureavoircComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LignefactureavoircComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LignefactureavoircComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
