import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaiementpersonelpdfComponent } from './paiementpersonelpdf.component';

describe('PaiementpersonelpdfComponent', () => {
  let component: PaiementpersonelpdfComponent;
  let fixture: ComponentFixture<PaiementpersonelpdfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaiementpersonelpdfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaiementpersonelpdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
