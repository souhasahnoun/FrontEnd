import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BEFournisseurComponent } from './befournisseur.component';

describe('BEFournisseurComponent', () => {
  let component: BEFournisseurComponent;
  let fixture: ComponentFixture<BEFournisseurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BEFournisseurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BEFournisseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
