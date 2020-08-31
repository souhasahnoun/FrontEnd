import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImprimerreglementcComponent } from './imprimerreglementc.component';

describe('ImprimerreglementcComponent', () => {
  let component: ImprimerreglementcComponent;
  let fixture: ComponentFixture<ImprimerreglementcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImprimerreglementcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImprimerreglementcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
