import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListesfichesgarentieexcelComponent } from './listesfichesgarentieexcel.component';

describe('ListesfichesgarentieexcelComponent', () => {
  let component: ListesfichesgarentieexcelComponent;
  let fixture: ComponentFixture<ListesfichesgarentieexcelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListesfichesgarentieexcelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListesfichesgarentieexcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
