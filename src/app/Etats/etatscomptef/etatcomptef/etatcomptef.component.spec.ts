import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtatcomptefComponent } from './etatcomptef.component';

describe('EtatcomptefComponent', () => {
  let component: EtatcomptefComponent;
  let fixture: ComponentFixture<EtatcomptefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtatcomptefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtatcomptefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
