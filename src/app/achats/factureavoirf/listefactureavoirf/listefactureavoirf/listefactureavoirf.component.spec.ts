import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListefactureavoirfComponent } from './listefactureavoirf.component';

describe('ListefactureavoirfComponent', () => {
  let component: ListefactureavoirfComponent;
  let fixture: ComponentFixture<ListefactureavoirfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListefactureavoirfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListefactureavoirfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
