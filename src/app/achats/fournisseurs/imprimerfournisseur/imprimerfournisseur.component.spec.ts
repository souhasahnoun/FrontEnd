import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImprimerfournisseurComponent } from './imprimerfournisseur.component';

describe('ImprimerfournisseurComponent', () => {
  let component: ImprimerfournisseurComponent;
  let fixture: ComponentFixture<ImprimerfournisseurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImprimerfournisseurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImprimerfournisseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
