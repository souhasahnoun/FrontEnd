import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeretenuesourcefComponent } from './listeretenuesourcef.component';

describe('ListeretenuesourcefComponent', () => {
  let component: ListeretenuesourcefComponent;
  let fixture: ComponentFixture<ListeretenuesourcefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeretenuesourcefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeretenuesourcefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
