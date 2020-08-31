import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Suivireglement4Component } from './suivireglement4.component';

describe('Suivireglement4Component', () => {
  let component: Suivireglement4Component;
  let fixture: ComponentFixture<Suivireglement4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Suivireglement4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Suivireglement4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
