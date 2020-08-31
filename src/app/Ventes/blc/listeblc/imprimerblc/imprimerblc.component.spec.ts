import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImprimerblcComponent } from './imprimerblc.component';

describe('ImprimerblcComponent', () => {
  let component: ImprimerblcComponent;
  let fixture: ComponentFixture<ImprimerblcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImprimerblcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImprimerblcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
