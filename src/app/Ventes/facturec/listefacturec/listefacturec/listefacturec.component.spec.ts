import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListefacturecComponent } from './listefacturec.component';

describe('ListefacturecComponent', () => {
  let component: ListefacturecComponent;
  let fixture: ComponentFixture<ListefacturecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListefacturecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListefacturecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
