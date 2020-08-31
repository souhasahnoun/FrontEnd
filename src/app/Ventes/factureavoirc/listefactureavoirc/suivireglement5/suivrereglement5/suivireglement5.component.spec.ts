import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Suivireglement5Component } from './suivireglement5.component';

describe('Suivireglement5Component', () => {
  let component: Suivireglement5Component;
  let fixture: ComponentFixture<Suivireglement5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Suivireglement5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Suivireglement5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
