import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LigneblcComponent } from './ligneblc.component';

describe('LigneblcComponent', () => {
  let component: LigneblcComponent;
  let fixture: ComponentFixture<LigneblcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LigneblcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LigneblcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
