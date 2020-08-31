import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtattraitesfournisseurComponent } from './etattraitesfournisseur.component';

describe('EtattraitesfournisseurComponent', () => {
  let component: EtattraitesfournisseurComponent;
  let fixture: ComponentFixture<EtattraitesfournisseurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtattraitesfournisseurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtattraitesfournisseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
