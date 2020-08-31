import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeblcComponent } from './listeblc.component';

describe('ListeblcComponent', () => {
  let component: ListeblcComponent;
  let fixture: ComponentFixture<ListeblcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeblcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeblcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
