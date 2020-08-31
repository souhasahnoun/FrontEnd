import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaiementpersonelComponent } from './paiementpersonel.component';

describe('PaiementpersonelComponent', () => {
  let component: PaiementpersonelComponent;
  let fixture: ComponentFixture<PaiementpersonelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaiementpersonelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaiementpersonelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
