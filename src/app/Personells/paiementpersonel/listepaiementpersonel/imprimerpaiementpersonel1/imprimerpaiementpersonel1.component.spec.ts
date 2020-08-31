import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Imprimerpaiementpersonel1Component } from './imprimerpaiementpersonel1.component';

describe('Imprimerpaiementpersonel1Component', () => {
  let component: Imprimerpaiementpersonel1Component;
  let fixture: ComponentFixture<Imprimerpaiementpersonel1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Imprimerpaiementpersonel1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Imprimerpaiementpersonel1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
