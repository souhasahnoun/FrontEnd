import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaisiereglementComponent } from './saisiereglement.component';

describe('SaisiereglementComponent', () => {
  let component: SaisiereglementComponent;
  let fixture: ComponentFixture<SaisiereglementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaisiereglementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaisiereglementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
