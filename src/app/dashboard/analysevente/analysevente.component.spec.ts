import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalyseventeComponent } from './analysevente.component';

describe('AnalyseventeComponent', () => {
  let component: AnalyseventeComponent;
  let fixture: ComponentFixture<AnalyseventeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnalyseventeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnalyseventeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
