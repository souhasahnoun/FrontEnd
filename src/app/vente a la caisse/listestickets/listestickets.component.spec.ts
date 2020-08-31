import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListesticketsComponent } from './listestickets.component';

describe('ListesticketsComponent', () => {
  let component: ListesticketsComponent;
  let fixture: ComponentFixture<ListesticketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListesticketsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListesticketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
