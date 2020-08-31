import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReglementcComponent } from './reglementc.component';

describe('ReglementcComponent', () => {
  let component: ReglementcComponent;
  let fixture: ComponentFixture<ReglementcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReglementcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReglementcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
