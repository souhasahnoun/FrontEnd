import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtatchequesfournisseurComponent } from './etatchequesfournisseur.component';

describe('EtatchequesfournisseurComponent', () => {
  let component: EtatchequesfournisseurComponent;
  let fixture: ComponentFixture<EtatchequesfournisseurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtatchequesfournisseurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtatchequesfournisseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
