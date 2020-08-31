import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BCFournisseurComponent } from './bcfournisseur.component';

describe('BCFournisseurComponent', () => {
  let component: BCFournisseurComponent;
  let fixture: ComponentFixture<BCFournisseurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BCFournisseurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BCFournisseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
