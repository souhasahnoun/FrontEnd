import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtatfacturefComponent } from './etatfacturef.component';

describe('EtatfacturefComponent', () => {
  let component: EtatfacturefComponent;
  let fixture: ComponentFixture<EtatfacturefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtatfacturefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtatfacturefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
