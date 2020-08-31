import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtatrecouvrementcComponent } from './etatrecouvrementc.component';

describe('EtatrecouvrementcComponent', () => {
  let component: EtatrecouvrementcComponent;
  let fixture: ComponentFixture<EtatrecouvrementcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtatrecouvrementcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtatrecouvrementcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
