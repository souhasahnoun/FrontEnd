import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImprimerdevisComponent } from './imprimerdevis.component';

describe('ImprimerdevisComponent', () => {
  let component: ImprimerdevisComponent;
  let fixture: ComponentFixture<ImprimerdevisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImprimerdevisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImprimerdevisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
