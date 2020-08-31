import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListebefComponent } from './listebef.component';

describe('ListebefComponent', () => {
  let component: ListebefComponent;
  let fixture: ComponentFixture<ListebefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListebefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListebefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
