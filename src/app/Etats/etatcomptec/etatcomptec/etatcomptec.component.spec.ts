import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtatcomptecComponent } from './etatcomptec.component';

describe('EtatcomptecComponent', () => {
  let component: EtatcomptecComponent;
  let fixture: ComponentFixture<EtatcomptecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtatcomptecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtatcomptecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
