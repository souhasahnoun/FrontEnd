import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriquepdfComponent } from './historiquepdf.component';

describe('HistoriquepdfComponent', () => {
  let component: HistoriquepdfComponent;
  let fixture: ComponentFixture<HistoriquepdfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoriquepdfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriquepdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
