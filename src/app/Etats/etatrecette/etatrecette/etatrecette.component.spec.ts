import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtatrecetteComponent } from './etatrecette.component';

describe('EtatrecetteComponent', () => {
  let component: EtatrecetteComponent;
  let fixture: ComponentFixture<EtatrecetteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtatrecetteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtatrecetteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
