import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtatfacturecComponent } from './etatfacturec.component';

describe('EtatfacturecComponent', () => {
  let component: EtatfacturecComponent;
  let fixture: ComponentFixture<EtatfacturecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtatfacturecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtatfacturecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
