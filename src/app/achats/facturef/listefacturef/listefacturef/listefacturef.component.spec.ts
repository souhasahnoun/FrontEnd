import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListefacturefComponent } from './listefacturef.component';

describe('ListefacturefComponent', () => {
  let component: ListefacturefComponent;
  let fixture: ComponentFixture<ListefacturefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListefacturefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListefacturefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
