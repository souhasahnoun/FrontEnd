import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaiementfComponent } from './paiementf.component';

describe('PaiementfComponent', () => {
  let component: PaiementfComponent;
  let fixture: ComponentFixture<PaiementfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaiementfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaiementfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
