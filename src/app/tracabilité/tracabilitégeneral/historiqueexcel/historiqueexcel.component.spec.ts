import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriqueexcelComponent } from './historiqueexcel.component';

describe('HistoriqueexcelComponent', () => {
  let component: HistoriqueexcelComponent;
  let fixture: ComponentFixture<HistoriqueexcelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoriqueexcelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriqueexcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
