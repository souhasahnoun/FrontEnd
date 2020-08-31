import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListebccComponent } from './listebcc.component';

describe('ListebccComponent', () => {
  let component: ListebccComponent;
  let fixture: ComponentFixture<ListebccComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListebccComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListebccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
