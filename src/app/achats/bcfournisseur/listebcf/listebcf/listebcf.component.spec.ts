import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListebcfComponent } from './listebcf.component';

describe('ListebcfComponent', () => {
  let component: ListebcfComponent;
  let fixture: ComponentFixture<ListebcfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListebcfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListebcfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
