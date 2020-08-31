import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Imprimeretatchequef1Component } from './imprimeretatchequef1.component';

describe('Imprimeretatchequef1Component', () => {
  let component: Imprimeretatchequef1Component;
  let fixture: ComponentFixture<Imprimeretatchequef1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Imprimeretatchequef1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Imprimeretatchequef1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
