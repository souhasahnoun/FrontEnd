import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListefichereceptionComponent } from './listefichereception.component';

describe('ListefichereceptionComponent', () => {
  let component: ListefichereceptionComponent;
  let fixture: ComponentFixture<ListefichereceptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListefichereceptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListefichereceptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
