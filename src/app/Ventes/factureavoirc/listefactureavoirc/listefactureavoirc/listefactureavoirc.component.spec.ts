import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListefactureavoircComponent } from './listefactureavoirc.component';

describe('ListefactureavoircComponent', () => {
  let component: ListefactureavoircComponent;
  let fixture: ComponentFixture<ListefactureavoircComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListefactureavoircComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListefactureavoircComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
