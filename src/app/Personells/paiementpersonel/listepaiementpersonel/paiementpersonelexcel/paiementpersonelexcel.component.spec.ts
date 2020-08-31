import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaiementpersonelexcelComponent } from './paiementpersonelexcel.component';

describe('PaiementpersonelexcelComponent', () => {
  let component: PaiementpersonelexcelComponent;
  let fixture: ComponentFixture<PaiementpersonelexcelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaiementpersonelexcelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaiementpersonelexcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
