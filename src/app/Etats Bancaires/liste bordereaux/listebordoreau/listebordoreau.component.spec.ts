import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListebordoreauComponent } from './listebordoreau.component';

describe('ListebordoreauComponent', () => {
  let component: ListebordoreauComponent;
  let fixture: ComponentFixture<ListebordoreauComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListebordoreauComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListebordoreauComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
