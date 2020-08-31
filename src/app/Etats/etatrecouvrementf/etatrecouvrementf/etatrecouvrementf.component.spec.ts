import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtatrecouvrementfComponent } from './etatrecouvrementf.component';

describe('EtatrecouvrementfComponent', () => {
  let component: EtatrecouvrementfComponent;
  let fixture: ComponentFixture<EtatrecouvrementfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtatrecouvrementfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtatrecouvrementfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
