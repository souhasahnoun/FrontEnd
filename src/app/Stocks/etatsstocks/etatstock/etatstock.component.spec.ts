import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtatstockComponent } from './etatstock.component';

describe('EtatstockComponent', () => {
  let component: EtatstockComponent;
  let fixture: ComponentFixture<EtatstockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtatstockComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtatstockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
