import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListesfichesgarentiepdfComponent } from './listesfichesgarentiepdf.component';

describe('ListesfichesgarentiepdfComponent', () => {
  let component: ListesfichesgarentiepdfComponent;
  let fixture: ComponentFixture<ListesfichesgarentiepdfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListesfichesgarentiepdfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListesfichesgarentiepdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
