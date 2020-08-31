import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeretenuesourcecComponent } from './listeretenuesourcec.component';

describe('ListeretenuesourcecComponent', () => {
  let component: ListeretenuesourcecComponent;
  let fixture: ComponentFixture<ListeretenuesourcecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeretenuesourcecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeretenuesourcecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
