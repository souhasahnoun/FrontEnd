import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListefichegarentieComponent } from './listefichegarentie.component';

describe('ListefichegarentieComponent', () => {
  let component: ListefichegarentieComponent;
  let fixture: ComponentFixture<ListefichegarentieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListefichegarentieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListefichegarentieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
